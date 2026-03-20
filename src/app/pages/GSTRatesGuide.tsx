import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';

export function GSTRatesGuide() {
  const gstSlabs = [
    {
      rate: '0%',
      color: '#10b981',
      items: [
        'Fresh fruits and vegetables',
        'Milk and milk products (except canned)',
        'Bread, cereals, flour',
        'Salt',
        'Jaggery',
        'Fresh meat, fish, chicken',
        'Eggs',
        'Educational services',
        'Healthcare services',
        'Books, newspapers, journals'
      ]
    },
    {
      rate: '5%',
      color: '#3b82f6',
      items: [
        'Household necessities',
        'Sugar',
        'Tea, coffee',
        'Edible oils',
        'Coal and coke',
        'Footwear (below ₹500)',
        'Apparel (below ₹1000)',
        'Packed food items',
        'Fertilizers',
        'Medicines and drugs'
      ]
    },
    {
      rate: '12%',
      color: '#f59e0b',
      items: [
        'Computers and processed food',
        'Butter, cheese, ghee',
        'Almonds, walnuts (packed)',
        'Mobile phones',
        'Umbrella',
        'Sewing machine',
        'Spectacles',
        'Tooth powder',
        'Ayurvedic medicines',
        'Playing cards'
      ]
    },
    {
      rate: '18%',
      color: '#c33531',
      items: [
        'Most goods and services',
        'Capital goods and industrial intermediaries',
        'Hair oil, toothpaste',
        'Soap',
        'Ice cream',
        'Pasta, cornflakes',
        'Footwear (above ₹500)',
        'Apparel (above ₹1000)',
        'Biscuits',
        'IT services',
        'Telecom services',
        'Restaurants (non-AC)'
      ]
    },
    {
      rate: '28%',
      color: '#ef4444',
      items: [
        'Luxury and sin goods',
        'Air conditioners',
        'Refrigerators',
        'Washing machines',
        'Automobiles',
        'Motorcycles',
        'Cigarettes',
        'Aerated drinks',
        'Pan masala',
        'Cement',
        'Luxury hotels',
        'Cinema tickets (above ₹100)'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <SEO 
        title="GST Rates in India 2026 - Complete List of Tax Slabs (0%, 5%, 12%, 18%, 28%)"
        description="Complete guide to GST rates in India. Find GST rate slabs, tax structure, CGST SGST IGST rates, and which products fall under 0%, 5%, 12%, 18%, and 28% GST categories."
        keywords="GST rates India, GST slab rates, GST rate list, tax slabs India, CGST SGST rates, IGST rates, GST percentage, GST 5% items, GST 18% items, GST 28% items, luxury goods GST"
      />
      
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <BookOpen className="w-10 h-10" style={{ color: '#c33531' }} />
          GST Rates in India 2026
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Complete guide to GST rate slabs and tax structure in India. 
          Know which GST rate applies to your products and services.
        </p>
      </div>

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle>Understanding GST Rate Structure</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none">
          <p className="text-gray-600">
            GST in India is structured into five main tax slabs: 0%, 5%, 12%, 18%, and 28%. 
            The rate applicable depends on the nature of goods or services being supplied. 
            Essential items are taxed at lower rates while luxury and sin goods attract the highest rates.
          </p>
          <p className="text-gray-600 mt-4">
            For intra-state transactions, GST is divided into CGST (Central GST) and SGST (State GST), 
            each being half of the total GST rate. For inter-state transactions, IGST (Integrated GST) 
            is charged, which equals the total GST rate.
          </p>
        </CardContent>
      </Card>

      {/* GST Slabs */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">GST Rate Slabs & Categories</h2>
        
        {gstSlabs.map((slab) => (
          <Card key={slab.rate} className="border-l-4" style={{ borderLeftColor: slab.color }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span 
                  className="text-3xl font-bold"
                  style={{ color: slab.color }}
                >
                  {slab.rate}
                </span>
                <span className="text-lg text-gray-600">GST Rate</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {slab.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: slab.color }}
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>CGST + SGST (Intra-State)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-gray-600">
            <p>
              For transactions within the same state, GST is split equally between:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>CGST (Central GST):</strong> Goes to Central Government</li>
              <li><strong>SGST (State GST):</strong> Goes to State Government</li>
            </ul>
            <div className="bg-gray-50 p-3 rounded mt-4">
              <p className="font-semibold mb-1">Example:</p>
              <p>18% GST = 9% CGST + 9% SGST</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>IGST (Inter-State)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-gray-600">
            <p>
              For transactions between different states:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>IGST (Integrated GST):</strong> Goes to Central Government (later distributed)</li>
              <li>Replaces both CGST and SGST</li>
              <li>Simplifies inter-state trade</li>
            </ul>
            <div className="bg-gray-50 p-3 rounded mt-4">
              <p className="font-semibold mb-1">Example:</p>
              <p>18% GST = 18% IGST</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Compensation Cess */}
      <Card>
        <CardHeader>
          <CardTitle>GST Compensation Cess</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none text-gray-600">
          <p>
            In addition to the standard GST rates, certain luxury and sin goods attract an additional 
            compensation cess. This cess is levied on top of the 28% GST rate.
          </p>
          <h4 className="font-semibold text-gray-900 mt-4 mb-2">Items with Cess:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Tobacco products (up to 290% cess)</li>
            <li>Aerated drinks (12% cess)</li>
            <li>Motor vehicles (1% to 22% cess depending on type)</li>
            <li>Coal and lignite (₹400 per tonne)</li>
          </ul>
        </CardContent>
      </Card>

      {/* SEO Content */}
      <Card>
        <CardHeader>
          <CardTitle>How to Determine GST Rate for Your Product</CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none text-gray-600">
          <p>
            To find the correct GST rate for your product or service:
          </p>
          <ol className="list-decimal list-inside space-y-2 mt-3">
            <li>Identify the HSN (Harmonized System of Nomenclature) code for goods or SAC (Services Accounting Code) for services</li>
            <li>Check the official GST rate notification for your HSN/SAC code</li>
            <li>Verify if any exemptions or special rates apply to your category</li>
            <li>Check if any compensation cess is applicable</li>
            <li>Use our GST calculator to compute the exact tax amount</li>
          </ol>
          <p className="mt-4">
            <strong>Note:</strong> GST rates may change based on government notifications. 
            Always verify with the latest GST notifications or consult a tax professional for 
            accurate classification.
          </p>
        </CardContent>
      </Card>

      {/* Keywords Footer */}
      <div className="bg-gray-50 p-6 rounded-lg text-xs text-gray-500">
        <p className="leading-relaxed">
          <strong>Related Keywords:</strong> GST rates India, GST slab rates, GST rate list, 
          GST tax structure, CGST SGST rates, IGST rates, GST percentage, GST rate finder, 
          GST applicable rates, GST cess, luxury goods GST, essential items GST rate, 
          service tax GST, goods and services tax rates, GST rate schedule, current GST rates
        </p>
      </div>
    </div>
  );
}