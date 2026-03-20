import { Link, Outlet, useLocation } from 'react-router';
import { Calculator, FileText, History, BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { StructuredData } from './StructuredData';

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'GST Calculator', icon: Calculator },
    { path: '/invoice-generator', label: 'Invoice Generator', icon: FileText },
    { path: '/invoice-history', label: 'History', icon: History },
    { path: '/blog', label: 'Blog', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData />
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#c33531' }}>
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">GST Calculator Pro</h1>
                <p className="text-xs text-gray-600">Free GST & Invoice Tool</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      isActive(link.path)
                        ? 'text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    style={isActive(link.path) ? { backgroundColor: '#c33531' } : {}}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      isActive(link.path)
                        ? 'text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    style={isActive(link.path) ? { backgroundColor: '#c33531' } : {}}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">GST Calculator Pro</h3>
              <p className="text-sm text-gray-600">
                Free online GST calculator and professional invoice generator for Indian businesses, freelancers, and shopkeepers.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Tools</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-[#c33531]">GST Calculator</Link>
                </li>
                <li>
                  <Link to="/invoice-generator" className="text-gray-600 hover:text-[#c33531]">Invoice Generator</Link>
                </li>
                <li>
                  <Link to="/invoice-history" className="text-gray-600 hover:text-[#c33531]">Invoice History</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Learn</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/gst-rates" className="text-gray-600 hover:text-[#c33531]">GST Rates in India</Link>
                </li>
                <li>
                  <Link to="/how-to-calculate-gst" className="text-gray-600 hover:text-[#c33531]">How to Calculate GST</Link>
                </li>
                <li>
                  <Link to="/about-gst" className="text-gray-600 hover:text-[#c33531]">About GST</Link>
                </li>
                <li>
                  <Link to="/gst-tips" className="text-gray-600 hover:text-[#c33531]">GST Tips & Tricks</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Keywords</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                GST calculator, GST calculator India, invoice generator, free invoice maker, 
                GST bill generator, CGST SGST calculator, IGST calculator, reverse GST calculator,
                GST rate finder, tax calculator India, business invoice tool, freelancer invoice
              </p>
            </div>
          </div>

          <div className="border-t mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
              <p>© 2026 GST Calculator Pro. Free tool for Indian businesses. No registration required.</p>
              <div className="flex gap-4">
                <Link to="/privacy-policy" className="hover:text-[#c33531]">Privacy Policy</Link>
                <span>•</span>
                <Link to="/terms-of-service" className="hover:text-[#c33531]">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}