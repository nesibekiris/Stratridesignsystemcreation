import type { SiteContent } from '@/types/content';

export const defaultContent: SiteContent = {
  hero: {
    title: 'At the crossroads of technology, policy, and society',
    subtitle: 'STRATRI helps you turn that junction into strategy',
    description: 'We work in the middle of that intersection',
    primaryButtonText: 'Explore how we work',
    primaryButtonLink: '#how-we-work',
    secondaryButtonText: 'Talk to STRATRI',
    secondaryButtonLink: '#connect',
  },
  threeRoads: {
    title: 'Three roads. One decision point.',
    description1: 'Most teams no longer make technology decisions from a single vantage point.',
    description2: 'We treat your organization as a living junction of three roads:',
    conclusion: 'STRATRI sits where those roads meet',
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
    description: 'Occasional deep dives on AI governance',
    placeholder: 'nesibe@stratri.com',
    buttonText: 'Subscribe',
  },
  settings: {
    siteName: 'STRATRI',
    tagline: 'Technology Policy & AI Governance Consultancy',
    email: 'nesibe@stratri.com',
    linkedinUrl: 'https://www.linkedin.com/in/nesibekiris/',
    logoText: 'STRATRI',
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
};
