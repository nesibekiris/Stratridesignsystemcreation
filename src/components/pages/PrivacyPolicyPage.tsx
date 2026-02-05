import { ArrowLeft } from 'lucide-react';
import { Button } from '../Button';
import type { SiteContent, Language } from '../../App';

interface PrivacyPolicyPageProps {
  content: SiteContent;
  language: Language;
}

export function PrivacyPolicyPage({ content, language }: PrivacyPolicyPageProps) {
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
            Privacy Policy
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
            STRATRI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
            <span className="font-medium" style={{ color: content.colors.accent }}>stratri.com</span>
            {' '}and use our services.
          </p>
        </section>

        {/* 1. Information We Collect */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            1. Information We Collect
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 
                className="font-sans text-lg font-medium mb-3"
                style={{ color: content.colors.dark }}
              >
                1.1 Personal Information
              </h3>
              <p 
                className="text-base leading-relaxed mb-3"
                style={{ color: `${content.colors.dark}DD` }}
              >
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base ml-4"
                style={{ color: `${content.colors.dark}DD` }}
              >
                <li>Subscribe to our newsletter</li>
                <li>Contact us via email or contact form</li>
                <li>Register for our services or trainings</li>
                <li>Engage with our content</li>
              </ul>
              <p 
                className="text-base leading-relaxed mt-3"
                style={{ color: `${content.colors.dark}DD` }}
              >
                This may include: name, email address, company name, job title, and any other information you choose to provide.
              </p>
            </div>

            <div>
              <h3 
                className="font-sans text-lg font-medium mb-3"
                style={{ color: content.colors.dark }}
              >
                1.2 Automatically Collected Information
              </h3>
              <p 
                className="text-base leading-relaxed mb-3"
                style={{ color: `${content.colors.dark}DD` }}
              >
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul 
                className="list-disc list-inside space-y-2 text-base ml-4"
                style={{ color: `${content.colors.dark}DD` }}
              >
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. How We Use Your Information */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            2. How We Use Your Information
          </h2>
          <p 
            className="text-base leading-relaxed mb-3"
            style={{ color: `${content.colors.dark}DD` }}
          >
            We use the information we collect to:
          </p>
          <ul 
            className="list-disc list-inside space-y-2 text-base ml-4"
            style={{ color: `${content.colors.dark}DD` }}
          >
            <li>Provide, operate, and maintain our website and services</li>
            <li>Improve, personalize, and expand our services</li>
            <li>Understand and analyze how you use our website</li>
            <li>Communicate with you, including sending newsletters and updates</li>
            <li>Process your inquiries and respond to your requests</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Detect, prevent, and address technical issues and security</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        {/* 3. Legal Basis for Processing */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            3. Legal Basis for Processing (GDPR/KVKK)
          </h2>
          <p 
            className="text-base leading-relaxed mb-3"
            style={{ color: `${content.colors.dark}DD` }}
          >
            We process your personal data based on:
          </p>
          <ul 
            className="list-disc list-inside space-y-2 text-base ml-4"
            style={{ color: `${content.colors.dark}DD` }}
          >
            <li><strong>Consent:</strong> When you provide explicit consent (e.g., newsletter subscription)</li>
            <li><strong>Contract:</strong> When necessary to perform a contract with you</li>
            <li><strong>Legal obligation:</strong> When required by law</li>
            <li><strong>Legitimate interests:</strong> When necessary for our legitimate business interests, provided these do not override your rights</li>
          </ul>
        </section>

        {/* 4. Data Sharing and Disclosure */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            4. Data Sharing and Disclosure
          </h2>
          <p 
            className="text-base leading-relaxed mb-3"
            style={{ color: `${content.colors.dark}DD` }}
          >
            We do not sell your personal information. We may share your information with:
          </p>
          <ul 
            className="list-disc list-inside space-y-2 text-base ml-4"
            style={{ color: `${content.colors.dark}DD` }}
          >
            <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and services (e.g., email service providers, analytics providers)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>
          <p 
            className="text-base leading-relaxed mt-3"
            style={{ color: `${content.colors.dark}DD` }}
          >
            All third-party service providers are contractually required to protect your data and use it only for the purposes we specify.
          </p>
        </section>

        {/* 5. Cookies and Tracking Technologies */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            5. Cookies and Tracking Technologies
          </h2>
          <p 
            className="text-base leading-relaxed"
            style={{ color: `${content.colors.dark}DD` }}
          >
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. For detailed information about the cookies we use and your choices, please see our{' '}
            <a 
              href="/cookies" 
              className="underline hover:no-underline font-medium"
              style={{ color: content.colors.accent }}
            >
              Cookie Policy
            </a>.
          </p>
        </section>

        {/* 6. Data Security */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            6. Data Security
          </h2>
          <p 
            className="text-base leading-relaxed"
            style={{ color: `${content.colors.dark}DD` }}
          >
            We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
          </p>
        </section>

        {/* 7. Data Retention */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            7. Data Retention
          </h2>
          <p 
            className="text-base leading-relaxed"
            style={{ color: `${content.colors.dark}DD` }}
          >
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your personal information, we will securely delete or anonymize it.
          </p>
        </section>

        {/* 8. Your Rights */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            8. Your Rights
          </h2>
          <p 
            className="text-base leading-relaxed mb-3"
            style={{ color: `${content.colors.dark}DD` }}
          >
            Under GDPR, KVKK, and other applicable data protection laws, you have the following rights:
          </p>
          <ul 
            className="list-disc list-inside space-y-2 text-base ml-4"
            style={{ color: `${content.colors.dark}DD` }}
          >
            <li><strong>Access:</strong> Request access to your personal data</li>
            <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
            <li><strong>Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
            <li><strong>Restriction:</strong> Request restriction of processing</li>
            <li><strong>Portability:</strong> Request transfer of your data to another service</li>
            <li><strong>Objection:</strong> Object to processing of your personal data</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent at any time (without affecting prior processing)</li>
          </ul>
          <p 
            className="text-base leading-relaxed mt-4"
            style={{ color: `${content.colors.dark}DD` }}
          >
            To exercise any of these rights, please contact us at{' '}
            <a 
              href="mailto:nesibe@stratri.com" 
              className="underline hover:no-underline font-medium"
              style={{ color: content.colors.accent }}
            >
              nesibe@stratri.com
            </a>.
          </p>
        </section>

        {/* 9. International Data Transfers */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            9. International Data Transfers
          </h2>
          <p 
            className="text-base leading-relaxed"
            style={{ color: `${content.colors.dark}DD` }}
          >
            Your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.
          </p>
        </section>

        {/* 10. Children's Privacy */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            10. Children's Privacy
          </h2>
          <p 
            className="text-base leading-relaxed"
            style={{ color: `${content.colors.dark}DD` }}
          >
            Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
          </p>
        </section>

        {/* 11. Changes to This Privacy Policy */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            11. Changes to This Privacy Policy
          </h2>
          <p 
            className="text-base leading-relaxed"
            style={{ color: `${content.colors.dark}DD` }}
          >
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        {/* 12. Contact Us */}
        <section>
          <h2 
            className="font-serif text-2xl font-medium mb-4"
            style={{ color: content.colors.dark }}
          >
            12. Contact Us
          </h2>
          <p 
            className="text-base leading-relaxed mb-3"
            style={{ color: `${content.colors.dark}DD` }}
          >
            If you have any questions about this Privacy Policy or our data practices, please contact us:
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
      </div>
    </div>
  );
}
