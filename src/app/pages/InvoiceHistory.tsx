import { useState, useEffect } from 'react';
import { History, Download, Trash2, Eye, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { toast } from 'sonner';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { SEO } from '../components/SEO';

interface Invoice {
  id: string;
  invoiceNumber: string;
  date: string;
  companyDetails: any;
  customerName: string;
  customerAddress: string;
  customerGSTIN: string;
  items: any[];
  totals: any;
}

export function InvoiceHistory() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  useEffect(() => {
    loadInvoices();
  }, []);

  const loadInvoices = () => {
    const saved = localStorage.getItem('invoices');
    if (saved) {
      setInvoices(JSON.parse(saved));
    }
  };

  const deleteInvoice = (id: string) => {
    const updated = invoices.filter(inv => inv.id !== id);
    setInvoices(updated);
    localStorage.setItem('invoices', JSON.stringify(updated));
    toast.success('Invoice deleted');
  };

  const downloadInvoice = (invoice: Invoice) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Header with brand color
    doc.setFillColor(195, 53, 49);
    doc.rect(0, 0, pageWidth, 30, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text('TAX INVOICE', pageWidth / 2, 15, { align: 'center' });

    // Company Details
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(invoice.companyDetails.name, 14, 40);
    doc.setFontSize(9);
    doc.text(invoice.companyDetails.address, 14, 46);
    if (invoice.companyDetails.gstin) doc.text(`GSTIN: ${invoice.companyDetails.gstin}`, 14, 52);
    if (invoice.companyDetails.phone) doc.text(`Phone: ${invoice.companyDetails.phone}`, 14, 58);
    if (invoice.companyDetails.email) doc.text(`Email: ${invoice.companyDetails.email}`, 14, 64);

    // Invoice Details
    const invoiceX = pageWidth - 70;
    doc.text(`Invoice No: ${invoice.invoiceNumber}`, invoiceX, 40);
    doc.text(`Date: ${new Date(invoice.date).toLocaleDateString('en-IN')}`, invoiceX, 46);

    // Customer Details
    doc.setFontSize(10);
    doc.text('Bill To:', 14, 75);
    doc.setFontSize(9);
    doc.text(invoice.customerName, 14, 81);
    doc.text(invoice.customerAddress, 14, 87);
    if (invoice.customerGSTIN) doc.text(`GSTIN: ${invoice.customerGSTIN}`, 14, 93);

    // Items Table
    const tableData = invoice.items.map(item => {
      const baseAmount = item.quantity * item.rate;
      const gstAmount = (baseAmount * item.gstRate) / 100;
      const total = baseAmount + gstAmount;
      
      return [
        item.description,
        item.quantity.toString(),
        `₹${item.rate.toFixed(2)}`,
        `${item.gstRate}%`,
        `₹${baseAmount.toFixed(2)}`,
        `₹${gstAmount.toFixed(2)}`,
        `₹${total.toFixed(2)}`
      ];
    });

    autoTable(doc, {
      startY: 100,
      head: [['Description', 'Qty', 'Rate', 'GST%', 'Amount', 'GST', 'Total']],
      body: tableData,
      theme: 'striped',
      headStyles: { fillColor: [195, 53, 49] },
      columnStyles: {
        0: { cellWidth: 60 },
        1: { cellWidth: 15, halign: 'center' },
        2: { cellWidth: 25, halign: 'right' },
        3: { cellWidth: 15, halign: 'center' },
        4: { cellWidth: 25, halign: 'right' },
        5: { cellWidth: 25, halign: 'right' },
        6: { cellWidth: 25, halign: 'right' }
      }
    });

    // @ts-ignore
    const finalY = doc.lastAutoTable.finalY + 10;

    // Totals
    const totalsX = pageWidth - 70;
    doc.setFontSize(9);
    doc.text(`Subtotal: ₹${invoice.totals.subtotal.toFixed(2)}`, totalsX, finalY);
    doc.text(`CGST: ₹${invoice.totals.cgst.toFixed(2)}`, totalsX, finalY + 6);
    doc.text(`SGST: ₹${invoice.totals.sgst.toFixed(2)}`, totalsX, finalY + 12);
    
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text(`Grand Total: ₹${invoice.totals.grandTotal.toFixed(2)}`, totalsX, finalY + 22);

    // Footer
    doc.setFontSize(8);
    doc.setFont(undefined, 'normal');
    doc.text('Thank you for your business!', 14, doc.internal.pageSize.getHeight() - 20);
    doc.text('This is a computer generated invoice.', 14, doc.internal.pageSize.getHeight() - 15);

    doc.save(`${invoice.invoiceNumber}.pdf`);
    toast.success('Invoice downloaded!');
  };

  const filteredInvoices = invoices.filter(invoice =>
    invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <SEO 
        title="Invoice History - View and Manage Your GST Invoices"
        description="Access, search, and download your saved GST invoices. Manage invoice history, view invoice details, and re-download PDF copies anytime. Free invoice management tool."
        keywords="invoice history, manage invoices, saved invoices, invoice tracker, invoice management, GST invoice records, download old invoices"
      />
      
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
          <History className="w-8 h-8" style={{ color: '#c33531' }} />
          Invoice History
        </h1>
        <p className="text-gray-600">View, download, and manage your saved invoices</p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search by invoice number or customer name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Invoices List */}
      {filteredInvoices.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <History className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {searchTerm ? 'No invoices found' : 'No invoices yet'}
            </h3>
            <p className="text-gray-600">
              {searchTerm 
                ? 'Try a different search term' 
                : 'Create your first invoice to see it here'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredInvoices.map((invoice) => (
            <Card key={invoice.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{invoice.invoiceNumber}</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(invoice.date).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold" style={{ color: '#c33531' }}>
                          ₹{invoice.totals.grandTotal.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-1 text-sm">
                      <p>
                        <span className="text-gray-600">Customer:</span>{' '}
                        <span className="font-medium">{invoice.customerName}</span>
                      </p>
                      <p>
                        <span className="text-gray-600">Items:</span>{' '}
                        <span>{invoice.items.length}</span>
                      </p>
                      {invoice.customerGSTIN && (
                        <p className="text-gray-600">GSTIN: {invoice.customerGSTIN}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedInvoice(invoice)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadInvoice(invoice)}
                      style={{ borderColor: '#c33531', color: '#c33531' }}
                    >
                      <Download className="w-4 h-4 mr-1" />
                      PDF
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (confirm('Are you sure you want to delete this invoice?')) {
                          deleteInvoice(invoice.id);
                        }
                      }}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Invoice Details Dialog */}
      <Dialog open={!!selectedInvoice} onOpenChange={() => setSelectedInvoice(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Invoice Details</DialogTitle>
          </DialogHeader>
          
          {selectedInvoice && (
            <div className="space-y-6">
              {/* Header */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xl">{selectedInvoice.invoiceNumber}</h3>
                    <p className="text-sm text-gray-600">
                      Date: {new Date(selectedInvoice.date).toLocaleDateString('en-IN')}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Total Amount</p>
                    <p className="text-2xl font-bold" style={{ color: '#c33531' }}>
                      ₹{selectedInvoice.totals.grandTotal.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Company & Customer Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">From:</h4>
                  <div className="text-sm space-y-1">
                    <p className="font-medium">{selectedInvoice.companyDetails.name}</p>
                    <p className="text-gray-600">{selectedInvoice.companyDetails.address}</p>
                    {selectedInvoice.companyDetails.gstin && (
                      <p className="text-gray-600">GSTIN: {selectedInvoice.companyDetails.gstin}</p>
                    )}
                    {selectedInvoice.companyDetails.phone && (
                      <p className="text-gray-600">Phone: {selectedInvoice.companyDetails.phone}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">To:</h4>
                  <div className="text-sm space-y-1">
                    <p className="font-medium">{selectedInvoice.customerName}</p>
                    <p className="text-gray-600">{selectedInvoice.customerAddress}</p>
                    {selectedInvoice.customerGSTIN && (
                      <p className="text-gray-600">GSTIN: {selectedInvoice.customerGSTIN}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Items */}
              <div>
                <h4 className="font-semibold mb-3">Items</h4>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-3">Description</th>
                        <th className="text-center p-3">Qty</th>
                        <th className="text-right p-3">Rate</th>
                        <th className="text-center p-3">GST</th>
                        <th className="text-right p-3">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedInvoice.items.map((item, index) => {
                        const baseAmount = item.quantity * item.rate;
                        const gstAmount = (baseAmount * item.gstRate) / 100;
                        const total = baseAmount + gstAmount;
                        
                        return (
                          <tr key={index} className="border-t">
                            <td className="p-3">{item.description}</td>
                            <td className="text-center p-3">{item.quantity}</td>
                            <td className="text-right p-3">₹{item.rate.toFixed(2)}</td>
                            <td className="text-center p-3">{item.gstRate}%</td>
                            <td className="text-right p-3">₹{total.toFixed(2)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Totals */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span>₹{selectedInvoice.totals.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">CGST:</span>
                    <span>₹{selectedInvoice.totals.cgst.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">SGST:</span>
                    <span>₹{selectedInvoice.totals.sgst.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-lg font-bold">
                    <span>Grand Total:</span>
                    <span style={{ color: '#c33531' }}>
                      ₹{selectedInvoice.totals.grandTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  onClick={() => downloadInvoice(selectedInvoice)}
                  className="flex-1"
                  style={{ backgroundColor: '#c33531' }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedInvoice(null)}
                  className="flex-1"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* SEO Content */}
      <Card>
        <CardHeader>
          <CardTitle>Manage Your Invoice History</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none text-sm text-gray-600">
          <p>
            Keep track of all your generated invoices in one place. Our invoice history feature lets you 
            search, view, and download any previously created invoice. All data is stored locally on your 
            device for privacy and offline access.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}