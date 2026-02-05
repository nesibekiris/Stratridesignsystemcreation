// Block-based content system for STRATRI CMS

export type BlockType = 
  | 'hero'
  | 'three-roads'
  | 'services'
  | 'how-we-work'
  | 'for-teams'
  | 'insights'
  | 'trainings'
  | 'newsletter'
  | 'techletter-cta'
  | 'quote'
  | 'text-image'
  | 'railway-section';

export interface BaseBlock {
  id: string;
  type: BlockType;
  visible: boolean;
  order: number;
}

export interface HeroBlock extends BaseBlock {
  type: 'hero';
  data: {
    title: string;
    subtitle: string;
    description: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    backgroundImage?: string;
    visual: 'technology' | 'policy' | 'society' | 'railway' | 'insights' | 'none';
  };
}

export interface ThreeRoadsBlock extends BaseBlock {
  type: 'three-roads';
  data: {
    title: string;
    description1: string;
    description2: string;
    conclusion: string;
    roads: Array<{
      name: string;
      description: string;
      icon?: string;
    }>;
    backgroundImage?: string;
    visual: 'railway' | 'none';
  };
}

export interface ServicesBlock extends BaseBlock {
  type: 'services';
  data: {
    title: string;
    pillars: Array<{
      id: string;
      title: string;
      subtitle: string;
      points: string[];
      icon?: string;
      customImage?: string;
      link: string;
    }>;
    backgroundImage?: string;
  };
}

export interface HowWeWorkBlock extends BaseBlock {
  type: 'how-we-work';
  data: {
    title: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
      image?: string;
    }>;
    backgroundImage?: string;
  };
}

export interface ForTeamsBlock extends BaseBlock {
  type: 'for-teams';
  data: {
    title: string;
    intro: string;
    items: string[];
    conclusion: string;
    buttonText: string;
    backgroundImage?: string;
  };
}

export interface InsightsBlock extends BaseBlock {
  type: 'insights';
  data: {
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
    backgroundImage?: string;
  };
}

export interface TrainingsBlock extends BaseBlock {
  type: 'trainings';
  data: {
    title: string;
    items: Array<{
      title: string;
      outcome: string;
      icon?: string;
    }>;
    buttonText: string;
    backgroundImage?: string;
  };
}

export interface NewsletterBlock extends BaseBlock {
  type: 'newsletter';
  data: {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
    backgroundImage?: string;
  };
}

export interface TechletterCTABlock extends BaseBlock {
  type: 'techletter-cta';
  data: {
    description: string;
    buttonText: string;
  };
}

export interface QuoteBlock extends BaseBlock {
  type: 'quote';
  data: {
    quote: string;
    author: string;
    role?: string;
    backgroundImage?: string;
  };
}

export interface TextImageBlock extends BaseBlock {
  type: 'text-image';
  data: {
    title: string;
    content: string;
    buttonText?: string;
    buttonLink?: string;
    image?: string;
    imagePosition: 'left' | 'right';
    backgroundImage?: string;
  };
}

export interface RailwaySectionBlock extends BaseBlock {
  type: 'railway-section';
  data: {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage?: string;
  };
}

export type ContentBlock =
  | HeroBlock
  | ThreeRoadsBlock
  | ServicesBlock
  | HowWeWorkBlock
  | ForTeamsBlock
  | InsightsBlock
  | TrainingsBlock
  | NewsletterBlock
  | TechletterCTABlock
  | QuoteBlock
  | TextImageBlock
  | RailwaySectionBlock;

// Template definitions for creating new blocks
export const blockTemplates: Record<BlockType, Partial<ContentBlock>> = {
  hero: {
    type: 'hero',
    visible: true,
    data: {
      title: 'Your compelling headline here',
      subtitle: 'Supporting message that expands on the headline',
      description: 'Additional context and details about your offering',
      primaryButtonText: 'Primary Action',
      primaryButtonLink: '#section',
      secondaryButtonText: 'Secondary Action',
      secondaryButtonLink: '#section',
      visual: 'technology',
    },
  },
  'three-roads': {
    type: 'three-roads',
    visible: true,
    data: {
      title: 'Three roads. One decision point.',
      description1: 'Context about the three approaches or perspectives',
      description2: 'What these three roads represent:',
      conclusion: 'How you help navigate these paths',
      roads: [
        { name: 'Technology', description: 'Innovation and capabilities' },
        { name: 'Policy', description: 'Regulation and compliance' },
        { name: 'Society', description: 'Impact and responsibility' },
      ],
      visual: 'railway',
    },
  },
  services: {
    type: 'services',
    visible: true,
    data: {
      title: 'Services',
      pillars: [
        {
          id: '1',
          title: 'Service Title',
          subtitle: 'Brief description',
          points: ['Key point 1', 'Key point 2', 'Key point 3'],
          link: '#',
        },
      ],
    },
  },
  'how-we-work': {
    type: 'how-we-work',
    visible: true,
    data: {
      title: 'How we work',
      steps: [
        { number: '01', title: 'First Step', description: 'What happens in this phase' },
        { number: '02', title: 'Second Step', description: 'What happens in this phase' },
        { number: '03', title: 'Third Step', description: 'What happens in this phase' },
      ],
    },
  },
  'for-teams': {
    type: 'for-teams',
    visible: true,
    data: {
      title: 'For teams',
      intro: 'Introduction to this offering',
      items: [
        'Benefit or use case 1',
        'Benefit or use case 2',
        'Benefit or use case 3',
      ],
      conclusion: 'Closing thought or call to action',
      buttonText: 'Get Started',
    },
  },
  insights: {
    type: 'insights',
    visible: true,
    data: {
      title: 'Insights',
      subtitle: 'Latest thinking and analysis',
      posts: [],
    },
  },
  trainings: {
    type: 'trainings',
    visible: true,
    data: {
      title: 'Trainings',
      items: [
        { title: 'Training Topic', outcome: 'What participants will learn' },
      ],
      buttonText: 'Learn More',
    },
  },
  newsletter: {
    type: 'newsletter',
    visible: true,
    data: {
      title: 'Stay Connected',
      description: 'Subscribe to receive updates',
      placeholder: 'your@email.com',
      buttonText: 'Subscribe',
    },
  },
  'techletter-cta': {
    type: 'techletter-cta',
    visible: true,
    data: {
      description: 'Deep dives on AI governance, responsible technology, policy and literacy.',
      buttonText: 'Read Techletter',
    },
  },
  quote: {
    type: 'quote',
    visible: true,
    data: {
      quote: 'Your impactful quote or testimonial goes here',
      author: 'Author Name',
      role: 'Title, Organization',
    },
  },
  'text-image': {
    type: 'text-image',
    visible: true,
    data: {
      title: 'Section Title',
      content: 'Content describing this section in detail',
      imagePosition: 'right',
    },
  },
  'railway-section': {
    type: 'railway-section',
    visible: true,
    data: {
      title: 'Railway Framework',
      subtitle: 'Strategic decision-making',
      description: 'How we help you navigate complex intersections',
    },
  },
};

// Human-readable labels for block types
export const blockLabels: Record<BlockType, string> = {
  hero: 'Hero Section',
  'three-roads': 'Three Roads',
  services: 'Services Grid',
  'how-we-work': 'How We Work',
  'for-teams': 'For Teams',
  insights: 'Insights List',
  trainings: 'Trainings',
  newsletter: 'Newsletter Signup',
  'techletter-cta': 'Techletter CTA',
  quote: 'Quote Block',
  'text-image': 'Text + Image',
  'railway-section': 'Railway Section',
};
