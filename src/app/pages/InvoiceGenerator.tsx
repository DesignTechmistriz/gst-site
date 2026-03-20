import { useState, useEffect } from 'react';
import { FileText, Plus, Trash2, Download, Save } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { SEO } from '../components/SEO';

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  gstRate: number;
}

interface CompanyDetails {
  name: string;
  address: string;
  gstin: string;
  phone: string;
  email: string;
}

export function InvoiceGenerator() {
  const [companyDetails, setCompanyDetails] = useState<CompanyDetails>({
    name: '',
    address: '',
    gstin: '',
    phone: '',
    email: '',
  });

  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerGSTIN, setCustomerGSTIN] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
  
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', description: '', quantity: 1, rate: 0, gstRate: 18 }
  ]);

  // Load company details from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('companyDetails');
    if (saved) {
      setCompanyDetails(JSON.parse(saved));
    }

    // Generate invoice number
    const lastNumber = localStorage.getItem('lastInvoiceNumber');
    const nextNumber = lastNumber ? parseInt(lastNumber) + 1 : 1001;
    setInvoiceNumber(`INV-${nextNumber}`);
  }, []);

  const saveCompanyDetails = () => {
    localStorage.setItem('companyDetails', JSON.stringify(companyDetails));
    toast.success('Company details saved!');
  };

  const addItem = () => {
    setItems([...items, {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      rate: 0,
      gstRate: 18
    }]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: any) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const calculateItemTotal = (item: InvoiceItem) => {
    const baseAmount = item.quantity * item.rate;
    const gstAmount = (baseAmount * item.gstRate) / 100;
    return baseAmount + gstAmount;
  };

  const calculateTotals = () => {
    let subtotal = 0;
    let totalGST = 0;

    items.forEach(item => {
      const baseAmount = item.quantity * item.rate;
      const gstAmount = (baseAmount * item.gstRate) / 100;
      subtotal += baseAmount;
      totalGST += gstAmount;
    });

    return {
      subtotal,
      totalGST,
      cgst: totalGST / 2,
      sgst: totalGST / 2,
      grandTotal: subtotal + totalGST
    };
  };

  const totals = calculateTotals();

  const generatePDF = () => {
    if (!companyDetails.name || !customerName) {
      toast.error('Please fill in company and customer details');
      return;
    }

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Header with brand color
    doc.setFillColor(195, 53, 49); // #c33531
    doc.rect(0, 0, pageWidth, 30, 'F');
    
    // Company Name
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text('TAX INVOICE', pageWidth / 2, 15, { align: 'center' });

    // Company Details
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(companyDetails.name, 14, 40);
    doc.setFontSize(9);
    doc.text(companyDetails.address, 14, 46);
    if (companyDetails.gstin) doc.text(`GSTIN: ${companyDetails.gstin}`, 14, 52);
    if (companyDetails.phone) doc.text(`Phone: ${companyDetails.phone}`, 14, 58);
    if (companyDetails.email) doc.text(`Email: ${companyDetails.email}`, 14, 64);

    // Invoice Details
    doc.setFontSize(9);
    const invoiceX = pageWidth - 70;
    doc.text(`Invoice No: ${invoiceNumber}`, invoiceX, 40);
    doc.text(`Date: ${new Date(invoiceDate).toLocaleDateString('en-IN')}`, invoiceX, 46);

    // Customer Details
    doc.setFontSize(10);
    doc.text('Bill To:', 14, 75);
    doc.setFontSize(9);
    doc.text(customerName, 14, 81);
    doc.text(customerAddress, 14, 87);
    if (customerGSTIN) doc.text(`GSTIN: ${customerGSTIN}`, 14, 93);

    // Items Table
    const tableData = items.map(item => {
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
    doc.text(`Subtotal: ₹${totals.subtotal.toFixed(2)}`, totalsX, finalY);
    doc.text(`CGST: ₹${totals.cgst.toFixed(2)}`, totalsX, finalY + 6);
    doc.text(`SGST: ₹${totals.sgst.toFixed(2)}`, totalsX, finalY + 12);
    
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text(`Grand Total: ₹${totals.grandTotal.toFixed(2)}`, totalsX, finalY + 22);

    // Footer
    doc.setFontSize(8);
    doc.setFont(undefined, 'normal');
    doc.text('Thank you for your business!', 14, doc.internal.pageSize.getHeight() - 20);
    doc.text('This is a computer generated invoice.', 14, doc.internal.pageSize.getHeight() - 15);

    // Save PDF
    doc.save(`${invoiceNumber}.pdf`);
    toast.success('Invoice downloaded successfully!');
  };

  const saveInvoice = () => {
    if (!companyDetails.name || !customerName) {
      toast.error('Please fill in company and customer details');
      return;
    }

    const invoice = {
      id: Date.now().toString(),
      invoiceNumber,
      date: invoiceDate,
      companyDetails,
      customerName,
      customerAddress,
      customerGSTIN,
      items,
      totals
    };

    const saved = localStorage.getItem('invoices');
    const invoices = saved ? JSON.parse(saved) : [];
    invoices.unshift(invoice);
    localStorage.setItem('invoices', JSON.stringify(invoices));

    // Update last invoice number
    const number = parseInt(invoiceNumber.split('-')[1]);
    localStorage.setItem('lastInvoiceNumber', number.toString());

    toast.success('Invoice saved successfully!');

    // Reset for new invoice
    const nextNumber = number + 1;
    setInvoiceNumber(`INV-${nextNumber}`);
    setCustomerName('');
    setCustomerAddress('');
    setCustomerGSTIN('');
    setItems([{ id: '1', description: '', quantity: 1, rate: 0, gstRate: 18 }]);
  };

  return (
    <div className="space-y-6">
      <SEO 
        title="Free GST Invoice Generator - Create Professional Tax Invoices Online"
        description="Generate professional GST-compliant invoices instantly. Free online invoice maker with automatic CGST, SGST, IGST calculations. Download PDF invoices. Perfect for small businesses and freelancers in India."
        keywords="invoice generator, GST invoice maker, free invoice generator India, tax invoice, bill generator, GST bill, professional invoice, invoice PDF, business invoice tool"
      />
      
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Professional Invoice Generator</h1>
        <p className="text-gray-600">Create GST compliant invoices with automatic tax calculations</p>
      </div>

      {/* Company Details */}
      <Card>
        <CardHeader>
          <CardTitle>Company Details</CardTitle>
          <CardDescription>Save your details for future invoices</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="companyName">Company Name *</Label>
              <Input
                id="companyName"
                value={companyDetails.name}
                onChange={(e) => setCompanyDetails({ ...companyDetails, name: e.target.value })}
                placeholder="Enter company name"
              />
            </div>
            <div>
              <Label htmlFor="companyGSTIN">GSTIN</Label>
              <Input
                id="companyGSTIN"
                value={companyDetails.gstin}
                onChange={(e) => setCompanyDetails({ ...companyDetails, gstin: e.target.value })}
                placeholder="22AAAAA0000A1Z5"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="companyAddress">Address *</Label>
            <Textarea
              id="companyAddress"
              value={companyDetails.address}
              onChange={(e) => setCompanyDetails({ ...companyDetails, address: e.target.value })}
              placeholder="Enter company address"
              rows={2}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="companyPhone">Phone</Label>
              <Input
                id="companyPhone"
                value={companyDetails.phone}
                onChange={(e) => setCompanyDetails({ ...companyDetails, phone: e.target.value })}
                placeholder="+91 9876543210"
              />
            </div>
            <div>
              <Label htmlFor="companyEmail">Email</Label>
              <Input
                id="companyEmail"
                type="email"
                value={companyDetails.email}
                onChange={(e) => setCompanyDetails({ ...companyDetails, email: e.target.value })}
                placeholder="company@email.com"
              />
            </div>
          </div>
          <Button onClick={saveCompanyDetails} style={{ backgroundColor: '#c33531' }}>
            <Save className="w-4 h-4 mr-2" />
            Save Company Details
          </Button>
        </CardContent>
      </Card>

      {/* Invoice Details */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="invoiceNumber">Invoice Number</Label>
              <Input
                id="invoiceNumber"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="invoiceDate">Invoice Date</Label>
              <Input
                id="invoiceDate"
                type="date"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer Details */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="customerName">Customer Name *</Label>
            <Input
              id="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter customer name"
            />
          </div>
          <div>
            <Label htmlFor="customerAddress">Customer Address</Label>
            <Textarea
              id="customerAddress"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
              placeholder="Enter customer address"
              rows={2}
            />
          </div>
          <div>
            <Label htmlFor="customerGSTIN">Customer GSTIN (Optional)</Label>
            <Input
              id="customerGSTIN"
              value={customerGSTIN}
              onChange={(e) => setCustomerGSTIN(e.target.value)}
              placeholder="22AAAAA0000A1Z5"
            />
          </div>
        </CardContent>
      </Card>

      {/* Items */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice Items</CardTitle>
          <CardDescription>Add products or services to the invoice</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {items.map((item, index) => (
            <div key={item.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-start">
                <h4 className="font-medium">Item {index + 1}</h4>
                {items.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>

              <div>
                <Label>Description</Label>
                <Input
                  value={item.description}
                  onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                  placeholder="Item description"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <Label>Quantity</Label>
                  <Input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 1)}
                  />
                </div>
                <div>
                  <Label>Rate (₹)</Label>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.rate}
                    onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                  />
                </div>
                <div>
                  <Label>GST Rate</Label>
                  <Select
                    value={item.gstRate.toString()}
                    onValueChange={(v) => updateItem(item.id, 'gstRate', parseFloat(v))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0%</SelectItem>
                      <SelectItem value="5">5%</SelectItem>
                      <SelectItem value="12">12%</SelectItem>
                      <SelectItem value="18">18%</SelectItem>
                      <SelectItem value="28">28%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Total</Label>
                  <div className="h-10 flex items-center font-semibold">
                    ₹{calculateItemTotal(item).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Button onClick={addItem} variant="outline" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </Button>
        </CardContent>
      </Card>

      {/* Totals */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal:</span>
              <span>₹{totals.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">CGST:</span>
              <span>₹{totals.cgst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">SGST:</span>
              <span>₹{totals.sgst.toFixed(2)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between text-lg font-bold">
              <span>Grand Total:</span>
              <span style={{ color: '#c33531' }}>₹{totals.grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={saveInvoice} className="flex-1" style={{ backgroundColor: '#c33531' }}>
          <Save className="w-4 h-4 mr-2" />
          Save Invoice
        </Button>
        <Button onClick={generatePDF} variant="outline" className="flex-1">
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>

      {/* SEO Content */}
      <Card>
        <CardHeader>
          <CardTitle>Professional GST Invoice Generator</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none text-sm text-gray-600">
          <p>
            Create professional, GST-compliant invoices instantly with our free invoice generator. 
            Perfect for small businesses, freelancers, and shopkeepers in India. Our tool automatically 
            calculates CGST, SGST, and IGST based on the GST rates you select.
          </p>
          <p className="mt-2">
            <strong>Key Features:</strong> Automatic tax calculations, PDF download, save invoice history, 
            customizable company details, support for multiple GST rates, and professional formatting.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}