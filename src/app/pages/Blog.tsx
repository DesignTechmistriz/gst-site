import { Link } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { SEO } from '../components/SEO';

// Blog posts data - Yahan naye blog posts add karoge
export const blogPosts = [
  {
    id: 'top-10-gst-mistakes-small-businesses',
    title: 'Top 10 GST Mistakes Small Businesses Make in 2026',
    excerpt: 'Avoid these common GST filing mistakes that can cost you penalties. Learn from experts and save money on your GST compliance.',
    date: '2026-03-16',
    readTime: '8 min read',
    category: 'GST Tips',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
    keywords: 'GST mistakes, GST filing errors, GST penalties, small business GST'
  },
  {
    id: 'gst-return-filing-guide-beginners',
    title: 'GST Return Filing Guide for Beginners 2026',
    excerpt: 'Complete step-by-step guide to file GST returns online. Everything you need to know about GSTR-1, GSTR-3B, and other GST forms.',
    date: '2026-03-10',
    readTime: '12 min read',
    category: 'GST Filing',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop',
    keywords: 'GST return filing, GSTR-1, GSTR-3B, how to file GST return'
  },
  {
    id: 'input-tax-credit-save-money',
    title: 'How to Save Tax with Input Tax Credit (ITC)',
    excerpt: 'Maximize your savings by claiming Input Tax Credit correctly. Learn eligibility, rules, and common mistakes to avoid.',
    date: '2026-03-05',
    readTime: '10 min read',
    category: 'Tax Savings',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop',
    keywords: 'input tax credit, ITC GST, save tax GST, GST refund'
  }
];

export function Blog() {
  return (
    <div className="space-y-8">
      <SEO 
        title="GST Blog - Tips, Guides & Updates | GST Calculator Pro"
        description="Read latest GST tips, filing guides, tax saving strategies, and updates. Expert advice for Indian businesses and freelancers."
        keywords="GST blog, GST tips, GST filing guide, GST updates India, tax saving tips"
      />
      
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <TrendingUp className="w-10 h-10" style={{ color: '#c33531' }} />
          GST Blog & Resources
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Expert tips, guides, and updates to help you master GST compliance and save money
        </p>
      </div>

      {/* Featured Post */}
      {blogPosts[0] && (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="md:flex">
            <div className="md:w-2/5">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-6">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#c3353120', color: '#c33531' }}>
                  Featured
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(blogPosts[0].date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-[#c33531] transition-colors">
                <Link to={`/blog/${blogPosts[0].id}`}>
                  {blogPosts[0].title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">
                {blogPosts[0].excerpt}
              </p>
              <Link 
                to={`/blog/${blogPosts[0].id}`}
                className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all"
                style={{ color: '#c33531' }}
              >
                Read Full Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Card>
      )}

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(1).map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <CardTitle className="text-lg hover:text-[#c33531] transition-colors">
                <Link to={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-gray-600 mb-4 flex-1">
                {post.excerpt}
              </p>
              <Link 
                to={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                style={{ color: '#c33531' }}
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-[#c3353110] to-[#c3353105] border-[#c33531]">
        <CardContent className="text-center py-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Want to stay updated?
          </h3>
          <p className="text-gray-600 mb-4">
            Bookmark this page and check back weekly for new GST tips and guides
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/"
              className="px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#c33531' }}
            >
              Try GST Calculator
            </Link>
            <Link 
              to="/invoice-generator"
              className="px-6 py-2 rounded-lg border-2 font-medium hover:bg-gray-50 transition-colors"
              style={{ borderColor: '#c33531', color: '#c33531' }}
            >
              Create Invoice
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
