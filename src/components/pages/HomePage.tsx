import type { SiteContent, Language } from '../../App';
import { Button } from '../Button';
import { CrossroadsInk } from '../visuals';
import { TechnologyIcon, PolicyIcon, SocietyIcon, AIStrategyMaturityIcon, AIGovernanceEthicsIcon, MarketPolicyResearchIcon, PolicyGovernmentAffairsIcon } from '../Icons';
import { Newsletter } from '../Newsletter';
import { t, contentTranslations } from '../../utils/translations';
import { formatAllKeywords } from '../../utils/formatText';
import { StickyPageNav } from '../StickyPageNav';
import { type GovernanceSuiteItem } from '../GovernanceSuiteCard';
import { CrossroadsRisks, defaultRisks } from '../CrossroadsRisks';
import { MetricStrip, defaultMetrics } from '../MetricStrip';
import { HeroVisualization } from '../HeroVisualization';
import { OpeningStatCard } from '../OpeningStatCard';
import { GovernanceGapStat } from '../GovernanceGapStat';
import { StakesStat } from '../StakesStat';
import { CTASection } from '../CTASection';

interface HomePageProps {
  content: SiteContent;
  language: Language;
  techletterPosts: any[];
  isLoadingTechletter: boolean;
}

export function HomePage({ content, language, techletterPosts, isLoadingTechletter }: HomePageProps) {
  // Prepare Governance Suite items from services
  const governanceSuiteItems: GovernanceSuiteItem[] = content.services.pillars.map((pillar) => ({
    id: pillar.id,
    title: pillar.title,
    subtitle: pillar.subtitle,
    offerings: pillar.points,
    bestFor: getBestForText(pillar.id),
    link: pillar.link,
  }));

  // Sticky nav sections
  const navSections = [
    { id: 'overview', label: 'Overview', elementId: 'hero-section' },
    { id: 'services', label: 'Services', elementId: 'services-section' },
    { id: 'contact', label: 'Contact', elementId: 'newsletter-section' },
  ];

  return (
    <>
      {/* Sticky Page Navigation */}
      <StickyPageNav
        sections={navSections}
        colors={content.colors}
        offset={100}
        showThreshold={400}
      />

      {/* Hero Section */}
      <section 
        id="hero-section"
        className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 overflow-hidden" 
        style={{ backgroundColor: content.colors.cream }}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <CrossroadsInk animate={true} className="w-full h-full" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-12 lg:gap-8 items-center">
            {/* Left: Text Content */}
            <div className="lg:pl-0">
              <h1 
                className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light mb-6 leading-tight lg:max-w-[95%] tracking-tight" 
                style={{ color: content.colors.dark, letterSpacing: '-0.05em' }}
              >
                {t(contentTranslations.hero.title, language)
                  .split(' ')
                  .map((word, index) => {
                    const cleanWord = word.toLowerCase().replace(/[.,!?;:]/g, '');
                    if (['technology', 'policy', 'society'].includes(cleanWord)) {
                      return (
                        <span key={index} className="font-bold italic text-[68px]">
                          {word}{' '}
                        </span>
                      );
                    }
                    return word + ' ';
                  })}
              </h1>
              <p 
                className="text-lg sm:text-xl leading-snug mb-8" 
                style={{ 
                  color: content.colors.dark,
                  fontFamily: 'IBM Plex Serif, Georgia, serif'
                }}
              >
                {formatAllKeywords(t(contentTranslations.hero.subtitle, language))}
              </p>
              <div className="space-y-3 mb-10 max-w-2xl">
                {t(contentTranslations.hero.description, language).split('\\n\\n').map((paragraph, index) => (
                  <p 
                    key={index}
                    className="text-base leading-relaxed" 
                    style={{ color: `${content.colors.dark}CC` }}
                  >
                    {formatAllKeywords(paragraph)}
                  </p>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#services-section">
                  {t(contentTranslations.hero.primaryButtonText, language)}
                </Button>
                <Button variant="outline" href="/connect">
                  {t(contentTranslations.hero.secondaryButtonText, language)}
                </Button>
              </div>
            </div>

            {/* Right: Dynamic Visualization */}
            <div className="hidden lg:block">
              <HeroVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* Three Roads Section */}
      <section 
        id="three-roads-section" 
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" 
        style={{ backgroundColor: content.colors.cream }}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <CrossroadsInk animate={true} className="w-full h-full" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="font-serif text-4xl sm:text-5xl font-light mb-6 tracking-tight" 
              style={{ color: content.colors.dark, letterSpacing: '-0.05em' }}
            >
              Three roads. <span className="font-bold italic">Strategy</span> in motion.
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p 
                className="text-lg font-sans leading-relaxed" 
                style={{ color: `${content.colors.dark}B3` }}
              >
                {t(contentTranslations.threeRoads.description1, language)}
              </p>
              <p 
                className="text-lg font-sans leading-relaxed" 
                style={{ color: `${content.colors.dark}B3` }}
              >
                {t(contentTranslations.threeRoads.description2, language)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <TechnologyIcon className="w-full h-full" />
              </div>
              <h3 
                className="font-sans text-lg font-semibold mb-2" 
                style={{ color: content.colors.dark }}
              >
                {t(contentTranslations.threeRoads.roads.technology.name, language)}
              </h3>
              <p 
                className="font-sans text-sm" 
                style={{ color: `${content.colors.dark}B3` }}
              >
                {t(contentTranslations.threeRoads.roads.technology.description, language)}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <PolicyIcon className="w-full h-full" />
              </div>
              <h3 
                className="font-sans text-lg font-semibold mb-2" 
                style={{ color: content.colors.dark }}
              >
                {t(contentTranslations.threeRoads.roads.policy.name, language)}
              </h3>
              <p 
                className="font-sans text-sm" 
                style={{ color: `${content.colors.dark}B3` }}
              >
                {t(contentTranslations.threeRoads.roads.policy.description, language)}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                <SocietyIcon className="w-full h-full" />
              </div>
              <h3 
                className="font-sans text-lg font-semibold mb-2" 
                style={{ color: content.colors.dark }}
              >
                {t(contentTranslations.threeRoads.roads.society.name, language)}
              </h3>
              <p 
                className="font-sans text-sm" 
                style={{ color: `${content.colors.dark}B3` }}
              >
                {t(contentTranslations.threeRoads.roads.society.description, language)}
              </p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p 
              className="text-lg font-sans leading-relaxed" 
              style={{ color: `${content.colors.dark}B3` }}
            >
              {t(contentTranslations.threeRoads.conclusion, language)}
            </p>
          </div>
        </div>
      </section>

      {/* Opening Stat Card - NEW */}
      <OpeningStatCard colors={content.colors} />

      {/* Crossroads Risks Section */}
      <CrossroadsRisks
        risks={defaultRisks}
        colors={content.colors}
        onRiskClick={(risk) => {
          console.log('Risk clicked:', risk);
          // Scroll to services section
          document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Governance Gap Stat - NEW */}
      <GovernanceGapStat colors={content.colors} />

      {/* Governance Suite (Services) Section - "How STRATRI works" */}
      <section 
        id="services-section"
        className="py-16 sm:py-20 lg:py-24 border-t" 
        style={{ 
          backgroundColor: content.colors.cream,
          borderColor: '#E8E4DF',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="font-serif text-4xl sm:text-5xl font-light mb-6 tracking-tight" 
              style={{ color: content.colors.dark, letterSpacing: '-0.05em' }}
            >
              How <span className="font-bold italic">STRATRI</span> works
            </h2>
            <p 
              className="text-lg font-sans max-w-3xl mx-auto" 
              style={{ color: `${content.colors.dark}B3` }}
            >
              We help you move forward without leaving policy, people, or principles behind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {governanceSuiteItems.map((item) => {
              const IconComponent = item.id === '1' ? AIStrategyMaturityIcon :
                                   item.id === '2' ? AIGovernanceEthicsIcon :
                                   item.id === '3' ? MarketPolicyResearchIcon :
                                   PolicyGovernmentAffairsIcon;
              return (
                <div 
                  key={item.id} 
                  className="bg-white border rounded-sm p-6 transition-all duration-200 hover:shadow-md"
                  style={{ borderColor: '#E8E4DF' }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 flex-shrink-0">
                      <IconComponent className="w-full h-full" />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="font-serif text-xl font-medium mb-1" 
                        style={{ color: content.colors.dark }}
                      >
                        {item.title}
                      </h3>
                      <p 
                        className="font-sans text-sm" 
                        style={{ color: content.colors.accent }}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button href="/services">Explore all services</Button>
          </div>
        </div>
      </section>

      {/* Stakes Stat - NEW */}
      <StakesStat colors={content.colors} />

      {/* Metric Strip - NEW */}
      <MetricStrip
        metrics={defaultMetrics}
        colors={content.colors}
        title="By the numbers"
        subtitle="Impact across governance, policy, and literacy"
      />

      {/* For Teams Section - Compact Version */}
      <section 
        className="py-12 sm:py-14 lg:py-16 border-t" 
        style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 
              className="font-serif text-3xl sm:text-4xl font-medium mb-4 tracking-tight" 
              style={{ color: content.colors.dark, letterSpacing: '-0.05em' }}
            >
              For teams who cannot afford "wait and see"
            </h2>
            <p 
              className="font-sans text-base leading-relaxed max-w-3xl mx-auto" 
              style={{ color: `${content.colors.dark}B3` }}
            >
              STRATRI works with organizations that move at the intersection of innovation, rules, and public expectation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              'Technology companies',
              'Retail technologies',
              'Industrial & manufacturing',
              'AI companies',
              'Fintech',
              'Ecommerce',
              'Healthtech',
              'Crypto',
              'Venture investors',
              'Public institutions',
              'Civil society actors'
            ].map((tag, index) => (
              <span 
                key={index}
                className="inline-block px-4 py-2 border rounded-sm text-sm font-sans"
                style={{ 
                  borderColor: content.colors.accent,
                  color: content.colors.accent,
                  backgroundColor: 'white'
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p 
            className="font-sans text-base leading-relaxed text-center italic max-w-2xl mx-auto" 
            style={{ color: content.colors.dark }}
          >
            If you sit somewhere between "we cannot ship this" and "we cannot stop now", you are in the right place.
          </p>
        </div>
      </section>

      {/* CTA Section - NEW */}
      <CTASection 
        colors={content.colors}
        substackUrl="https://www.techletter.co"
      />
    </>
  );
}

// Helper function to generate "Best for" text for each service
function getBestForText(serviceId: string): string {
  const bestForMap: Record<string, string> = {
    '1': 'Organizations with multiple AI pilots and no shared governance route.',
    '2': 'Teams needing to embed ethical principles into everyday AI decisions.',
    '3': 'Organizations navigating rapidly shifting technology markets and regulations.',
    '4': 'Companies engaging with policymakers, regulators, and standards bodies.',
  };
  return bestForMap[serviceId] || '';
}