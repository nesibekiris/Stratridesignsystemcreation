import { ArrowLeft } from 'lucide-react';
import { Button } from '../Button';
import type { SiteContent, Language } from '../../App';

interface CookiePolicyPageProps {
  content: SiteContent;
  language: Language;
}

export function CookiePolicyPage({ content, language }: CookiePolicyPageProps) {
  const lastUpdated = 'February 5, 2026';

  return (
    <div style={{ backgroundColor: content.colors.cream }} className="min-h-screen">
      {/* Header */}
      <div 
        className="border-b"
        style={{ borderColor: `${content.colors.dark}15` }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
          <Button
            onClick={() => window.history.back()}
            variant="secondary"
            className="mb-6 inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back
          </Button>
          <h1 
            className="font-serif text-4xl sm:text-5xl font-light mb-4"
            style={{ color: content.colors.dark }}
          >
            Cookie Policy
          </h1>
          <p 
            className="text-sm"
            style={{ color: `${content.colors.dark}99` }}
          >
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 space-y-12">
        {/* Introduction */}
        <section>
          <p 
            className="text-base leading-relaxed"
            style={{ color: `${content.colors.dark}DD` }}
          >
            This Cookie Policy explains how STRATRI ("we", "our", or "us") uses cookies and similar technologies on our website{' '}
            <span className="font-medium" style={{ color: content.colors.accent }}>stratri.com</span>
            . By using our website, you consent to the use of cookies in accordance with this policy.
          </p>
        </section>

        {/* 1. What Are Cookies */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            1. What Are Cookies?
          </h2>
          <p 
            className="text-base leading-relaxed"
            style={{ color: `${content.colors.dark}DD` }}
          >
            Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and provide information to website owners.
          </p>
        </section>

        {/* 2. How We Use Cookies */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            2. How We Use Cookies
          </h2>
          <p 
            className="text-base leading-relaxed mb-4"
            style={{ color: `${content.colors.dark}DD` }}
          >
            We use cookies for the following purposes:
          </p>
          <ul 
            className="list-disc list-inside space-y-2 text-base ml-4"
            style={{ color: `${content.colors.dark}DD` }}
          >
            <li>To enable certain functions of the website</li>
            <li>To provide analytics and understand how you use our website</li>
            <li>To store your preferences and settings</li>
            <li>To deliver relevant content and advertisements</li>
            <li>To improve your browsing experience</li>
          </ul>
        </section>

        {/* 3. Types of Cookies We Use */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            3. Types of Cookies We Use
          </h2>
          
          <div className="space-y-6">
            {/* Necessary Cookies */}
            <div 
              className="p-6 rounded-lg border-l-4"
              style={{ 
                backgroundColor: `${content.colors.dark}05`,
                borderColor: content.colors.accent
              }}
            >
              <h3 
                className="font-sans text-lg font-medium mb-3"
                style={{ color: content.colors.dark }}
              >
                3.1 Necessary Cookies (Required)
              </h3>
              <p 
                className="text-base leading-relaxed mb-3"
                style={{ color: `${content.colors.dark}DD` }}
              >
                These cookies are essential for the website to function properly. They enable basic functions like page navigation, access to secure areas, and remembering your cookie preferences.
              </p>
              <div className="mt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b" style={{ borderColor: `${content.colors.dark}20` }}>
                      <th className="text-left py-2 font-sans font-medium" style={{ color: content.colors.dark }}>Cookie Name</th>
                      <th className="text-left py-2 font-sans font-medium" style={{ color: content.colors.dark }}>Purpose</th>
                      <th className="text-left py-2 font-sans font-medium" style={{ color: content.colors.dark }}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: `${content.colors.dark}10` }}>
                      <td className="py-2 font-mono text-xs" style={{ color: content.colors.accent }}>stratri-cookie-consent</td>
                      <td className="py-2" style={{ color: `${content.colors.dark}DD` }}>Stores your cookie preferences</td>
                      <td className="py-2" style={{ color: `${content.colors.dark}DD` }}>12 months</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: `${content.colors.dark}10` }}>
                      <td className="py-2 font-mono text-xs" style={{ color: content.colors.accent }}>stratri-session</td>
                      <td className="py-2" style={{ color: `${content.colors.dark}DD` }}>Maintains your session state</td>
                      <td className="py-2" style={{ color: `${content.colors.dark}DD` }}>Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div 
              className="p-6 rounded-lg border-l-4"
              style={{ 
                backgroundColor: `${content.colors.dark}05`,
                borderColor: content.colors.light
              }}
            >
              <h3 
                className="font-sans text-lg font-medium mb-3"
                style={{ color: content.colors.dark }}
              >
                3.2 Analytics Cookies (Optional)
              </h3>
              <p 
                className="text-base leading-relaxed mb-3"
                style={{ color: `${content.colors.dark}DD` }}
              >
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
              </p>
              <div className="mt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b" style={{ borderColor: `${content.colors.dark}20` }}>
                      <th className="text-left py-2 font-sans font-medium" style={{ color: content.colors.dark }}>Cookie Name</th>
                      <th className="text-left py-2 font-sans font-medium" style={{ color: content.colors.dark }}>Purpose</th>
                      <th className="text-left py-2 font-sans font-medium" style={{ color: content.colors.dark }}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b" style={{ borderColor: `${content.colors.dark}10` }}>
                      <td className="py-2 font-mono text-xs" style={{ color: content.colors.accent }}>_ga</td>
                      <td className="py-2" style={{ color: `${content.colors.dark}DD` }}>Google Analytics - distinguishes users</td>
                      <td className="py-2" style={{ color: `${content.colors.dark}DD` }}>2 years</td>
                    </tr>
                    <tr className="border-b" style={{ borderColor: `${content.colors.dark}10` }}>
                      <td className="py-2 font-mono text-xs" style={{ color: content.colors.accent }}>_ga_*</td>
                      <td className="py-2" style={{ color: `${content.colors.dark}DD` }}>Google Analytics - persists session state</td>
                      <td className="py-2" style={{ color: `${content.colors.dark}DD` }}>2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div 
              className="p-6 rounded-lg border-l-4"
              style={{ 
                backgroundColor: `${content.colors.dark}05`,
                borderColor: content.colors.light
              }}
            >
              <h3 
                className="font-sans text-lg font-medium mb-3"
                style={{ color: content.colors.dark }}
              >
                3.3 Marketing Cookies (Optional)
              </h3>
              <p 
                className="text-base leading-relaxed"
                style={{ color: `${content.colors.dark}DD` }}
              >
                These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for individual users. You can opt out of these cookies through your cookie preferences.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Third-Party Cookies */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            4. Third-Party Cookies
          </h2>
          <p 
            className="text-base leading-relaxed mb-4"
            style={{ color: `${content.colors.dark}DD` }}
          >
            In addition to our own cookies, we may also use third-party cookies to report usage statistics and deliver advertisements. These third parties include:
          </p>
          <ul 
            className="list-disc list-inside space-y-2 text-base ml-4"
            style={{ color: `${content.colors.dark}DD` }}
          >
            <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
            <li><strong>LinkedIn:</strong> For professional networking and advertising</li>
            <li><strong>Substack:</strong> For newsletter subscription management</li>
          </ul>
          <p 
            className="text-base leading-relaxed mt-4"
            style={{ color: `${content.colors.dark}DD` }}
          >
            These third parties have their own privacy policies and cookie policies. We recommend reviewing them to understand how they use your data.
          </p>
        </section>

        {/* 5. Managing Cookies */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            5. Managing Your Cookie Preferences
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 
                className="font-sans text-lg font-medium mb-3"
                style={{ color: content.colors.dark }}
              >
                5.1 Cookie Consent Banner
              </h3>
              <p 
                className="text-base leading-relaxed"
                style={{ color: `${content.colors.dark}DD` }}
              >
                When you first visit our website, you will see a cookie consent banner. You can choose to accept all cookies, reject optional cookies, or customize your preferences.
              </p>
            </div>

            <div>
              <h3 
                className="font-sans text-lg font-medium mb-3"
                style={{ color: content.colors.dark }}
              >
                5.2 Browser Settings
              </h3>
              <p 
                className="text-base leading-relaxed mb-3"
                style={{ color: `${content.colors.dark}DD` }}
              >
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base ml-4"
                style={{ color: `${content.colors.dark}DD` }}
              >
                <li>Delete all cookies from your browser</li>
                <li>Block all cookies from being set</li>
                <li>Allow only first-party cookies</li>
                <li>Block third-party cookies</li>
              </ul>
              <p 
                className="text-base leading-relaxed mt-3"
                style={{ color: `${content.colors.dark}DD` }}
              >
                Please note that blocking all cookies may affect your experience on our website and limit certain functionality.
              </p>
            </div>

            <div>
              <h3 
                className="font-sans text-lg font-medium mb-3"
                style={{ color: content.colors.dark }}
              >
                5.3 Opt-Out Links
              </h3>
              <ul 
                className="list-disc list-inside space-y-2 text-base ml-4"
                style={{ color: `${content.colors.dark}DD` }}
              >
                <li>
                  <strong>Google Analytics:</strong>{' '}
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                    style={{ color: content.colors.accent }}
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Updates to This Policy */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            6. Updates to This Cookie Policy
          </h2>
          <p 
            className="text-base leading-relaxed"
            style={{ color: `${content.colors.dark}DD` }}
          >
            We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. We will notify you of any significant changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        {/* 7. Contact Us */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            7. Contact Us
          </h2>
          <p 
            className="text-base leading-relaxed mb-3"
            style={{ color: `${content.colors.dark}DD` }}
          >
            If you have any questions about our use of cookies, please contact us:
          </p>
          <div 
            className="p-6 rounded-lg"
            style={{ backgroundColor: `${content.colors.dark}05` }}
          >
            <p className="font-sans font-medium mb-2" style={{ color: content.colors.dark }}>
              STRATRI
            </p>
            <p className="text-sm mb-1" style={{ color: `${content.colors.dark}DD` }}>
              Email:{' '}
              <a 
                href="mailto:nesibe@stratri.com" 
                className="underline hover:no-underline"
                style={{ color: content.colors.accent }}
              >
                nesibe@stratri.com
              </a>
            </p>
            <p className="text-sm" style={{ color: `${content.colors.dark}DD` }}>
              Website:{' '}
              <a 
                href="https://stratri.com" 
                className="underline hover:no-underline"
                style={{ color: content.colors.accent }}
              >
                stratri.com
              </a>
            </p>
          </div>
        </section>

        {/* Additional Information Box */}
        <div 
          className="p-6 rounded-lg border-2"
          style={{ 
            backgroundColor: `${content.colors.accent}10`,
            borderColor: content.colors.accent
          }}
        >
          <h3 
            className="font-sans text-lg font-medium mb-3"
            style={{ color: content.colors.dark }}
          >
            More Information
          </h3>
          <p 
            className="text-sm leading-relaxed mb-3"
            style={{ color: `${content.colors.dark}DD` }}
          >
            For more information about how we collect, use, and protect your personal data, please read our{' '}
            <a 
              href="/privacy" 
              className="underline hover:no-underline font-medium"
              style={{ color: content.colors.accent }}
            >
              Privacy Policy
            </a>.
          </p>
          <p 
            className="text-sm leading-relaxed"
            style={{ color: `${content.colors.dark}DD` }}
          >
            To learn more about cookies in general, visit{' '}
            <a 
              href="https://www.allaboutcookies.org" 
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline font-medium"
              style={{ color: content.colors.accent }}
            >
              www.allaboutcookies.org
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
