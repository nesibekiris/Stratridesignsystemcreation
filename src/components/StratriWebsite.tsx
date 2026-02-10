import { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Mail } from 'lucide-react';
import type { SiteContent, Language } from '../App';
import { Button } from './Button';
import { ServicesPage } from './pages/ServicesPage';
import { InsightsPage } from './pages/InsightsPage';
import { AboutPage } from './pages/AboutPage';
import { ConnectPage } from './pages/ConnectPage';
import { HomePage } from './pages/HomePage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { t, staticTranslations, contentTranslations } from '../utils/translations';
import { StickyPageNav, defaultHomeSections } from './StickyPageNav';
import { GovernanceSuiteGrid, type GovernanceSuiteItem } from './GovernanceSuiteCard';
import { CrossroadsRisks, defaultRisks } from './CrossroadsRisks';
import { MetricStrip, defaultMetrics } from './MetricStrip';
import { StrategyIcon, GovernanceIcon, ResearchIcon, PolicyAffairsIcon } from './Icons';
import techletterLogo from '../assets/techletter-logo.svg';
import { NavigationDropdown } from './NavigationDropdown';
import { MobileNavigationItem } from './MobileNavigationItem';

interface StratriWebsiteProps {
  content: SiteContent;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function StratriWebsite({ content, language, onLanguageChange }: StratriWebsiteProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [techletterPosts, setTechletterPosts] = useState<any[]>([]);
  const [isLoadingTechletter, setIsLoadingTechletter] = useState(true);

  // Fetch Techletter posts from Substack RSS
  useEffect(() => {
    const fetchTechletterPosts = async () => {
      try {
        setIsLoadingTechletter(true);
        
        // TODO: Enable RSS feed fetching when site is published
        // For now, use mock data since RSS feed is not publicly accessible yet
        const useMockData = true; // Set to false once site is published
        
        if (useMockData) {
          // Use mock Techletter data
          const mockTechletterPosts = [
            {
              id: 'techletter-1',
              title: 'How I Protect My Brain in the Age of AI',
              summary: 'A personal framework for using AI tools without outsourcing your thinking. Exploring practical strategies to maintain cognitive autonomy in an AI-driven world...',
              category: 'Techletter',
              date: 'Jan 15, 2026',
              slug: 'https://techletter.co',
              readingTime: '6 min read',
              illustrationType: 'network',
              isExternal: true
            },
            {
              id: 'techletter-2',
              title: 'This Month\'s Reports by TechLetter: January 2026',
              summary: 'AI, Work, and the New Geography of Power. A comprehensive analysis of how artificial intelligence is reshaping global economic and political landscapes...',
              category: 'Techletter',
              date: 'Jan 28, 2026',
              slug: 'https://techletter.co',
              readingTime: '8 min read',
              illustrationType: 'circles',
              isExternal: true
            },
            {
              id: 'techletter-3',
              title: 'Davos 2026 AI Recap: From Pilots to Infrastructure',
              summary: 'AI Governance, AGI Timelines, and What\'s Missing: Musk, Amodei, Nadella. Key insights from the world\'s leading tech executives on the future of AI...',
              category: 'Techletter',
              date: 'Jan 23, 2026',
              slug: 'https://techletter.co',
              readingTime: '7 min read',
              illustrationType: 'lines',
              isExternal: true
            },
            {
              id: 'techletter-4',
              title: 'Grok Bikini, OpenAI Logs & Trump\'s AI War: How 2026 Just Changed AI Governance',
              summary: 'AI Porn, Deepfakes & The Year Governance Gets Real. Examining the critical governance challenges emerging from recent AI developments...',
              category: 'Techletter',
              date: 'Jan 8, 2026',
              slug: 'https://techletter.co',
              readingTime: '6 min read',
              illustrationType: 'grid',
              isExternal: true
            }
          ];
          setTechletterPosts(mockTechletterPosts);
          setIsLoadingTechletter(false);
          return;
        }
        
        // Use CORS proxy to fetch RSS feed
        const proxyUrl = 'https://api.allorigins.win/raw?url=';
        const rssUrl = encodeURIComponent('https://techletter.co/feed');
        const response = await fetch(`${proxyUrl}${rssUrl}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch RSS feed');
        }
        
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        
        const items = xml.querySelectorAll('item');
        const posts = Array.from(items).slice(0, 6).map((item, index) => {
          const title = item.querySelector('title')?.textContent || '';
          const link = item.querySelector('link')?.textContent || '';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          const description = item.querySelector('description')?.textContent || '';
          
          // Clean description from HTML tags
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = description;
          const cleanDescription = tempDiv.textContent || tempDiv.innerText || '';
          
          // Format date
          const date = new Date(pubDate);
          const formattedDate = date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          });
          
          // Assign illustration types cyclically
          const illustrationTypes = ['network', 'circles', 'lines', 'grid', 'dots', 'waves'];
          
          return {
            id: `techletter-${index}`,
            title,
            summary: cleanDescription.slice(0, 180) + '...',
            category: 'Techletter',
            date: formattedDate,
            slug: link,
            readingTime: '5 min read',
            illustrationType: illustrationTypes[index % illustrationTypes.length],
            isExternal: true
          };
        });
        
        setTechletterPosts(posts);
      } catch (error) {
        // Silently fail and use mock data
        const mockTechletterPosts = [
          {
            id: 'techletter-1',
            title: 'How I Protect My Brain in the Age of AI',
            summary: 'A personal framework for using AI tools without outsourcing your thinking. Exploring practical strategies to maintain cognitive autonomy in an AI-driven world...',
            category: 'Techletter',
            date: 'Jan 15, 2026',
            slug: 'https://techletter.co',
            readingTime: '6 min read',
            illustrationType: 'network',
            isExternal: true
          },
          {
            id: 'techletter-2',
            title: 'This Month\'s Reports by TechLetter: January 2026',
            summary: 'AI, Work, and the New Geography of Power. A comprehensive analysis of how artificial intelligence is reshaping global economic and political landscapes...',
            category: 'Techletter',
            date: 'Jan 28, 2026',
            slug: 'https://techletter.co',
            readingTime: '8 min read',
            illustrationType: 'circles',
            isExternal: true
          },
          {
            id: 'techletter-3',
            title: 'Davos 2026 AI Recap: From Pilots to Infrastructure',
            summary: 'AI Governance, AGI Timelines, and What\'s Missing: Musk, Amodei, Nadella. Key insights from the world\'s leading tech executives on the future of AI...',
            category: 'Techletter',
            date: 'Jan 23, 2026',
            slug: 'https://techletter.co',
            readingTime: '7 min read',
            illustrationType: 'lines',
            isExternal: true
          },
          {
            id: 'techletter-4',
            title: 'Grok Bikini, OpenAI Logs & Trump\'s AI War: How 2026 Just Changed AI Governance',
            summary: 'AI Porn, Deepfakes & The Year Governance Gets Real. Examining the critical governance challenges emerging from recent AI developments...',
            category: 'Techletter',
            date: 'Jan 8, 2026',
            slug: 'https://techletter.co',
            readingTime: '6 min read',
            illustrationType: 'grid',
            isExternal: true
          }
        ];
        setTechletterPosts(mockTechletterPosts);
      } finally {
        setIsLoadingTechletter(false);
      }
    };

    fetchTechletterPosts();
  }, []);

  // Listen to popstate (browser back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation helper
  const navigateTo = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    // Check if path contains hash (anchor link)
    if (path.includes('#')) {
      const [pathname, hash] = path.split('#');
      
      // Navigate to the page if not already there
      if (pathname && pathname !== currentPath) {
        window.history.pushState({}, '', path);
        setCurrentPath(pathname);
        setIsMenuOpen(false);
        
        // Wait for page to render, then scroll to anchor
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const offset = 100; // Account for sticky nav
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        // Same page, just scroll to anchor
        const element = document.getElementById(hash);
        if (element) {
          const offset = 100; // Account for sticky nav
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        setIsMenuOpen(false);
      }
    } else {
      // Regular navigation without hash
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      setIsMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const getIconComponent = (iconName: string) => {
    const icons: any = {
      strategy: StrategyIcon,
      governance: GovernanceIcon,
      research: ResearchIcon,
      policy: PolicyAffairsIcon,
    };
    const IconComponent = icons[iconName] || StrategyIcon;
    return <IconComponent className="w-full h-full" />;
  };

  const style = {
    '--color-cream': content.colors.cream,
    '--color-dark': content.colors.dark,
    '--color-accent': content.colors.accent,
    '--color-light': content.colors.light,
  } as React.CSSProperties;

  // Render appropriate page based on route
  const renderPage = () => {
    switch (currentPath) {
      case '/services':
        return <ServicesPage content={content} />;
      case '/insights':
        return <InsightsPage content={content} />;
      case '/about':
        return <AboutPage content={content} />;
      case '/connect':
        return <ConnectPage content={content} />;
      default:
        return (
          <HomePage 
            content={content} 
            language={language}
            techletterPosts={techletterPosts}
            isLoadingTechletter={isLoadingTechletter}
          />
        );
    }
  };

  return (
    <div className="min-h-screen relative" style={style}>
      <style>{`
        :root {
          --stratri-cream: ${content.colors.cream};
          --stratri-dark: ${content.colors.dark};
          --stratri-accent: ${content.colors.accent};
          --stratri-light: ${content.colors.light};
        }
      `}</style>

      {/* Navigation */}
      <nav 
        className="sticky top-0 z-40 backdrop-blur-sm border-b"
        style={{ 
          backgroundColor: `${content.colors.cream}F5`,
          borderColor: '#E8E4DF'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with Wordmark */}
            <button onClick={(e) => navigateTo('/', e)} className="flex items-center gap-2 cursor-pointer">
              {content.settings.logoImage && (
                <img src={content.settings.logoImage} alt={content.settings.siteName} className="h-10" />
              )}
              <span 
                className="font-serif text-2xl font-medium tracking-wider uppercase"
                style={{ color: content.colors.dark }}
              >
                {content.settings.logoText}
              </span>
            </button>

            {/* Desktop Navigation - Tab-like Pills */}
            <div className="hidden md:flex items-center gap-2">
              {[
                { name: 'Home', path: '/', children: null },
                { 
                  name: 'Services', 
                  path: '/services',
                  children: [
                    { name: 'AI Strategy & Maturity', path: '/services#ai-strategy-maturity' },
                    { name: 'AI Governance, Ethics & Literacy', path: '/services#ai-governance-ethics-literacy' },
                    { name: 'Market & Policy Research', path: '/services#market-policy-research' },
                    { name: 'Policy & Government Affairs', path: '/services#policy-government-affairs' },
                    { name: 'Railway – AI Governance Framework', path: '/services#railway' },
                  ]
                },
                { 
                  name: 'Insights', 
                  path: '/insights',
                  children: [
                    { name: 'Techletter', path: '/insights#techletter' },
                    { name: 'Reports', path: '/insights#reports' },
                    { name: 'Articles', path: '/insights#articles' },
                    { name: 'AI Wrapped', path: '/insights#wrapped' },
                  ]
                },
                { 
                  name: 'About', 
                  path: '/about',
                  children: [
                    { name: 'About STRATRI', path: '/about#about' },
                    { name: 'Principles', path: '/about#principles' },
                    { name: 'Managing Partner', path: '/about#partner' },
                  ]
                },
                { 
                  name: 'Connect', 
                  path: '/connect',
                  children: [
                    { name: 'Contact Form', path: '/connect#form' },
                    { name: 'Email', path: '/connect#email' },
                    { name: 'LinkedIn', path: '/connect#linkedin' },
                    { name: 'Techletter', path: '/connect#techletter' },
                  ]
                },
              ].map((item, index) => {
                const isActive = currentPath === item.path;
                
                return (
                  <NavigationDropdown
                    key={index}
                    item={item}
                    isActive={isActive}
                    onNavigate={navigateTo}
                    colors={content.colors}
                  />
                );
              })}
              
              <LanguageSwitcher 
                currentLanguage={language} 
                onLanguageChange={onLanguageChange}
                colors={content.colors}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-sm transition-colors"
              style={{ 
                backgroundColor: isMenuOpen ? '#f0f0f0' : 'transparent',
                color: content.colors.dark 
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Accordion Style */}
        {isMenuOpen && (
          <div className="md:hidden border-t" style={{ borderColor: '#E8E4DF', backgroundColor: 'white' }}>
            <div className="px-6 py-6 space-y-2">
              {[
                { name: 'Home', path: '/', children: null },
                { 
                  name: 'Services', 
                  path: '/services',
                  children: [
                    { name: 'AI Strategy & Maturity', path: '/services#ai-strategy-maturity' },
                    { name: 'AI Governance, Ethics & Literacy', path: '/services#ai-governance-ethics-literacy' },
                    { name: 'Market & Policy Research', path: '/services#market-policy-research' },
                    { name: 'Policy & Government Affairs', path: '/services#policy-government-affairs' },
                    { name: 'Railway – AI Governance Framework', path: '/services#railway' },
                  ]
                },
                { 
                  name: 'Insights', 
                  path: '/insights',
                  children: [
                    { name: 'Techletter', path: '/insights#techletter' },
                    { name: 'Reports', path: '/insights#reports' },
                    { name: 'Articles', path: '/insights#articles' },
                    { name: 'AI Wrapped', path: '/insights#wrapped' },
                  ]
                },
                { 
                  name: 'About', 
                  path: '/about',
                  children: [
                    { name: 'About STRATRI', path: '/about#about' },
                    { name: 'Principles', path: '/about#principles' },
                    { name: 'Managing Partner', path: '/about#partner' },
                  ]
                },
                { 
                  name: 'Connect', 
                  path: '/connect',
                  children: [
                    { name: 'Contact Form', path: '/connect#form' },
                    { name: 'Email', path: '/connect#email' },
                    { name: 'LinkedIn', path: '/connect#linkedin' },
                    { name: 'Techletter', path: '/connect#techletter' },
                  ]
                },
              ].map((item, index) => {
                const isActive = currentPath === item.path;
                
                return (
                  <MobileNavigationItem
                    key={index}
                    item={item}
                    isActive={isActive}
                    onNavigate={navigateTo}
                    onClose={() => setIsMenuOpen(false)}
                    colors={content.colors}
                  />
                );
              })}
              <div className="pt-4 flex justify-center">
                <LanguageSwitcher 
                  currentLanguage={language} 
                  onLanguageChange={onLanguageChange}
                  colors={content.colors}
                />
              </div>
            </div>
          </div>
        )}
      </nav>

      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: content.colors.cream }}>
        <div className="border-t" style={{ borderColor: '#E8E4DF80' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
            {/* Navigation Sections - Horizontal Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
              {/* Services */}
              <div>
                <h4 className="font-serif text-sm font-medium mb-6 uppercase tracking-wider" style={{ color: content.colors.dark }}>
                  Services
                </h4>
                <div className="space-y-3">
                  <button
                    onClick={() => setCurrentPath('/services')}
                    className="block text-sm font-sans text-left hover:text-[#184A5A] transition-colors duration-200 group"
                    style={{ color: content.colors.dark }}
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                      All Services
                    </span>
                  </button>
                  <button
                    onClick={() => setCurrentPath('/services')}
                    className="block text-sm font-sans text-left hover:text-[#184A5A] transition-colors duration-200 group"
                    style={{ color: content.colors.dark }}
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                      AI Strategy
                    </span>
                  </button>
                  <button
                    onClick={() => setCurrentPath('/services')}
                    className="block text-sm font-sans text-left hover:text-[#184A5A] transition-colors duration-200 group"
                    style={{ color: content.colors.dark }}
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                      AI Governance
                    </span>
                  </button>
                  <button
                    onClick={() => setCurrentPath('/services')}
                    className="block text-sm font-sans text-left hover:text-[#184A5A] transition-colors duration-200 group"
                    style={{ color: content.colors.dark }}
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                      Market Research
                    </span>
                  </button>
                  <button
                    onClick={() => setCurrentPath('/services')}
                    className="block text-sm font-sans text-left hover:text-[#184A5A] transition-colors duration-200 group"
                    style={{ color: content.colors.dark }}
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                      Policy Advisory
                    </span>
                  </button>
                </div>
              </div>

              {/* Frameworks */}
              <div>
                <h4 className="font-serif text-sm font-medium mb-6 uppercase tracking-wider" style={{ color: content.colors.dark }}>
                  Frameworks
                </h4>
                <div className="space-y-3">
                  <button
                    onClick={() => setCurrentPath('/services')}
                    className="block text-sm font-sans text-left hover:text-[#184A5A] transition-colors duration-200 group"
                    style={{ color: content.colors.dark }}
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                      Railway
                    </span>
                  </button>
                  <button
                    onClick={() => setCurrentPath('/services')}
                    className="block text-sm font-sans text-left hover:text-[#184A5A] transition-colors duration-200 group"
                    style={{ color: content.colors.dark }}
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                      RAIL Loop
                    </span>
                  </button>
                </div>
              </div>

              {/* Insights */}
              <div>
                <h4 className="font-serif text-sm font-medium mb-6 uppercase tracking-wider" style={{ color: content.colors.dark }}>
                  Insights
                </h4>
                <div className="space-y-3">
                  <button
                    onClick={() => setCurrentPath('/insights')}
                    className="block text-sm font-sans text-left hover:text-[#184A5A] transition-colors duration-200 group"
                    style={{ color: content.colors.dark }}
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                      All Insights
                    </span>
                  </button>
                  <button
                    onClick={() => setCurrentPath('/insights')}
                    className="block text-sm font-sans text-left hover:text-[#184A5A] transition-colors duration-200 group"
                    style={{ color: content.colors.dark }}
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                      Techletter
                    </span>
                  </button>
                  <button
                    onClick={() => setCurrentPath('/insights')}
                    className="block text-sm font-sans text-left hover:text-[#184A5A] transition-colors duration-200 group"
                    style={{ color: content.colors.dark }}
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                      Reports
                    </span>
                  </button>
                  <button
                    onClick={() => setCurrentPath('/insights')}
                    className="block text-sm font-sans text-left hover:text-[#184A5A] transition-colors duration-200 group"
                    style={{ color: content.colors.dark }}
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                      Articles
                    </span>
                  </button>
                </div>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-serif text-sm font-medium mb-6 uppercase tracking-wider" style={{ color: content.colors.dark }}>
                  Company
                </h4>
                <div className="space-y-3">
                  <button
                    onClick={() => setCurrentPath('/about')}
                    className="block text-sm font-sans text-left hover:text-[#184A5A] transition-colors duration-200 group"
                    style={{ color: content.colors.dark }}
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                      About
                    </span>
                  </button>
                  <button
                    onClick={() => setCurrentPath('/connect')}
                    className="block text-sm font-sans text-left hover:text-[#184A5A] transition-colors duration-200 group"
                    style={{ color: content.colors.dark }}
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                      Contact
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links - Horizontal at Bottom */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href={content.settings.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:bg-[#184A5A]/5 hover:border-[#184A5A] hover:text-[#184A5A]"
                style={{ 
                  borderColor: '#E8E4DF',
                  color: `${content.colors.dark}B3`
                }}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${content.settings.email}`}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:bg-[#184A5A]/5 hover:border-[#184A5A] hover:text-[#184A5A]"
                style={{ 
                  borderColor: '#E8E4DF',
                  color: `${content.colors.dark}B3`
                }}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="border-t" style={{ borderColor: '#E8E4DF80' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
              <p className="text-xs font-sans text-center" style={{ color: `${content.colors.dark}80` }}>
                © {currentYear} {content.settings.siteName}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}