import { 
  ContentBlock, 
  HeroBlock, 
  ThreeRoadsBlock, 
  ServicesBlock,
  HowWeWorkBlock,
  ForTeamsBlock,
  InsightsBlock,
  TrainingsBlock,
  NewsletterBlock,
  TechletterCTABlock,
  QuoteBlock,
  TextImageBlock,
  RailwaySectionBlock
} from '../types/blocks';
import { TechnologyIcon, PolicyIcon, SocietyIcon, StrategyIcon, GovernanceIcon, ResearchIcon, PolicyAffairsIcon } from './Icons';
import { Button } from './Button';
import { PillarCard, InsightCard } from './Card';
import { Newsletter } from './Newsletter';
import { TechnologyInk, PolicyInk, SocietyInk, RailwayInk, InsightsInk } from './visuals';
import techletterLogo from 'figma:asset/d0e6a56470d6f5b4bd19d622f3fe45ba59c67a2f.png';

interface BlockRendererProps {
  blocks: ContentBlock[];
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
}

export function BlockRenderer({ blocks, colors }: BlockRendererProps) {
  const getIconComponent = (iconName: string = 'strategy') => {
    const icons: any = {
      technology: TechnologyIcon,
      policy: PolicyIcon,
      society: SocietyIcon,
      strategy: StrategyIcon,
      governance: GovernanceIcon,
      research: ResearchIcon,
      policyAffairs: PolicyAffairsIcon,
    };
    const IconComponent = icons[iconName] || StrategyIcon;
    return <IconComponent className="w-full h-full" />;
  };

  const getVisualComponent = (visualType: string) => {
    const visuals: any = {
      technology: TechnologyInk,
      policy: PolicyInk,
      society: SocietyInk,
      railway: RailwayInk,
      insights: InsightsInk,
    };
    return visuals[visualType] || null;
  };

  // Filter out hidden blocks and sort by order
  const visibleBlocks = blocks
    .filter(block => block.visible)
    .sort((a, b) => a.order - b.order);

  return (
    <>
      {visibleBlocks.map((block) => {
        switch (block.type) {
          case 'hero':
            return <HeroBlockRenderer key={block.id} block={block as HeroBlock} colors={colors} getVisualComponent={getVisualComponent} />;
          case 'three-roads':
            return <ThreeRoadsBlockRenderer key={block.id} block={block as ThreeRoadsBlock} colors={colors} getVisualComponent={getVisualComponent} />;
          case 'services':
            return <ServicesBlockRenderer key={block.id} block={block as ServicesBlock} colors={colors} getIconComponent={getIconComponent} />;
          case 'how-we-work':
            return <HowWeWorkBlockRenderer key={block.id} block={block as HowWeWorkBlock} colors={colors} />;
          case 'for-teams':
            return <ForTeamsBlockRenderer key={block.id} block={block as ForTeamsBlock} colors={colors} />;
          case 'insights':
            return <InsightsBlockRenderer key={block.id} block={block as InsightsBlock} colors={colors} />;
          case 'trainings':
            return <TrainingsBlockRenderer key={block.id} block={block as TrainingsBlock} colors={colors} />;
          case 'newsletter':
            return <NewsletterBlockRenderer key={block.id} block={block as NewsletterBlock} colors={colors} />;
          case 'techletter-cta':
            return <TechletterCTABlockRenderer key={block.id} block={block as TechletterCTABlock} colors={colors} />;
          case 'quote':
            return <QuoteBlockRenderer key={block.id} block={block as QuoteBlock} colors={colors} />;
          case 'text-image':
            return <TextImageBlockRenderer key={block.id} block={block as TextImageBlock} colors={colors} />;
          case 'railway-section':
            return <RailwaySectionBlockRenderer key={block.id} block={block as RailwaySectionBlock} colors={colors} />;
          default:
            return null;
        }
      })}
    </>
  );
}

// Individual block renderers

function HeroBlockRenderer({ block, colors, getVisualComponent }: any) {
  const VisualComponent = block.data.visual !== 'none' ? getVisualComponent(block.data.visual) : null;

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: colors.cream }}>
      {VisualComponent && !block.data.backgroundImage && (
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <VisualComponent animate={true} className="w-full h-full" />
        </div>
      )}
      {block.data.backgroundImage && (
        <div className="absolute inset-0" style={{ backgroundImage: `url(${block.data.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      )}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium mb-8 leading-tight" style={{ color: block.data.backgroundImage ? '#fff' : colors.dark }}>
            {block.data.title}
          </h1>
          <p className="text-xl font-sans mb-6 leading-relaxed" style={{ color: block.data.backgroundImage ? '#fff' : `${colors.dark}B3` }}>
            {block.data.subtitle}
          </p>
          <p className="text-lg font-sans mb-12 leading-relaxed max-w-2xl" style={{ color: block.data.backgroundImage ? 'rgba(255,255,255,0.9)' : `${colors.dark}B3` }}>
            {block.data.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={block.data.primaryButtonLink}>{block.data.primaryButtonText}</Button>
            <Button variant="outline" href={block.data.secondaryButtonLink}>{block.data.secondaryButtonText}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThreeRoadsBlockRenderer({ block, colors, getVisualComponent }: any) {
  const VisualComponent = block.data.visual !== 'none' ? getVisualComponent(block.data.visual) : null;

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: colors.cream }}>
      {VisualComponent && !block.data.backgroundImage && (
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <VisualComponent animate={true} className="w-full h-full" />
        </div>
      )}
      {block.data.backgroundImage && (
        <div className="absolute inset-0" style={{ backgroundImage: `url(${block.data.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      )}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-6" style={{ color: colors.dark }}>{block.data.title}</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg font-sans leading-relaxed" style={{ color: `${colors.dark}B3` }}>{block.data.description1}</p>
            <p className="text-lg font-sans leading-relaxed" style={{ color: `${colors.dark}B3` }}>{block.data.description2}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {block.data.roads.map((road: any, index: number) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                {road.icon ? (
                  <img src={road.icon} alt={road.name} className="w-full h-full object-contain" />
                ) : (
                  <>
                    {index === 0 && <TechnologyIcon className="w-full h-full" />}
                    {index === 1 && <PolicyIcon className="w-full h-full" />}
                    {index === 2 && <SocietyIcon className="w-full h-full" />}
                  </>
                )}
              </div>
              <h3 className="font-sans text-lg font-semibold mb-2" style={{ color: colors.dark }}>{road.name}</h3>
              <p className="font-sans text-sm" style={{ color: `${colors.dark}B3` }}>{road.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg font-sans leading-relaxed" style={{ color: `${colors.dark}B3` }}>{block.data.conclusion}</p>
        </div>
      </div>
    </section>
  );
}

function ServicesBlockRenderer({ block, colors, getIconComponent }: any) {
  return (
    <section className="py-24" style={{ backgroundColor: colors.cream, backgroundImage: block.data.backgroundImage ? `url(${block.data.backgroundImage})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-6" style={{ color: colors.dark }}>{block.data.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {block.data.pillars.map((pillar: any) => (
            <PillarCard
              key={pillar.id}
              title={pillar.title}
              subtitle={pillar.subtitle}
              icon={pillar.customImage ? <img src={pillar.customImage} alt={pillar.title} className="w-full h-full object-contain" /> : getIconComponent(pillar.icon || 'strategy')}
              points={pillar.points}
              link={pillar.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWorkBlockRenderer({ block, colors }: any) {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: colors.cream, backgroundImage: block.data.backgroundImage ? `url(${block.data.backgroundImage})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-4" style={{ color: colors.dark }}>{block.data.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {block.data.steps.map((step: any) => (
            <div key={step.number}>
              {step.image && (
                <div className="mb-6 rounded-sm overflow-hidden">
                  <img src={step.image} alt={step.title} className="w-full h-40 object-cover" />
                </div>
              )}
              <div className="w-16 h-16 rounded-sm flex items-center justify-center font-serif text-2xl font-medium text-white mb-6" style={{ backgroundColor: colors.accent }}>
                {step.number}
              </div>
              <h3 className="font-serif text-2xl font-medium mb-4" style={{ color: colors.accent }}>{step.title}</h3>
              <p className="font-sans leading-relaxed" style={{ color: `${colors.dark}B3` }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForTeamsBlockRenderer({ block, colors }: any) {
  return (
    <section className="py-24" style={{ backgroundColor: colors.cream, backgroundImage: block.data.backgroundImage ? `url(${block.data.backgroundImage})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-6" style={{ color: colors.dark }}>{block.data.title}</h2>
        </div>
        <div className="bg-white border border-gray-200 rounded-sm p-8 lg:p-10">
          <p className="font-sans text-lg leading-relaxed mb-6" style={{ color: `${colors.dark}B3` }}>{block.data.intro}</p>
          <ul className="space-y-4 mb-8">
            {block.data.items.map((item: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 flex-shrink-0 font-serif text-lg" style={{ color: colors.accent }}>•</span>
                <span className="font-sans leading-relaxed" style={{ color: `${colors.dark}B3` }}>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-sans text-lg leading-relaxed italic" style={{ color: colors.dark }}>{block.data.conclusion}</p>
        </div>
        {block.data.buttonText && (
          <div className="text-center mt-12">
            <Button href="#connect">{block.data.buttonText}</Button>
          </div>
        )}
      </div>
    </section>
  );
}

function InsightsBlockRenderer({ block, colors }: any) {
  return (
    <section className="py-24" style={{ backgroundColor: colors.cream, backgroundImage: block.data.backgroundImage ? `url(${block.data.backgroundImage})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-3" style={{ color: colors.dark }}>{block.data.title}</h2>
          <p className="font-sans text-lg" style={{ color: `${colors.dark}B3` }}>{block.data.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {block.data.posts.map((post: any) => (
            <InsightCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainingsBlockRenderer({ block, colors }: any) {
  return (
    <section className="py-24" style={{ backgroundColor: colors.cream, backgroundImage: block.data.backgroundImage ? `url(${block.data.backgroundImage})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-12 text-center uppercase" style={{ color: colors.dark }}>{block.data.title}</h2>
          <div className="rounded-sm p-10 border mb-8" style={{ backgroundColor: colors.cream, borderColor: '#E8E4DF' }}>
            <div className="space-y-8">
              {block.data.items.map((training: any, index: number) => (
                <div key={index} className="pb-8 last:pb-0 border-b last:border-b-0" style={{ borderColor: '#E8E4DF' }}>
                  {training.icon && (
                    <div className="mb-4">
                      <img src={training.icon} alt={training.title} className="w-12 h-12 object-contain" />
                    </div>
                  )}
                  <h3 className="font-serif text-xl font-medium mb-3" style={{ color: colors.dark }}>{training.title}</h3>
                  <p className="font-sans leading-relaxed" style={{ color: `${colors.dark}B3` }}>{training.outcome}</p>
                </div>
              ))}
            </div>
          </div>
          {block.data.buttonText && (
            <div className="text-center">
              <Button variant="outline" href="#connect">{block.data.buttonText}</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function NewsletterBlockRenderer({ block, colors }: any) {
  return (
    <section className="py-24" style={{ backgroundColor: colors.cream, backgroundImage: block.data.backgroundImage ? `url(${block.data.backgroundImage})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Newsletter title={block.data.title} description={block.data.description} placeholder={block.data.placeholder} buttonText={block.data.buttonText} />
      </div>
    </section>
  );
}

function TechletterCTABlockRenderer({ block, colors }: any) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-sm p-10 text-white flex flex-col justify-between" style={{ backgroundColor: colors.dark }}>
          <div>
            <div className="mb-8">
              <img src={techletterLogo} alt="Techletter" className="h-10 object-contain" />
            </div>
            <p className="font-sans text-base leading-relaxed mb-6" style={{ color: 'rgba(254, 251, 248, 0.85)' }}>
              {block.data.description}
            </p>
          </div>
          <div className="pt-4">
            <a href="https://techletter.co" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-6 py-3 rounded-sm font-sans font-medium transition-all duration-200 hover:scale-[1.02]" style={{ backgroundColor: colors.cream, color: colors.dark }}>
              {block.data.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteBlockRenderer({ block, colors }: any) {
  return (
    <section className="py-24" style={{ backgroundColor: colors.cream, backgroundImage: block.data.backgroundImage ? `url(${block.data.backgroundImage})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <blockquote className="text-center">
          <p className="font-serif text-3xl sm:text-4xl font-medium mb-8 italic leading-relaxed" style={{ color: colors.dark }}>
            "{block.data.quote}"
          </p>
          <footer>
            <p className="font-sans font-medium text-lg" style={{ color: colors.accent }}>{block.data.author}</p>
            {block.data.role && (
              <p className="font-sans text-sm mt-1" style={{ color: `${colors.dark}80` }}>{block.data.role}</p>
            )}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

function TextImageBlockRenderer({ block, colors }: any) {
  return (
    <section className="py-24" style={{ backgroundColor: colors.cream, backgroundImage: block.data.backgroundImage ? `url(${block.data.backgroundImage})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${block.data.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
          <div className={block.data.imagePosition === 'left' ? 'lg:order-2' : ''}>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-6" style={{ color: colors.dark }}>{block.data.title}</h2>
            <p className="font-sans text-lg leading-relaxed mb-8" style={{ color: `${colors.dark}B3` }}>{block.data.content}</p>
            {block.data.buttonText && block.data.buttonLink && (
              <Button href={block.data.buttonLink}>{block.data.buttonText}</Button>
            )}
          </div>
          <div className={block.data.imagePosition === 'left' ? 'lg:order-1' : ''}>
            {block.data.image && (
              <img src={block.data.image} alt={block.data.title} className="w-full h-auto rounded-sm" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function RailwaySectionBlockRenderer({ block, colors }: any) {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: colors.cream, backgroundImage: block.data.backgroundImage ? `url(${block.data.backgroundImage})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <RailwayInk animate={true} className="w-full h-full" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-6" style={{ color: colors.dark }}>{block.data.title}</h2>
        <p className="font-serif text-2xl italic mb-6" style={{ color: colors.accent }}>{block.data.subtitle}</p>
        <p className="font-sans text-lg leading-relaxed" style={{ color: `${colors.dark}B3` }}>{block.data.description}</p>
      </div>
    </section>
  );
}