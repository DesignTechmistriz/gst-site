import { Card, CardContent } from '../components/ui/card';
import { FileText } from 'lucide-react';
import { SEO } from '../components/SEO';

export function TermsOfService() {
  return (
    <div className="space-y-8">
      <SEO 
        title="Terms of Service - GST Calculator Pro"
        description="Terms of service for using GST Calculator Pro. Read our terms and conditions."
        keywords="terms of service, terms and conditions, user agreement"
      />
      
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <FileText className="w-10 h-10" style={{ color: '#c33531' }} />
          Terms of Service
        </h1>
        <p className="text-gray-600">Last updated: March 16, 2026</p>
      </div>

      <Card>
        <CardContent className="prose max-w-none pt-6">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using GST Calculator Pro ("Service"), you agree to be bound by these 
            Terms of Service and our Privacy Policy. If you do not agree to these terms, please 
            do not use our Service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            GST Calculator Pro provides free online tools for:
          </p>
          <ul>
            <li>Calculating GST (Goods and Services Tax)</li>
            <li>Generating professional invoices</li>
            <li>Managing invoice history</li>
            <li>Educational content about GST in India</li>
          </ul>

          <h2>3. Use of Service</h2>
          
          <h3>3.1 Permitted Use</h3>
          <p>You may use this Service for:</p>
          <ul>
            <li>Personal or business GST calculations</li>
            <li>Creating invoices for your business</li>
            <li>Learning about GST regulations</li>
            <li>Educational and informational purposes</li>
          </ul>

          <h3>3.2 Prohibited Use</h3>
          <p>You may NOT:</p>
          <ul>
            <li>Use the Service for any illegal purpose</li>
            <li>Attempt to hack, disrupt, or damage the Service</li>
            <li>Copy, reproduce, or redistribute our content without permission</li>
            <li>Use automated systems (bots, scrapers) to access the Service</li>
            <li>Impersonate another person or entity</li>
            <li>Upload malicious code or viruses</li>
          </ul>

          <h2>4. Accuracy of Information</h2>
          
          <h3>4.1 Calculations</h3>
          <p>
            While we strive to provide accurate GST calculations, <strong>we do not guarantee 
            100% accuracy</strong>. You should verify all calculations independently and consult 
            with a tax professional for important financial decisions.
          </p>

          <h3>4.2 Content</h3>
          <p>
            The information provided on this website is for general informational purposes only. 
            GST laws and rates may change. Always verify current regulations with official sources.
          </p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. 
            We do not warrant that:
          </p>
          <ul>
            <li>The Service will be uninterrupted or error-free</li>
            <li>The results obtained will be accurate or reliable</li>
            <li>Any errors will be corrected</li>
            <li>The Service will meet your specific requirements</li>
          </ul>

          <h2>6. Limitation of Liability</h2>
          <p>
            <strong>IMPORTANT:</strong> We shall not be liable for any:
          </p>
          <ul>
            <li>Errors or inaccuracies in calculations</li>
            <li>Loss of data or business</li>
            <li>Tax penalties or financial losses</li>
            <li>Damages arising from use of the Service</li>
            <li>Third-party actions or content</li>
          </ul>
          <p>
            You use this Service at your own risk. Always consult qualified professionals for 
            tax advice and financial decisions.
          </p>

          <h2>7. User Data and Privacy</h2>
          
          <h3>7.1 Local Storage</h3>
          <p>
            All invoice data, company details, and calculations are stored locally on your device. 
            We do not have access to this data.
          </p>

          <h3>7.2 Your Responsibility</h3>
          <p>You are responsible for:</p>
          <ul>
            <li>Backing up your data</li>
            <li>Securing your device</li>
            <li>Accuracy of information you enter</li>
            <li>Compliance with tax laws</li>
          </ul>

          <h2>8. Intellectual Property</h2>
          
          <h3>8.1 Our Content</h3>
          <p>
            All content, features, and functionality on this website (including design, text, 
            graphics, logos, and software) are owned by us and protected by copyright and 
            trademark laws.
          </p>

          <h3>8.2 User-Generated Content</h3>
          <p>
            Any invoices or data you create using our Service remain your property. We do not 
            claim ownership of your business data.
          </p>

          <h2>9. Third-Party Services</h2>
          <p>
            Our Service may contain links to third-party websites or services (e.g., Google Analytics, 
            Google AdSense). We are not responsible for the content, privacy policies, or practices 
            of third-party services.
          </p>

          <h2>10. Advertising</h2>
          <p>
            We display advertisements through Google AdSense. Advertisers are responsible for 
            their ad content. We do not endorse advertised products or services.
          </p>

          <h2>11. Changes to Service</h2>
          <p>
            We reserve the right to:
          </p>
          <ul>
            <li>Modify or discontinue the Service at any time</li>
            <li>Change features, pricing, or availability</li>
            <li>Update these Terms of Service</li>
          </ul>
          <p>
            Continued use of the Service after changes constitutes acceptance of new terms.
          </p>

          <h2>12. Termination</h2>
          <p>
            We may terminate or suspend your access to the Service immediately, without prior 
            notice, for any reason, including violation of these Terms.
          </p>

          <h2>13. Professional Advice</h2>
          <p>
            <strong>This Service is NOT a substitute for professional advice.</strong> For tax, 
            legal, or financial matters, always consult qualified professionals such as:
          </p>
          <ul>
            <li>Chartered Accountants (CA)</li>
            <li>Tax consultants</li>
            <li>Legal advisors</li>
            <li>Financial planners</li>
          </ul>

          <h2>14. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. 
            Any disputes shall be subject to the exclusive jurisdiction of courts in India.
          </p>

          <h2>15. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable, the remaining provisions 
            will continue in full force and effect.
          </p>

          <h2>16. Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at:<br />
            Email: support@your-domain.com
          </p>

          <h2>17. Acknowledgment</h2>
          <p>
            BY USING THIS SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE 
            AND AGREE TO BE BOUND BY THEM.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <p className="text-sm font-semibold text-yellow-800">
              ⚠️ Important Disclaimer
            </p>
            <p className="text-sm text-yellow-700 mt-2">
              This calculator is a tool for estimation purposes only. Tax regulations are complex 
              and change frequently. Always verify calculations with official sources and consult 
              tax professionals for compliance and filing.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
