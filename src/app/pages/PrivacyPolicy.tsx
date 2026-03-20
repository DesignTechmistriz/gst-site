import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Shield } from 'lucide-react';
import { SEO } from '../components/SEO';

export function PrivacyPolicy() {
  return (
    <div className="space-y-8">
      <SEO 
        title="Privacy Policy - GST Calculator Pro"
        description="Privacy policy for GST Calculator Pro. Learn how we protect your data and respect your privacy."
        keywords="privacy policy, data protection, user privacy"
      />
      
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <Shield className="w-10 h-10" style={{ color: '#c33531' }} />
          Privacy Policy
        </h1>
        <p className="text-gray-600">Last updated: March 16, 2026</p>
      </div>

      <Card>
        <CardContent className="prose max-w-none pt-6">
          <h2>Introduction</h2>
          <p>
            GST Calculator Pro ("we", "our", or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your information 
            when you use our website and services.
          </p>

          <h2>Information We Collect</h2>
          
          <h3>1. Information You Provide</h3>
          <ul>
            <li><strong>Invoice Data:</strong> Company details, customer information, and invoice items you enter are stored locally on your device using browser storage.</li>
            <li><strong>Contact Information:</strong> If you contact us, we may collect your name and email address.</li>
          </ul>

          <h3>2. Automatically Collected Information</h3>
          <ul>
            <li><strong>Usage Data:</strong> We use Google Analytics to collect anonymous usage statistics.</li>
            <li><strong>Cookies:</strong> We use cookies for analytics and advertising purposes.</li>
            <li><strong>Device Information:</strong> Browser type, operating system, and IP address.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To improve user experience</li>
            <li>To analyze website usage and trends</li>
            <li>To display relevant advertisements (Google AdSense)</li>
            <li>To respond to user inquiries</li>
          </ul>

          <h2>Data Storage</h2>
          <p>
            All invoice and company data you enter is stored <strong>locally on your device</strong> 
            using browser localStorage. We do not store this data on our servers. This means:
          </p>
          <ul>
            <li>Your data stays on your device</li>
            <li>We cannot access your invoices or company details</li>
            <li>Clearing browser data will delete your saved information</li>
            <li>Your data is not shared with third parties</li>
          </ul>

          <h2>Third-Party Services</h2>
          
          <h3>Google Analytics</h3>
          <p>
            We use Google Analytics to understand how visitors use our website. Google Analytics 
            collects information anonymously and reports website trends without identifying individual visitors.
          </p>

          <h3>Google AdSense</h3>
          <p>
            We use Google AdSense to display advertisements. Google may use cookies to serve ads based 
            on your prior visits to our website or other websites. You can opt out of personalized 
            advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Google Ads Settings</a>.
          </p>

          <h2>Cookies</h2>
          <p>
            We use cookies for the following purposes:
          </p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use the site</li>
            <li><strong>Advertising Cookies:</strong> Used to display relevant ads</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Note that disabling cookies may 
            affect website functionality.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your information. However, no 
            method of transmission over the Internet is 100% secure. Since your invoice data is 
            stored locally on your device, you are responsible for securing your device.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our service is not intended for children under 13 years of age. We do not knowingly 
            collect personal information from children.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your data (stored locally on your device)</li>
            <li>Delete your data (by clearing browser storage)</li>
            <li>Opt-out of analytics and advertising cookies</li>
            <li>Request information about data we may have collected</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:<br />
            Email: privacy@your-domain.com
          </p>

          <h2>Consent</h2>
          <p>
            By using our website, you consent to our Privacy Policy and agree to its terms.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
