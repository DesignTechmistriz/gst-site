import { useParams, Link, Navigate } from 'react-router';
import { Card, CardContent } from '../components/ui/card';
import { Calendar, Clock, ArrowLeft, Share2, TrendingUp } from 'lucide-react';
import { SEO } from '../components/SEO';
import { blogPosts } from './Blog';

// Blog post content - Har post ka full content yahan add karoge
const blogContent: Record<string, { content: JSX.Element }> = {
  'top-10-gst-mistakes-small-businesses': {
    content: (
      <div className="prose max-w-none">
        <img 
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=500&fit=crop" 
          alt="GST Mistakes to Avoid"
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />

        <p className="text-lg text-gray-600 leading-relaxed">
          GST compliance mein chhoti si mistake bhi aapko heavy penalties mein daal sakti hai. 
          Is guide mein hum discuss karenge top 10 common mistakes jo small businesses karti hain 
          aur unse kaise bachein.
        </p>

        <h2>1. Late GST Return Filing</h2>
        <p>
          <strong>Mistake:</strong> Deadline ke baad GST return file karna.
        </p>
        <p>
          <strong>Penalty:</strong> Late fee ₹50 per day (CGST) + ₹50 per day (SGST) = ₹100/day!
        </p>
        <p>
          <strong>Solution:</strong> Calendar mein GST due dates mark kar lo:
        </p>
        <ul>
          <li>GSTR-1: Har mahine ki 11th</li>
          <li>GSTR-3B: Har mahine ki 20th</li>
          <li>Annual Return (GSTR-9): 31st December</li>
        </ul>
        <p>
          <strong>Pro Tip:</strong> Deadline se 5 din pehle reminder set karo. Last minute rush se mistakes hoti hain.
        </p>

        <h2>2. Wrong GSTIN Entry in Invoices</h2>
        <p>
          <strong>Mistake:</strong> Customer ka GSTIN number galat likhna.
        </p>
        <p>
          <strong>Impact:</strong> Input Tax Credit (ITC) claim nahi ho payega, customer naraz hoga.
        </p>
        <p>
          <strong>Solution:</strong> Hamesha GSTIN verify karo government portal se:
        </p>
        <ul>
          <li>Visit: <a href="https://services.gst.gov.in/services/searchtp" target="_blank">GST Portal</a></li>
          <li>Enter GSTIN and verify</li>
          <li>Save verified GSTINs in your database</li>
        </ul>
        <p>
          Use our <Link to="/invoice-generator" className="text-[#c33531] font-medium">Invoice Generator</Link> to 
          create error-free invoices with proper GSTIN validation.
        </p>

        <h2>3. Not Claiming Input Tax Credit (ITC)</h2>
        <p>
          <strong>Mistake:</strong> Eligible ITC claim nahi karna.
        </p>
        <p>
          <strong>Loss:</strong> Thousands of rupees har mahine!
        </p>
        <p>
          <strong>Solution:</strong> 
        </p>
        <ul>
          <li>Har purchase ka invoice collect karo</li>
          <li>Supplier ka GSTIN verify karo</li>
          <li>Monthly ITC reconciliation karo</li>
          <li>GSTR-2A/2B check karo regularly</li>
        </ul>

        <h2>4. Incorrect HSN/SAC Codes</h2>
        <p>
          <strong>Mistake:</strong> Products/services ke liye galat HSN/SAC code use karna.
        </p>
        <p>
          <strong>Impact:</strong> Wrong GST rate application, penalty risk.
        </p>
        <p>
          <strong>Solution:</strong>
        </p>
        <ul>
          <li>Official HSN directory check karo</li>
          <li>Turnover &gt; ₹5 crore: 6-digit HSN mandatory</li>
          <li>Turnover ₹1-5 crore: 4-digit HSN</li>
          <li>Doubt ho to CA se consult karo</li>
        </ul>
        <p>
          Check our <Link to="/gst-rates" className="text-[#c33531] font-medium">GST Rates Guide</Link> for 
          correct rates by category.
        </p>

        <h2>5. Mixing Up CGST, SGST, and IGST</h2>
        <p>
          <strong>Mistake:</strong> Intra-state mein IGST charge karna ya vice versa.
        </p>
        <p>
          <strong>Rule:</strong>
        </p>
        <ul>
          <li><strong>Same State:</strong> CGST + SGST (equally split)</li>
          <li><strong>Different States:</strong> IGST (full rate)</li>
        </ul>
        <p>
          <strong>Example:</strong> 18% GST on ₹10,000 in Maharashtra to Maharashtra customer:
        </p>
        <ul>
          <li>CGST: ₹900 (9%)</li>
          <li>SGST: ₹900 (9%)</li>
          <li>Total: ₹1,800</li>
        </ul>
        <p>
          Use our <Link to="/" className="text-[#c33531] font-medium">GST Calculator</Link> - it automatically 
          calculates correct CGST/SGST/IGST based on location!
        </p>

        <h2>6. Not Maintaining Proper Records</h2>
        <p>
          <strong>Mistake:</strong> Invoices aur receipts properly store nahi karna.
        </p>
        <p>
          <strong>Requirement:</strong> GST law requires 6 years of record retention.
        </p>
        <p>
          <strong>Solution:</strong>
        </p>
        <ul>
          <li>Digital copies maintain karo (PDF backup)</li>
          <li>Cloud storage use karo (Google Drive, Dropbox)</li>
          <li>Month-wise folders organize karo</li>
          <li>Regular backups lo</li>
        </ul>
        <p>
          Our <Link to="/invoice-generator" className="text-[#c33531] font-medium">Invoice Generator</Link> saves 
          all invoices in browser - you can download PDFs anytime!
        </p>

        <h2>7. Ignoring Reverse Charge Mechanism (RCM)</h2>
        <p>
          <strong>Mistake:</strong> Unregistered supplier se purchase par RCM apply nahi karna.
        </p>
        <p>
          <strong>When applicable:</strong>
        </p>
        <ul>
          <li>Buying from unregistered supplier</li>
          <li>Advocate/lawyer services</li>
          <li>GTA (transport) services</li>
          <li>Security/manpower services</li>
        </ul>
        <p>
          <strong>Action:</strong> Aapko buyer ke taur par GST pay karna hoga!
        </p>

        <h2>8. Wrong Tax Invoice Format</h2>
        <p>
          <strong>Mistake:</strong> GST compliant invoice nahi banana.
        </p>
        <p>
          <strong>Mandatory Fields:</strong>
        </p>
        <ul>
          <li>Invoice number (sequential)</li>
          <li>Invoice date</li>
          <li>Customer name and GSTIN</li>
          <li>Supplier GSTIN</li>
          <li>HSN/SAC code</li>
          <li>Taxable value</li>
          <li>GST rate and amount</li>
          <li>Total amount</li>
        </ul>
        <p>
          Our <Link to="/invoice-generator" className="text-[#c33531] font-medium">Professional Invoice Generator</Link> includes 
          ALL mandatory fields automatically - just fill details!
        </p>

        <h2>9. Not Revising Returns When Needed</h2>
        <p>
          <strong>Mistake:</strong> Errors discover hone par correction nahi karna.
        </p>
        <p>
          <strong>Solution:</strong>
        </p>
        <ul>
          <li>Errors ko next return mein correct kar sakte ho</li>
          <li>GSTR-1 amendments allowed (within limit)</li>
          <li>Major mistakes? CA se consult karo</li>
        </ul>

        <h2>10. Crossing Threshold Without Registering</h2>
        <p>
          <strong>Mistake:</strong> ₹20 lakh (₹10 lakh for special states) turnover cross karne ke baad bhi GST registration nahi lena.
        </p>
        <p>
          <strong>Penalty:</strong> Heavy fines + back taxes + interest!
        </p>
        <p>
          <strong>Action:</strong>
        </p>
        <ul>
          <li>Turnover monitor karo monthly</li>
          <li>Threshold ke paas aayen to immediately register karo</li>
          <li>Voluntary registration bhi available hai (beneficial for ITC claims)</li>
          <li>E-commerce sellers: Day 1 se registration mandatory!</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
          <h3 className="text-xl font-bold text-yellow-900 mb-2">⚠️ Pro Tips to Stay Compliant:</h3>
          <ul className="text-yellow-800 space-y-2">
            <li>✅ Monthly calendar reminders set karo</li>
            <li>✅ Accounting software use karo (Tally, Zoho, QuickBooks)</li>
            <li>✅ Quarterly CA consultation karo</li>
            <li>✅ GST portal par regular updates check karo</li>
            <li>✅ Free tools use karo - like our GST Calculator!</li>
          </ul>
        </div>

        <h2>Conclusion</h2>
        <p>
          GST compliance difficult lag sakta hai, but agar aap systematic approach follow karo to ye simple hai. 
          Key hai: organized rehna, deadlines yaad rakhna, aur sahi tools use karna.
        </p>

        <div className="bg-gradient-to-r from-[#c3353110] to-[#c3353105] rounded-lg p-6 my-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">🚀 Make GST Easy with Our Free Tools:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              to="/"
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="font-bold text-gray-900 mb-1">GST Calculator</h4>
              <p className="text-sm text-gray-600">Calculate CGST, SGST, IGST instantly</p>
            </Link>
            <Link 
              to="/invoice-generator"
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="font-bold text-gray-900 mb-1">Invoice Generator</h4>
              <p className="text-sm text-gray-600">Create GST-compliant invoices in seconds</p>
            </Link>
          </div>
        </div>

        <p className="text-gray-600 italic">
          <strong>Disclaimer:</strong> This article is for informational purposes only. For specific tax advice, 
          please consult a qualified Chartered Accountant. GST laws may change - always verify with official sources.
        </p>
      </div>
    )
  }
};

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.id === slug);
  const content = slug ? blogContent[slug] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // If content doesn't exist yet, show placeholder
  if (!content) {
    return (
      <div className="space-y-8">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
          <p className="text-gray-600 mb-6">We're working on this article. Check back soon!</p>
          <Link to="/blog" className="text-[#c33531] font-medium">← Back to Blog</Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <SEO 
        title={`${post.title} | GST Calculator Pro Blog`}
        description={post.excerpt}
        keywords={post.keywords}
      />
      
      {/* Back Button */}
      <Link 
        to="/blog"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-[#c33531] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      {/* Article Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#c3353120', color: '#c33531' }}>
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          {post.title}
        </h1>

        <p className="text-xl text-gray-600">
          {post.excerpt}
        </p>

        {/* Share Buttons */}
        <div className="flex items-center gap-4 pt-4 border-t">
          <span className="text-sm text-gray-600 flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share:
          </span>
          <button 
            onClick={() => {
              const url = window.location.href;
              const text = post.title;
              window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
            }}
            className="text-sm text-gray-600 hover:text-[#c33531] transition-colors"
          >
            Twitter
          </button>
          <button 
            onClick={() => {
              const url = window.location.href;
              window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
            }}
            className="text-sm text-gray-600 hover:text-[#c33531] transition-colors"
          >
            Facebook
          </button>
          <button 
            onClick={() => {
              const url = window.location.href;
              const text = post.title;
              window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
            }}
            className="text-sm text-gray-600 hover:text-[#c33531] transition-colors"
          >
            LinkedIn
          </button>
          <button 
            onClick={() => {
              const url = window.location.href;
              const text = post.title;
              window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
            }}
            className="text-sm text-gray-600 hover:text-[#c33531] transition-colors"
          >
            WhatsApp
          </button>
        </div>
      </div>

      {/* Article Content */}
      <Card>
        <CardContent className="py-8">
          {content.content}
        </CardContent>
      </Card>

      {/* Related Posts */}
      <Card className="bg-gray-50">
        <CardContent className="py-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" style={{ color: '#c33531' }} />
            More GST Articles
          </h3>
          <div className="space-y-3">
            {blogPosts.filter(p => p.id !== slug).slice(0, 3).map(relatedPost => (
              <Link 
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <h4 className="font-medium text-gray-900 hover:text-[#c33531] transition-colors mb-1">
                  {relatedPost.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {relatedPost.readTime} • {relatedPost.category}
                </p>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}