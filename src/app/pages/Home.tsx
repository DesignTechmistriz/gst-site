import { useState } from 'react';
import { Calculator, ArrowRight, ArrowLeft, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Link } from 'react-router';
import { SEO } from '../components/SEO';

export function Home() {
  const [mode, setMode] = useState<'forward' | 'reverse'>('forward');
  
  // Forward GST
  const [baseAmount, setBaseAmount] = useState('');
  const [gstRate, setGstRate] = useState('18');
  
  // Reverse GST
  const [totalAmount, setTotalAmount] = useState('');
  const [reverseGstRate, setReverseGstRate] = useState('18');

  // Forward GST Calculation
  const calculateForwardGST = () => {
    const base = parseFloat(baseAmount) || 0;
    const rate = parseFloat(gstRate) || 0;
    
    const gstAmount = (base * rate) / 100;
    const cgst = gstAmount / 2;
    const sgst = gstAmount / 2;
    const igst = gstAmount;
    const total = base + gstAmount;

    return { base, gstAmount, cgst, sgst, igst, total, rate };
  };

  // Reverse GST Calculation
  const calculateReverseGST = () => {
    const total = parseFloat(totalAmount) || 0;
    const rate = parseFloat(reverseGstRate) || 0;
    
    const base = total / (1 + rate / 100);
    const gstAmount = total - base;
    const cgst = gstAmount / 2;
    const sgst = gstAmount / 2;
    const igst = gstAmount;

    return { total, base, gstAmount, cgst, sgst, igst, rate };
  };

  const forwardResult = mode === 'forward' ? calculateForwardGST() : null;
  const reverseResult = mode === 'reverse' ? calculateReverseGST() : null;

  const gstRates = [
    { rate: '0', label: '0% - Essential Items' },
    { rate: '5', label: '5% - Common Use' },
    { rate: '12', label: '12% - Standard' },
    { rate: '18', label: '18% - Most Common' },
    { rate: '28', label: '28% - Luxury Items' },
  ];

  return (
    <div className="space-y-8">
      <SEO 
        title="Free GST Calculator India - Calculate CGST, SGST, IGST Online"
        description="Free online GST calculator for India. Calculate GST, CGST, SGST, and IGST instantly. Add or remove GST with accurate tax calculations for all rates - 0%, 5%, 12%, 18%, 28%."
        keywords="GST calculator, GST calculator India, calculate GST online, CGST SGST calculator, IGST calculator, reverse GST calculator, forward GST calculator, free GST tool, tax calculator India"
      />
      
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Free GST Calculator for India
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Calculate GST, CGST, SGST, and IGST instantly. Generate professional invoices with automatic tax calculations. 
          Perfect for businesses, freelancers, and shopkeepers.
        </p>
      </div>

      {/* Main Calculator */}
      <Card className="border-2">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Calculator className="w-6 h-6" style={{ color: '#c33531' }} />
            GST Calculator
          </CardTitle>
          <CardDescription>
            Calculate GST forward (add GST to base amount) or reverse (extract GST from total amount)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={mode} onValueChange={(v) => setMode(v as 'forward' | 'reverse')} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="forward" className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4" />
                Add GST
              </TabsTrigger>
              <TabsTrigger value="reverse" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Remove GST
              </TabsTrigger>
            </TabsList>

            {/* Forward GST */}
            <TabsContent value="forward" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="baseAmount">Base Amount (₹)</Label>
                    <Input
                      id="baseAmount"
                      type="number"
                      placeholder="Enter amount without GST"
                      value={baseAmount}
                      onChange={(e) => setBaseAmount(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="gstRate">GST Rate (%)</Label>
                    <div className="grid grid-cols-5 gap-2 mt-2">
                      {gstRates.map((rate) => (
                        <Button
                          key={rate.rate}
                          variant={gstRate === rate.rate ? 'default' : 'outline'}
                          onClick={() => setGstRate(rate.rate)}
                          className="h-auto py-2"
                          style={gstRate === rate.rate ? { backgroundColor: '#c33531' } : {}}
                        >
                          {rate.rate}%
                        </Button>
                      ))}
                    </div>
                    <Input
                      id="gstRate"
                      type="number"
                      placeholder="Custom rate"
                      value={gstRate}
                      onChange={(e) => setGstRate(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                {forwardResult && (
                  <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                    <h3 className="font-semibold text-lg mb-4">Calculation Result</h3>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Base Amount:</span>
                      <span className="font-semibold">₹{forwardResult.base.toFixed(2)}</span>
                    </div>

                    <div className="border-t pt-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">CGST ({(forwardResult.rate / 2).toFixed(1)}%):</span>
                        <span>₹{forwardResult.cgst.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">SGST ({(forwardResult.rate / 2).toFixed(1)}%):</span>
                        <span>₹{forwardResult.sgst.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">or IGST ({forwardResult.rate}%):</span>
                        <span>₹{forwardResult.igst.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total GST:</span>
                        <span className="font-semibold">₹{forwardResult.gstAmount.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="border-t pt-3 text-lg">
                      <div className="flex justify-between">
                        <span className="font-bold">Final Amount:</span>
                        <span className="font-bold" style={{ color: '#c33531' }}>
                          ₹{forwardResult.total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Reverse GST */}
            <TabsContent value="reverse" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="totalAmount">Total Amount with GST (₹)</Label>
                    <Input
                      id="totalAmount"
                      type="number"
                      placeholder="Enter amount including GST"
                      value={totalAmount}
                      onChange={(e) => setTotalAmount(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="reverseGstRate">GST Rate (%)</Label>
                    <div className="grid grid-cols-5 gap-2 mt-2">
                      {gstRates.map((rate) => (
                        <Button
                          key={rate.rate}
                          variant={reverseGstRate === rate.rate ? 'default' : 'outline'}
                          onClick={() => setReverseGstRate(rate.rate)}
                          className="h-auto py-2"
                          style={reverseGstRate === rate.rate ? { backgroundColor: '#c33531' } : {}}
                        >
                          {rate.rate}%
                        </Button>
                      ))}
                    </div>
                    <Input
                      id="reverseGstRate"
                      type="number"
                      placeholder="Custom rate"
                      value={reverseGstRate}
                      onChange={(e) => setReverseGstRate(e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                {reverseResult && (
                  <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                    <h3 className="font-semibold text-lg mb-4">Calculation Result</h3>
                    
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">Total Amount:</span>
                      <span className="font-bold" style={{ color: '#c33531' }}>
                        ₹{reverseResult.total.toFixed(2)}
                      </span>
                    </div>

                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Base Amount:</span>
                        <span className="font-semibold">₹{reverseResult.base.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="border-t pt-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">CGST ({(reverseResult.rate / 2).toFixed(1)}%):</span>
                        <span>₹{reverseResult.cgst.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">SGST ({(reverseResult.rate / 2).toFixed(1)}%):</span>
                        <span>₹{reverseResult.sgst.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">or IGST ({reverseResult.rate}%):</span>
                        <span>₹{reverseResult.igst.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total GST:</span>
                        <span className="font-semibold">₹{reverseResult.gstAmount.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Quick Info */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Info className="w-5 h-5" style={{ color: '#c33531' }} />
              What is GST?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600">
            GST (Goods and Services Tax) is an indirect tax in India on supply of goods and services. 
            It replaced multiple indirect taxes like VAT, service tax, and excise duty.
            <Link to="/about-gst" className="block mt-2 font-medium hover:underline" style={{ color: '#c33531' }}>
              Learn More →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calculator className="w-5 h-5" style={{ color: '#c33531' }} />
              GST Components
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600">
            <div className="space-y-1">
              <p><strong>CGST:</strong> Central GST (State transactions)</p>
              <p><strong>SGST:</strong> State GST (State transactions)</p>
              <p><strong>IGST:</strong> Integrated GST (Interstate)</p>
            </div>
            <Link to="/how-to-calculate-gst" className="block mt-2 font-medium hover:underline" style={{ color: '#c33531' }}>
              How to Calculate →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <ArrowRight className="w-5 h-5" style={{ color: '#c33531' }} />
              GST Rates
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600">
            <div className="space-y-1">
              <p><strong>0%:</strong> Essential items (milk, bread)</p>
              <p><strong>5%:</strong> Common goods</p>
              <p><strong>12%, 18%:</strong> Standard items</p>
              <p><strong>28%:</strong> Luxury goods</p>
            </div>
            <Link to="/gst-rates" className="block mt-2 font-medium hover:underline" style={{ color: '#c33531' }}>
              View Full List →
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* SEO Content */}
      <Card>
        <CardHeader>
          <CardTitle>Why Use Our GST Calculator?</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none text-gray-600">
          <p>
            Our free GST calculator is designed specifically for Indian businesses, freelancers, and shopkeepers. 
            Whether you need to calculate GST for a single item or generate professional invoices with automatic 
            tax calculations, our tool makes it simple and accurate.
          </p>
          <h3 className="font-semibold text-gray-900 mt-4 mb-2">Key Features:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Calculate forward GST (add GST to base amount)</li>
            <li>Calculate reverse GST (extract GST from total amount)</li>
            <li>Automatic CGST, SGST, and IGST calculations</li>
            <li>Support for all GST rates (0%, 5%, 12%, 18%, 28%)</li>
            <li>Professional invoice generator with PDF download</li>
            <li>Save and manage invoice history</li>
            <li>100% free - no registration required</li>
            <li>Works offline after first load</li>
          </ul>
          <p className="mt-4">
            Start using our GST calculator today to simplify your tax calculations and create professional invoices 
            in seconds. Perfect for small businesses, CA professionals, and anyone dealing with GST in India.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}