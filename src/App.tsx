import { useState, useEffect } from 'react';
import { StratriWebsite } from './components/StratriWebsite';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AdminLogin } from './components/AdminLogin';
import { VisualsShowcase } from './components/visuals/VisualsShowcase';
import logoImage from 'figma:asset/817fd993f5a8d7f9bfc11eb27cf9632e3b3d533c.png';
import { authHelpers } from './utils/supabase/client';
import { updateSEO, getPageKeyFromPath } from './utils/seo';

export type Language = 'en' | 'tr';

export interface SiteContent {
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    backgroundImage?: string;
  };
  // Three Roads Section
  threeRoads: {
    title: string;
    description1: string;
    description2: string;
    conclusion: string;
    roads: Array<{
      name: string;
      description: string;
      icon?: string;
    }>;
  };
  // Services
  services: {
    title: string;
    pillars: Array<{
      id: string;
      title: string;
      subtitle: string;
      icon: string;
      points: string[];
      link: string;
      image?: string;
    }>;
  };
  // How We Work
  howWeWork: {
    title: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
      image?: string;
    }>;
  };
  // For Teams Section
  forTeams: {
    title: string;
    intro: string;
    items: string[];
    conclusion: string;
    buttonText: string;
    backgroundImage?: string;
  };
  // Insights
  insights: {
    title: string;
    subtitle: string;
    posts: Array<{
      id: string;
      title: string;
      summary: string;
      category: string;
      date: string;
      slug: string;
      readingTime: string;
      illustrationType: string;
      featuredImage?: string;
    }>;
  };
  // Trainings
  trainings: {
    title: string;
    items: Array<{
      title: string;
      outcome: string;
    }>;
    buttonText: string;
  };
  // Newsletter
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
  };
  // Site Settings
  settings: {
    siteName: string;
    tagline: string;
    email: string;
    linkedinUrl: string;
    logoText: string;
    logoImage?: string;
    faviconImage?: string;
  };
  // Navigation
  navigation: Array<{
    name: string;
    path: string;
  }>;
  // Brand Colors
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
  // Images Library
  images: Array<{
    id: string;
    url: string;
    name: string;
    alt: string;
    uploadedAt: string;
  }>;
}

function App() {
  // Get current route
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  // Language state
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);
  
  const [siteContent, setSiteContent] = useState<SiteContent>({
    hero: {
      title: 'At the crossroads of technology, policy, and society',
      subtitle: 'STRATRI helps you turn that junction into strategy: a stable ground where innovation, rules, and impact finally align.',
      description: 'In every organization, new technology now sits at a trivium. Product wants to move, policy wants to protect, society reacts in real time. We work in the middle of that intersection so you do not have to choose one road at the expense of the others.',
      primaryButtonText: 'Explore how we work',
      primaryButtonLink: '#how-we-work',
      secondaryButtonText: 'Talk to STRATRI',
      secondaryButtonLink: '#connect',
    },
    threeRoads: {
      title: 'Three roads. One decision point.',
      description1: 'Most teams no longer make technology decisions from a single vantage point. Engineers, policy teams, executives, and communities all pull in different directions.',
      description2: 'We treat your organization as a living junction of three roads:',
      conclusion: 'STRATRI sits where those roads meet and helps you design how they move together instead of against each other.',
      roads: [
        { name: 'Technology', description: 'Systems, products, data, models' },
        { name: 'Policy', description: 'Law, regulation, internal rules' },
        { name: 'Society', description: 'Users, workers, citizens, public trust' },
      ],
    },
    services: {
      title: 'We do not ask you to pick a road. We help you design the junction.',
      pillars: [
        {
          id: '1',
          title: 'AI Strategy & Maturity',
          subtitle: 'From fragmented experiments to a clear, shared plan.',
          icon: 'strategy',
          points: [
            'Technology and AI maturity assessments and diagnostics',
            'Roadmaps aligned with business, societal, and public value',
            'Operating models, roles, and decision rights for responsible technology and AI',
          ],
          link: '/services#strategy',
        },
        {
          id: '2',
          title: 'AI Governance, Ethics & Literacy',
          subtitle: 'Turning principles into everyday decisions.',
          icon: 'governance',
          points: [
            'Governance frameworks, policies, and processes for technology and AI',
            'Ethical guidelines and review mechanisms across the full lifecycle',
            'Literacy and capability programs for leaders, boards, and teams',
          ],
          link: '/services#governance',
        },
        {
          id: '3',
          title: 'Market & Policy Research',
          subtitle: 'Making sense of shifting landscapes.',
          icon: 'research',
          points: [
            'Research on technology and AI markets, trends, and use cases',
            'Analysis of regulatory developments and policy direction',
            'Reports, explainers, briefings, and policy papers',
          ],
          link: '/services#research',
        },
        {
          id: '4',
          title: 'Policy & Government Affairs',
          subtitle: 'Engaging credibly with the public arena.',
          icon: 'policy',
          points: [
            'Advisory on technology and AI policy positioning',
            'Stakeholder mapping and engagement strategies',
            'Support for consultations, hearings, and multi-stakeholder processes',
          ],
          link: '/services#policy',
        },
      ],
    },
    howWeWork: {
      title: 'How we work',
      steps: [
        {
          number: '1',
          title: 'Recognize the junctions',
          description: 'We surface where innovation actually lives in your organization—not just in strategy decks, but in products, workflows, relationships, and quiet experiments no one has mapped yet.',
        },
        {
          number: '2',
          title: 'Design the strategic layer',
          description: 'Together, we build the structures that connect technology, policy, and society into one coherent strategy: governance frameworks, roles, workflows, and narratives that travel across teams.',
        },
        {
          number: '3',
          title: 'Embed and iterate',
          description: 'Governance only works if people use it. We stay close as you roll out, adjust to regulatory shifts and market pressure, and learn from real cases. Strategy is not a document. It is a practice.',
        },
      ],
    },
    forTeams: {
      title: 'For teams who cannot afford "wait and see"',
      intro: 'STRATRI works with organizations that move at the intersection of innovation, rules, and public expectation. That includes:',
      items: [
        'Technology companies moving from experiments to real products and platforms',
        'Organizations in retail technologies, industrial and manufacturing, AI, fintech, ecommerce, healthtech, and crypto that are reshaping their business through technology',
        'Venture investors and platforms that need a grounded view on risk, governance, and public perception',
        'Public institutions facing new obligations and scrutiny',
        'Civil society and ecosystem actors who help define the rules of the game',
      ],
      conclusion: 'If you sit somewhere between "we cannot ship this" and "we cannot stop now", you are in the right place.',
      buttonText: 'Get in touch',
    },
    insights: {
      title: 'Latest from STRATRI',
      subtitle: 'Deep thinking on AI governance, responsible technology and policy.',
      posts: [
        {
          id: '1',
          title: 'Understanding AI Governance Frameworks',
          summary: 'A deep dive into building effective AI governance structures that balance innovation with accountability and ethical considerations.',
          category: 'AI Governance',
          date: 'January 15, 2026',
          slug: 'understanding-ai-governance-frameworks',
          readingTime: '8 min read',
          illustrationType: 'network',
        },
        {
          id: '2',
          title: 'The Evolution of AI Policy in 2026',
          summary: 'Analyzing key regulatory developments across jurisdictions and what they mean for organizations deploying AI systems.',
          category: 'AI Policy',
          date: 'January 10, 2026',
          slug: 'evolution-of-ai-policy-2026',
          readingTime: '12 min read',
          illustrationType: 'circles',
        },
      ],
    },
    trainings: {
      title: 'AI LITERACY & TRAININGS',
      items: [
        {
          title: 'AI Governance & Ethics for Boards',
          outcome: 'Equip board members to ask the right questions.',
        },
        {
          title: 'AI Policy & Regulation for Product and Policy Teams',
          outcome: 'Understand the rules shaping your roadmap.',
        },
        {
          title: 'AI Literacy for Non-Technical Leaders',
          outcome: 'Demystify AI to make better strategic decisions.',
        },
      ],
      buttonText: 'See all trainings',
    },
    newsletter: {
      title: 'Stay close to the thinking',
      description: 'Occasional deep dives on AI governance, policy and literacy – no spam.',
      placeholder: 'nesibe@stratri.com',
      buttonText: 'Subscribe',
    },
    settings: {
      siteName: 'STRATRI',
      tagline: 'Technology Policy & AI Governance Consultancy',
      email: 'nesibe@stratri.com',
      linkedinUrl: 'https://www.linkedin.com/in/nesibekiris/',
      logoText: 'STRATRI',
      logoImage: logoImage,
    },
    navigation: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Insights', path: '/insights' },
      { name: 'About', path: '/about' },
      { name: 'Connect', path: '/connect' },
    ],
    colors: {
      cream: '#FEFBF8',
      dark: '#1E2A45',
      accent: '#184A5A',
      light: '#9FB7C8',
    },
    images: [],
  });

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update SEO metadata when path or language changes
  useEffect(() => {
    const pageKey = getPageKeyFromPath(currentPath);
    updateSEO(pageKey, currentLanguage);
  }, [currentPath, currentLanguage]);

  // Check authentication status on mount and listen for auth changes
  useEffect(() => {
    const checkAuth = async () => {
      const result = await authHelpers.getSession();
      if (result.success && result.session) {
        setIsAuthenticated(true);
        setCurrentUser(result.session.user);
      } else {
        setIsAuthenticated(false);
        setCurrentUser(null);
      }
      setIsCheckingAuth(false);
    };

    checkAuth();

    // Listen to auth state changes
    const { data: authListener } = authHelpers.onAuthStateChange(async (event, session) => {
      console.log('Auth state changed:', event);
      if (session) {
        setIsAuthenticated(true);
        setCurrentUser(session.user);
      } else {
        setIsAuthenticated(false);
        setCurrentUser(null);
        // Redirect to login if trying to access protected route
        if (currentPath === '/fredo') {
          navigateTo('/fredo');
        }
      }
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, [currentPath]);

  // Navigation helper
  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Handle login with email + password
  const handleLogin = async (email: string, password: string): Promise<boolean> => {
    try {
      const result = await authHelpers.signIn(email, password);
      if (result.success) {
        setIsAuthenticated(true);
        setCurrentUser(result.user);
        navigateTo('/fredo');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  // Handle logout
  const handleLogout = async () => {
    await authHelpers.signOut();
    setIsAuthenticated(false);
    setCurrentUser(null);
    navigateTo('/');
  };

  // Show loading while checking auth
  if (isCheckingAuth) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: '#FEFBF8' }}
      >
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4" style={{ borderColor: '#184A5A', borderTopColor: 'transparent' }}></div>
          <p className="font-sans text-sm" style={{ color: '#1E2A45', opacity: 0.7 }}>
            Loading...
          </p>
        </div>
      </div>
    );
  }

  // Admin login screen (only shown when accessing /fredo without auth)
  if (currentPath === '/fredo' && !isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  // Admin Panel Route - Protected
  if (currentPath === '/fredo' && isAuthenticated) {
    return (
      <AdminDashboard
        siteContent={siteContent}
        onUpdateContent={setSiteContent}
        onNavigateToSite={() => navigateTo('/')}
        onLogout={handleLogout}
        currentUser={currentUser}
      />
    );
  }

  // Visuals Showcase Route
  if (currentPath === '/visuals') {
    return <VisualsShowcase />;
  }

  // Public Website (default route)
  return (
    <StratriWebsite 
      content={siteContent} 
      language={currentLanguage}
      onLanguageChange={setCurrentLanguage}
    />
  );
}

export default App;