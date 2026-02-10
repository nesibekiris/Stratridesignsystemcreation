import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import { Button } from './Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stratri-cream">
      <div className="border-t border-stratri-divider/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl font-medium mb-6 text-stratri-dark uppercase tracking-wider">
                STRATRI
              </h3>
              <p className="text-sm text-stratri-dark/70 leading-relaxed font-sans mb-8">
                Technology Policy & AI governance Consultancy
              </p>
              <Button href="/connect" variant="primary" className="w-full sm:w-auto">
                Get in touch
              </Button>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-serif text-sm font-medium mb-6 text-stratri-dark uppercase tracking-wider">
                Services
              </h4>
              <div className="space-y-3">
                <Link
                  to="/services"
                  className="block text-sm font-sans text-stratri-dark hover:text-stratri-accent transition-colors duration-200 group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                    All Services
                  </span>
                </Link>
                <Link
                  to="/services#ai-strategy-maturity"
                  className="block text-sm font-sans text-stratri-dark hover:text-stratri-accent transition-colors duration-200 group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                    AI Strategy
                  </span>
                </Link>
                <Link
                  to="/services#ai-governance-ethics-literacy"
                  className="block text-sm font-sans text-stratri-dark hover:text-stratri-accent transition-colors duration-200 group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                    AI Governance
                  </span>
                </Link>
                <Link
                  to="/services#market-policy-research"
                  className="block text-sm font-sans text-stratri-dark hover:text-stratri-accent transition-colors duration-200 group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                    Market Research
                  </span>
                </Link>
                <Link
                  to="/services#policy-government-affairs"
                  className="block text-sm font-sans text-stratri-dark hover:text-stratri-accent transition-colors duration-200 group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                    Policy Advisory
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-serif text-sm font-medium mb-6 text-stratri-dark uppercase tracking-wider">
                Frameworks
              </h4>
              <div className="space-y-3">
                <Link
                  to="/services/railway"
                  className="block text-sm font-sans text-stratri-dark hover:text-stratri-accent transition-colors duration-200 group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                    Railway
                  </span>
                </Link>
                <Link
                  to="/services/railway#rail"
                  className="block text-sm font-sans text-stratri-dark hover:text-stratri-accent transition-colors duration-200 group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                    RAIL Loop
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-serif text-sm font-medium mb-6 text-stratri-dark uppercase tracking-wider">
                Insights
              </h4>
              <div className="space-y-3">
                <Link
                  to="/insights"
                  className="block text-sm font-sans text-stratri-dark hover:text-stratri-accent transition-colors duration-200 group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                    All Insights
                  </span>
                </Link>
                <Link
                  to="/insights"
                  className="block text-sm font-sans text-stratri-dark hover:text-stratri-accent transition-colors duration-200 group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                    Techletter
                  </span>
                </Link>
                <Link
                  to="/insights"
                  className="block text-sm font-sans text-stratri-dark hover:text-stratri-accent transition-colors duration-200 group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                    Reports
                  </span>
                </Link>
                <Link
                  to="/insights"
                  className="block text-sm font-sans text-stratri-dark hover:text-stratri-accent transition-colors duration-200 group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                    Articles
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h4 className="font-serif text-sm font-medium mb-6 text-stratri-dark uppercase tracking-wider">
                Company
              </h4>
              <div className="space-y-3 mb-8">
                <Link
                  to="/about"
                  className="block text-sm font-sans text-stratri-dark hover:text-stratri-accent transition-colors duration-200 group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                    About
                  </span>
                </Link>
                <Link
                  to="/connect"
                  className="block text-sm font-sans text-stratri-dark hover:text-stratri-accent transition-colors duration-200 group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                    Contact
                  </span>
                </Link>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/nesibekiris/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-stratri-divider flex items-center justify-center text-stratri-dark hover:bg-stratri-light/20 hover:border-stratri-accent transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:nesibe@stratri.com"
                  className="w-10 h-10 rounded-full border border-stratri-divider flex items-center justify-center text-stratri-dark hover:bg-stratri-light/20 hover:border-stratri-accent transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stratri-divider/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-stratri-dark/50 font-sans">
                © {currentYear} STRATRI. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-xs text-stratri-dark/50 font-sans">
                <Link to="/privacy" className="hover:text-stratri-accent transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-stratri-accent transition-colors">
                  Terms
                </Link>
                <Link to="/cookies" className="hover:text-stratri-accent transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}