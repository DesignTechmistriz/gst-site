import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Info, Calendar, Shield, TrendingUp } from 'lucide-react';
import { SEO } from '../components/SEO';

export function AboutGST() {
  return (
    <div className="space-y-8">
      <SEO 
        title="About GST (Goods and Services Tax) in India - Complete Guide 2026"
        description="Learn about GST in India. Understand what is GST, types of GST (CGST, SGST, IGST), GST history, benefits, registration process, and filing requirements. Complete guide to Goods and Services Tax."
        keywords="what is GST, GST India, goods and services tax, GST meaning, GST full form, types of GST, CGST SGST IGST, GST benefits, GST registration, GST history, GST act India"
      />
      
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">About GST in India</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Complete guide to Goods and Services Tax - India's most comprehensive tax reform
        </p>
      </div>

      {/* What is GST */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-6 h-6" style={{ color: '#c33531' }} />
            What is GST?
          </CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none text-gray-600 space-y-4">
          <p>
            <strong>GST (Goods and Services Tax)</strong> is an indirect tax levied on the supply of 
            goods and services in India. It is a comprehensive, multi-stage, destination-based tax 
            that replaced multiple cascading taxes levied by the central and state governments.
          </p>
          <p>
            GST was introduced on July 1, 2017, marking one of the biggest tax reforms in India's 
            economic history. It unified the country into a single market with a uniform tax structure.
          </p>
        </CardContent>
      </Card>

      {/* History Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-6 h-6" style={{ color: '#c33531' }} />
            GST Timeline in India
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { year: '2000', event: 'First proposal for GST in India' },
              { year: '2006', event: 'Finance Minister announces plan to introduce GST from April 1, 2010' },
              { year: '2011', event: 'Constitution (115th Amendment) Bill introduced' },
              { year: '2014', event: 'Constitution Amendment Bill gets approval' },
              { year: '2016', event: 'GST Bill passed by both houses of Parliament' },
              { year: '2017', event: 'GST officially launched on July 1, 2017' },
              { year: '2026', event: 'GST continues to evolve with simplified compliance' }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div 
                  className="w-20 flex-shrink-0 font-bold text-white px-3 py-1 rounded text-center"
                  style={{ backgroundColor: '#c33531' }}
                >
                  {item.year}
                </div>
                <p className="text-gray-700 flex-1">{item.event}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Types of GST */}
      <Card>
        <CardHeader>
          <CardTitle>Types of GST in India</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 pl-4" style={{ borderLeftColor: '#c33531' }}>
              <h4 className="font-bold text-lg mb-2">CGST</h4>
              <p className="text-sm text-gray-600 mb-2">Central Goods and Services Tax</p>
              <p className="text-sm text-gray-700">
                Collected by the Central Government on intra-state sales. 
                CGST revenue goes to the Central Government.
              </p>
            </div>

            <div className="border-l-4 border-l-blue-500 pl-4">
              <h4 className="font-bold text-lg mb-2">SGST</h4>
              <p className="text-sm text-gray-600 mb-2">State Goods and Services Tax</p>
              <p className="text-sm text-gray-700">
                Collected by the State Government on intra-state sales. 
                SGST revenue goes to the respective State Government.
              </p>
            </div>

            <div className="border-l-4 border-l-green-500 pl-4">
              <h4 className="font-bold text-lg mb-2">IGST</h4>
              <p className="text-sm text-gray-600 mb-2">Integrated Goods and Services Tax</p>
              <p className="text-sm text-gray-700">
                Collected by the Central Government on inter-state sales and imports. 
                Revenue is shared between Central and State Governments.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits of GST */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6" style={{ color: '#c33531' }} />
            Benefits of GST
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">For Businesses</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Elimination of cascading tax effect</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Simplified tax compliance with online filing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Input tax credit across the supply chain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Easier interstate transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Reduced logistics and warehousing costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Improved competitiveness</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gray-900">For Consumers</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Lower prices due to reduced cascading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Transparent tax structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Uniform taxation across India</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Better product availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Organized market structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Improved quality standards</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* GST Registration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-6 h-6" style={{ color: '#c33531' }} />
            GST Registration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            GST registration is mandatory for businesses whose aggregate turnover exceeds the threshold limit.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Threshold Limits</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Normal states: ₹40 lakhs</li>
                <li>• Special category states: ₹20 lakhs</li>
                <li>• Service providers: ₹20 lakhs</li>
                <li>• E-commerce operators: Mandatory</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Documents Required</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• PAN card</li>
                <li>• Aadhaar card</li>
                <li>• Business address proof</li>
                <li>• Bank account details</li>
                <li>• Photograph</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Taxes Replaced by GST */}
      <Card>
        <CardHeader>
          <CardTitle>Taxes Replaced by GST</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3" style={{ color: '#c33531' }}>Central Taxes Subsumed</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Central Excise Duty</li>
                <li>• Duties of Excise (Medicinal and Toilet Preparations)</li>
                <li>• Additional Duties of Excise (Goods of Special Importance)</li>
                <li>• Additional Duties of Excise (Textiles and Textile Products)</li>
                <li>• Additional Duties of Customs (CVD)</li>
                <li>• Special Additional Duty of Customs (SAD)</li>
                <li>• Service Tax</li>
                <li>• Central Surcharges and Cesses</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3" style={{ color: '#c33531' }}>State Taxes Subsumed</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• State VAT</li>
                <li>• Central Sales Tax</li>
                <li>• Purchase Tax</li>
                <li>• Luxury Tax</li>
                <li>• Entry Tax (all forms)</li>
                <li>• Entertainment Tax (not levied by local bodies)</li>
                <li>• Taxes on advertisements</li>
                <li>• Taxes on lotteries, betting, and gambling</li>
                <li>• State Surcharges and Cesses</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* GST Council */}
      <Card>
        <CardHeader>
          <CardTitle>GST Council</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none text-gray-600">
          <p>
            The GST Council is a constitutional body responsible for making recommendations on GST-related matters. 
            It is headed by the Union Finance Minister and comprises Finance Ministers from all states and union territories.
          </p>
          <h4 className="font-semibold text-gray-900 mt-4 mb-2">Key Functions:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Recommend GST tax rates, exemptions, and thresholds</li>
            <li>Decide on goods and services that may be subjected to or exempted from GST</li>
            <li>Make recommendations on special provisions for certain states</li>
            <li>Formulate model GST laws and principles of levy</li>
          </ul>
        </CardContent>
      </Card>

      {/* Filing Returns */}
      <Card>
        <CardHeader>
          <CardTitle>GST Returns Filing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            Regular taxpayers need to file the following GST returns:
          </p>

          <div className="grid gap-3">
            {[
              { form: 'GSTR-1', desc: 'Details of outward supplies (monthly/quarterly)', due: '11th of next month' },
              { form: 'GSTR-3B', desc: 'Summary return with tax payment', due: '20th of next month' },
              { form: 'GSTR-9', desc: 'Annual return', due: '31st December of next FY' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold" style={{ color: '#c33531' }}>{item.form}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                  <span className="text-xs bg-white px-2 py-1 rounded border">
                    Due: {item.due}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* SEO Keywords */}
      <div className="bg-gray-50 p-6 rounded-lg text-xs text-gray-500">
        <p className="leading-relaxed">
          <strong>Related Keywords:</strong> what is GST, GST India, goods and services tax, 
          GST meaning, GST full form, GST introduction, GST implementation, GST benefits, 
          types of GST, CGST SGST IGST, GST registration, GST returns, GST council, 
          GST law, GST act, GST rates India, input tax credit, GST compliance
        </p>
      </div>
    </div>
  );
}