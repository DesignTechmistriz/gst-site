import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Calculator, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { SEO } from '../components/SEO';

export function HowToCalculateGST() {
  return (
    <div className="space-y-8">
      <SEO 
        title="How to Calculate GST in India - Step by Step Guide with Formula & Examples"
        description="Learn how to calculate GST in India. Complete guide with formulas, examples for forward and reverse GST calculation. Calculate CGST, SGST, IGST easily with step-by-step instructions."
        keywords="how to calculate GST, GST calculation formula, calculate CGST SGST, IGST calculation, GST formula India, forward GST calculation, reverse GST calculation, add GST, remove GST from price"
      />
      
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">How to Calculate GST in India</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Step-by-step guide to calculating GST, CGST, SGST, and IGST with examples and formulas
        </p>
      </div>

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle>What is GST Calculation?</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none text-gray-600">
          <p>
            GST (Goods and Services Tax) calculation is the process of computing the tax amount 
            to be added to the base price of goods or services. In India, GST can be calculated 
            in two ways: forward calculation (adding GST to base price) and reverse calculation 
            (extracting GST from total price).
          </p>
        </CardContent>
      </Card>

      {/* Forward GST Calculation */}
      <Card className="border-l-4" style={{ borderLeftColor: '#c33531' }}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="w-6 h-6" style={{ color: '#c33531' }} />
            Forward GST Calculation (Add GST)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">Formula:</h3>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-2">
              <p>GST Amount = (Base Price × GST Rate) / 100</p>
              <p>Total Price = Base Price + GST Amount</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">For Intra-State (CGST + SGST):</h3>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-2">
              <p>CGST = GST Amount / 2</p>
              <p>SGST = GST Amount / 2</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Example:</h3>
            <div className="bg-blue-50 p-4 rounded-lg space-y-2 text-sm">
              <p><strong>Product Price:</strong> ₹1,000</p>
              <p><strong>GST Rate:</strong> 18%</p>
              <hr className="my-2" />
              <p>GST Amount = (₹1,000 × 18) / 100 = ₹180</p>
              <p>CGST = ₹180 / 2 = ₹90</p>
              <p>SGST = ₹180 / 2 = ₹90</p>
              <p className="font-bold" style={{ color: '#c33531' }}>
                Total Price = ₹1,000 + ₹180 = ₹1,180
              </p>
            </div>
          </div>

          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium hover:underline" style={{ color: '#c33531' }}>
            <Calculator className="w-4 h-4" />
            Try Forward GST Calculator →
          </Link>
        </CardContent>
      </Card>

      {/* Reverse GST Calculation */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-600">
            <ArrowRight className="w-6 h-6 rotate-180" />
            Reverse GST Calculation (Remove GST)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">Formula:</h3>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-2">
              <p>Base Price = Total Price / (1 + GST Rate/100)</p>
              <p>GST Amount = Total Price - Base Price</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">For Intra-State (CGST + SGST):</h3>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm space-y-2">
              <p>CGST = GST Amount / 2</p>
              <p>SGST = GST Amount / 2</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Example:</h3>
            <div className="bg-blue-50 p-4 rounded-lg space-y-2 text-sm">
              <p><strong>Total Price (with GST):</strong> ₹1,180</p>
              <p><strong>GST Rate:</strong> 18%</p>
              <hr className="my-2" />
              <p>Base Price = ₹1,180 / (1 + 18/100) = ₹1,180 / 1.18 = ₹1,000</p>
              <p>GST Amount = ₹1,180 - ₹1,000 = ₹180</p>
              <p>CGST = ₹180 / 2 = ₹90</p>
              <p>SGST = ₹180 / 2 = ₹90</p>
            </div>
          </div>

          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline">
            <Calculator className="w-4 h-4" />
            Try Reverse GST Calculator →
          </Link>
        </CardContent>
      </Card>

      {/* IGST Calculation */}
      <Card>
        <CardHeader>
          <CardTitle>IGST Calculation (Inter-State Transactions)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            For inter-state transactions, IGST (Integrated GST) is charged instead of CGST + SGST. 
            The calculation is the same, but the entire GST amount goes as IGST.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
            <p>IGST = GST Amount (full rate)</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg space-y-2 text-sm">
            <p><strong>Example:</strong></p>
            <p>Product Price: ₹1,000</p>
            <p>GST Rate: 18%</p>
            <hr className="my-2" />
            <p>GST Amount = ₹180</p>
            <p className="font-bold text-blue-600">IGST = ₹180 (full amount)</p>
            <p className="font-bold" style={{ color: '#c33531' }}>Total = ₹1,180</p>
          </div>
        </CardContent>
      </Card>

      {/* Common Scenarios */}
      <Card>
        <CardHeader>
          <CardTitle>Common GST Calculation Scenarios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              {
                title: 'Retail Business',
                scenario: 'A shopkeeper buys goods for ₹5,000 (excluding GST) at 12% GST',
                calculation: [
                  'GST Amount = (₹5,000 × 12) / 100 = ₹600',
                  'CGST = ₹300',
                  'SGST = ₹300',
                  'Total to Pay = ₹5,600'
                ]
              },
              {
                title: 'Service Provider',
                scenario: 'A freelancer charges ₹20,000 for services at 18% GST',
                calculation: [
                  'GST Amount = (₹20,000 × 18) / 100 = ₹3,600',
                  'CGST = ₹1,800',
                  'SGST = ₹1,800',
                  'Invoice Amount = ₹23,600'
                ]
              },
              {
                title: 'Restaurant Bill',
                scenario: 'Restaurant bill shows total amount ₹590 (including 5% GST)',
                calculation: [
                  'Base Amount = ₹590 / 1.05 = ₹561.90',
                  'GST = ₹590 - ₹561.90 = ₹28.10',
                  'CGST = ₹14.05',
                  'SGST = ₹14.05'
                ]
              }
            ].map((item, index) => (
              <div key={index} className="border-l-4 pl-4" style={{ borderLeftColor: '#c33531' }}>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{item.scenario}</p>
                <div className="bg-gray-50 p-3 rounded space-y-1 text-sm font-mono">
                  {item.calculation.map((calc, i) => (
                    <p key={i}>{calc}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card>
        <CardHeader>
          <CardTitle>GST Calculation Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Always verify the GST rate applicable to your product/service before calculation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>For intra-state: Use CGST + SGST (split equally)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>For inter-state: Use IGST (full rate)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Round off final amounts to two decimal places</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Use our free GST calculator to avoid manual errors</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Keep invoice records for at least 6 years as per GST law</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="text-center" style={{ backgroundColor: '#fef2f2' }}>
        <CardContent className="py-8">
          <Calculator className="w-12 h-12 mx-auto mb-4" style={{ color: '#c33531' }} />
          <h3 className="text-xl font-bold mb-2">Ready to Calculate GST?</h3>
          <p className="text-gray-600 mb-4">
            Use our free GST calculator for instant, accurate calculations
          </p>
          <Link to="/">
            <button 
              className="px-6 py-3 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#c33531' }}
            >
              Open GST Calculator
            </button>
          </Link>
        </CardContent>
      </Card>

      {/* SEO Keywords */}
      <div className="bg-gray-50 p-6 rounded-lg text-xs text-gray-500">
        <p className="leading-relaxed">
          <strong>Related Keywords:</strong> how to calculate GST, GST calculation formula, 
          calculate CGST SGST, IGST calculation, GST calculation example, forward GST calculation, 
          reverse GST calculation, add GST to price, remove GST from price, GST calculator India, 
          GST on invoice, how to add GST, how to find GST amount, GST percentage calculation
        </p>
      </div>
    </div>
  );
}