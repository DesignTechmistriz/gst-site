import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Lightbulb, AlertCircle, TrendingUp, FileText, Calculator, Shield } from 'lucide-react';
import { SEO } from '../components/SEO';

export function GSTTips() {
  return (
    <div className="space-y-8">
      <SEO 
        title="GST Tips & Best Practices - Save Tax, Avoid Penalties, Improve Compliance"
        description="Expert GST tips for Indian businesses, freelancers, and shopkeepers. Learn how to save tax, claim input credit, avoid penalties, file returns on time, and maintain proper GST compliance."
        keywords="GST tips, GST best practices, GST compliance tips, save GST tax, input tax credit tips, GST filing tips, avoid GST penalties, small business GST, freelancer GST guide"
      />
      
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <Lightbulb className="w-10 h-10" style={{ color: '#c33531' }} />
          GST Tips & Best Practices
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Expert tips and tricks for managing GST compliance, saving taxes, and avoiding penalties
        </p>
      </div>

      {/* For Small Businesses */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6" style={{ color: '#c33531' }} />
            Tips for Small Businesses & Shopkeepers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: 'Maintain Proper Records',
                desc: 'Keep all purchase and sale invoices organized. Digital copies are acceptable. Use invoice management software or our free tool to track everything.',
                icon: FileText
              },
              {
                title: 'Claim Input Tax Credit (ITC)',
                desc: 'Always claim ITC on business purchases. Ensure your suppliers are GST registered and invoices contain proper GSTIN. This can significantly reduce your tax liability.',
                icon: TrendingUp
              },
              {
                title: 'File Returns On Time',
                desc: 'Late filing attracts interest and penalties. Set reminders for GSTR-1 (11th) and GSTR-3B (20th) of every month. Even nil returns must be filed.',
                icon: AlertCircle
              },
              {
                title: 'Use Composition Scheme',
                desc: 'If turnover is below ₹1.5 crore, opt for composition scheme. Pay only 1-5% tax (depending on business type) with simplified compliance.',
                icon: Calculator
              },
              {
                title: 'Issue Proper Tax Invoices',
                desc: 'All invoices must contain: GSTIN, invoice number, tax breakup (CGST/SGST/IGST), HSN/SAC code. Use our invoice generator for GST-compliant bills.',
                icon: Shield
              },
              {
                title: 'Reconcile Regularly',
                desc: 'Match your GSTR-2A/2B with purchase records monthly. This helps identify ITC mismatches and supplier compliance issues early.',
                icon: FileText
              }
            ].map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div key={index} className="border-l-4 pl-4 py-2" style={{ borderLeftColor: '#c33531' }}>
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#c33531' }} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{tip.title}</h4>
                      <p className="text-sm text-gray-600">{tip.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes to Avoid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-red-600" />
            Common GST Mistakes to Avoid
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Not maintaining proper documentation',
              'Filing returns with incorrect GSTIN',
              'Ignoring GST notices and emails',
              'Not reconciling ITC claims',
              'Missing invoice serial numbers',
              'Incorrect HSN/SAC codes on invoices',
              'Not reversing ITC on exempt supplies',
              'Late payment of tax liabilities',
              'Not updating GSTIN on business cards/website',
              'Mixing personal and business expenses',
              'Not keeping backup of GST returns',
              'Claiming ITC without proper invoices'
            ].map((mistake, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                <span className="text-gray-700">{mistake}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Money Saving Tips */}
      <Card className="bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <TrendingUp className="w-6 h-6" />
            Money-Saving GST Tips
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            {
              title: 'Maximize Input Tax Credit',
              tip: 'Claim ITC on all eligible business expenses including rent (if landlord is registered), office supplies, utilities, and services. This directly reduces your tax outgo.'
            },
            {
              title: 'Opt for Quarterly Filing (if eligible)',
              tip: 'Small taxpayers with turnover up to ₹5 crore can file GSTR-1 quarterly and GSTR-3B monthly. This reduces compliance burden and saves professional fees.'
            },
            {
              title: 'Use E-way Bill Smartly',
              tip: 'Generate consolidated e-way bills for multiple consignments to the same location. This saves time and reduces documentation.'
            },
            {
              title: 'Choose Right GST Composition',
              tip: 'For service providers with turnover below ₹50 lakh, composition scheme offers 6% tax vs standard 18%. Calculate which is more beneficial.'
            },
            {
              title: 'Deduct TDS/TCS Correctly',
              tip: 'Ensure proper TDS/TCS deduction and claim credit in returns. Missed credits mean paying more tax than required.'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-700">{item.tip}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* For Freelancers */}
      <Card>
        <CardHeader>
          <CardTitle>GST Tips for Freelancers & Consultants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-900">Registration Threshold</h4>
              <p className="text-sm text-gray-700">
                Service providers must register for GST once annual turnover exceeds ₹20 lakhs (₹10 lakhs for special category states).
                Register early if you work with corporate clients who need GST invoices.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-900">Invoice Clients Properly</h4>
              <p className="text-sm text-gray-700">
                Issue GST-compliant invoices with: Your GSTIN, SAC code (usually 998314 for consulting), 
                18% GST breakup (9% CGST + 9% SGST for same state, or 18% IGST for other state), 
                unique invoice numbers, and payment terms.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-900">Claim Business Expenses</h4>
              <p className="text-sm text-gray-700">
                Claim ITC on: Internet bills, phone bills, software subscriptions, co-working space rent, 
                professional services (CA, lawyer), business travel, and equipment purchases. Keep all invoices.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-900">Foreign Client Payments</h4>
              <p className="text-sm text-gray-700">
                Export of services is zero-rated under GST. You don't charge GST on invoices to foreign clients, 
                but you can still claim ITC on your business expenses. Keep proof of foreign remittance and LUT filing.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Digital Tools Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-6 h-6" style={{ color: '#c33531' }} />
            Use Digital Tools for Easy Compliance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span><strong>Our GST Calculator:</strong> Calculate GST accurately without manual errors. Supports all tax rates and both forward/reverse calculations.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span><strong>Invoice Generator:</strong> Create professional, GST-compliant invoices in seconds. Auto-calculates taxes, saves company details for reuse.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span><strong>Invoice History:</strong> Track all your invoices in one place. Search by customer, download PDFs anytime.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span><strong>GST Portal:</strong> File returns online, generate e-way bills, track refunds, and update registration details.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span><strong>Accounting Software:</strong> Use cloud-based accounting tools that auto-sync with GST portal for seamless filing.</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Quick GST Reference Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2" style={{ color: '#c33531' }}>Important Dates</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• GSTR-1: 11th of next month</li>
                <li>• GSTR-3B: 20th of next month</li>
                <li>• GSTR-9: 31st December</li>
                <li>• ITC-04: 25th of next month</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2" style={{ color: '#c33531' }}>Penalties</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Late filing: ₹50/day (max ₹5000)</li>
                <li>• Late payment: 18% interest p.a.</li>
                <li>• Wrong ITC claim: 100% penalty</li>
                <li>• No registration: 100% of tax</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2" style={{ color: '#c33531' }}>Common SAC Codes</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Consulting: 998314</li>
                <li>• IT Services: 998313</li>
                <li>• Legal: 998212</li>
                <li>• Accounting: 998211</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Audit Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-6 h-6" style={{ color: '#c33531' }} />
            GST Audit & Notice Tips
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-gray-600">
          <div className="flex items-start gap-2">
            <span className="text-green-600 font-bold flex-shrink-0">1.</span>
            <span><strong>Maintain 6 Years Records:</strong> Keep all invoices, returns, and supporting documents for minimum 6 years from filing date.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 font-bold flex-shrink-0">2.</span>
            <span><strong>Respond to Notices Promptly:</strong> GST notices have strict deadlines. Reply with proper documentation within the given timeframe.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 font-bold flex-shrink-0">3.</span>
            <span><strong>Reconcile GSTR-2A/2B:</strong> Monthly reconciliation prevents audit issues. Fix mismatches immediately with supplier coordination.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 font-bold flex-shrink-0">4.</span>
            <span><strong>Annual Return Accuracy:</strong> GSTR-9 must match with GSTR-3B totals. Discrepancies attract scrutiny and penalties.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-600 font-bold flex-shrink-0">5.</span>
            <span><strong>Hire CA for Audit:</strong> For turnover above ₹5 crore, mandatory GST audit by CA. Choose experienced professionals.</span>
          </div>
        </CardContent>
      </Card>

      {/* Final Tips */}
      <Card className="text-center" style={{ backgroundColor: '#fef2f2' }}>
        <CardContent className="py-8">
          <Lightbulb className="w-12 h-12 mx-auto mb-4" style={{ color: '#c33531' }} />
          <h3 className="text-xl font-bold mb-2">Pro Tip</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            "The best way to avoid GST penalties is to maintain accurate records from day one, 
            file returns on time, and use reliable tools for calculations. Prevention is always 
            better than paying penalties and interest!"
          </p>
        </CardContent>
      </Card>

      {/* SEO Keywords */}
      <div className="bg-gray-50 p-6 rounded-lg text-xs text-gray-500">
        <p className="leading-relaxed">
          <strong>Related Keywords:</strong> GST tips, GST best practices, GST compliance tips, 
          how to save GST, GST mistakes to avoid, input tax credit tips, GST filing tips, 
          small business GST, freelancer GST tips, GST for shopkeepers, GST penalty avoidance, 
          GST audit preparation, GST record keeping, composition scheme benefits
        </p>
      </div>
    </div>
  );
}