import { useState } from 'react';
import { Menu, X, BookOpen, Linkedin, Mail } from 'lucide-react';
import type { SiteContent } from '../App';
import { TechnologyIcon, PolicyIcon, SocietyIcon, StrategyIcon, GovernanceIcon, ResearchIcon, PolicyAffairsIcon } from './Icons';
import { Button } from './Button';
import { PillarCard, InsightCard } from './Card';
import { Newsletter } from './Newsletter';

interface WebsitePreviewProps {
  content: SiteContent;
}

export function WebsitePreview({ content }: WebsitePreviewProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const getIconComponent = (iconName: string) => {
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

  const currentYear = new Date().getFullYear();

  // Apply brand colors as CSS variables
  const style = {
    '--color-cream': content.colors.cream,
    '--color-dark': content.colors.dark,
    '--color-accent': content.colors.accent,
    '--color-light': content.colors.light,
  } as React.CSSProperties;

  return (
    <div className="min-h-screen" style={style}>
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
        className="sticky top-0 z-50 backdrop-blur-sm border-b"
        style={{ 
          backgroundColor: `${content.colors.cream}F5`,
          borderColor: '#E8E4DF'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a 
              href="/" 
              className="font-serif text-2xl font-medium tracking-wider uppercase"
              style={{ color: content.colors.dark }}
            >
              {content.settings.logoText}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {content.navigation.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  onClick={() => setActiveLink(link.path)}
                  className={`text-sm font-sans font-normal transition-colors duration-200`}
                  style={{
                    color: activeLink === link.path ? content.colors.accent : content.colors.dark,
                    fontWeight: activeLink === link.path ? 500 : 400,
                  }}
                >
                  {link.name}
                </a>
              ))}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t" style={{ borderColor: '#E8E4DF', backgroundColor: 'white' }}>
            <div className="px-6 py-6 space-y-4">
              {content.navigation.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  onClick={() => {
                    setActiveLink(link.path);
                    setIsMenuOpen(false);
                  }}
                  className="block py-2 text-base font-sans transition-colors"
                  style={{
                    color: activeLink === link.path ? content.colors.accent : content.colors.dark,
                    fontWeight: activeLink === link.path ? 500 : 400,
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: content.colors.cream }}>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium mb-8 leading-tight" style={{ color: content.colors.dark }}>
                {content.hero.title}
              </h1>
              <p className="text-xl font-sans mb-6 leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                {content.hero.subtitle}
              </p>
              <p className="text-lg font-sans mb-12 leading-relaxed max-w-2xl" style={{ color: `${content.colors.dark}B3` }}>
                {content.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={content.hero.primaryButtonLink}>{content.hero.primaryButtonText}</Button>
                <Button variant="outline" href={content.hero.secondaryButtonLink}>
                  {content.hero.secondaryButtonText}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Three Roads Section */}
        <section className="py-24" style={{ background: `linear-gradient(to bottom, white, ${content.colors.light}0D)` }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-6" style={{ color: content.colors.dark }}>
                {content.threeRoads.title}
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-lg font-sans leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                  {content.threeRoads.description1}
                </p>
                <p className="text-lg font-sans leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                  {content.threeRoads.description2}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {content.threeRoads.roads.map((road, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    {index === 0 && <TechnologyIcon className="w-full h-full" />}
                    {index === 1 && <PolicyIcon className="w-full h-full" />}
                    {index === 2 && <SocietyIcon className="w-full h-full" />}
                  </div>
                  <h3 className="font-sans text-lg font-semibold mb-2" style={{ color: content.colors.dark }}>
                    {road.name}
                  </h3>
                  <p className="font-sans text-sm" style={{ color: `${content.colors.dark}B3` }}>
                    {road.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg font-sans leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                {content.threeRoads.conclusion}
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="what-we-do" className="py-24" style={{ backgroundColor: content.colors.cream }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-6" style={{ color: content.colors.dark }}>
                {content.services.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {content.services.pillars.map((pillar) => (
                <PillarCard
                  key={pillar.id}
                  title={pillar.title}
                  subtitle={pillar.subtitle}
                  icon={getIconComponent(pillar.icon)}
                  points={pillar.points}
                  link={pillar.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section id="how-we-work" className="relative py-24 overflow-hidden" style={{ background: `linear-gradient(to bottom, ${content.colors.light}0D, white)` }}>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-4" style={{ color: content.colors.dark }}>
                {content.howWeWork.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {content.howWeWork.steps.map((step) => (
                <div key={step.number}>
                  <div 
                    className="w-16 h-16 rounded-sm flex items-center justify-center font-serif text-2xl font-medium text-white mb-6"
                    style={{ backgroundColor: content.colors.accent }}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-serif text-2xl font-medium mb-4" style={{ color: content.colors.accent }}>
                    {step.title}
                  </h3>
                  <p className="font-sans leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Teams Section */}
        <section className="py-24" style={{ backgroundColor: `${content.colors.light}1A` }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-6" style={{ color: content.colors.dark }}>
                {content.forTeams.title}
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-sm p-8 lg:p-10">
              <p className="font-sans text-lg leading-relaxed mb-6" style={{ color: `${content.colors.dark}B3` }}>
                {content.forTeams.intro}
              </p>
              <ul className="space-y-4 mb-8">
                {content.forTeams.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 flex-shrink-0 font-serif text-lg" style={{ color: content.colors.accent }}>•</span>
                    <span className="font-sans leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-lg leading-relaxed italic" style={{ color: content.colors.dark }}>
                {content.forTeams.conclusion}
              </p>
            </div>
            <div className="text-center mt-12">
              <Button href="#connect">{content.forTeams.buttonText}</Button>
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="py-24" style={{ backgroundColor: content.colors.cream }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-3" style={{ color: content.colors.dark }}>
                {content.insights.title}
              </h2>
              <p className="font-sans text-lg" style={{ color: `${content.colors.dark}B3` }}>
                {content.insights.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {content.insights.posts.map((post) => (
                <InsightCard
                  key={post.id}
                  title={post.title}
                  summary={post.summary}
                  category={post.category}
                  date={post.date}
                  slug={post.slug}
                  readingTime={post.readingTime}
                  illustrationType={post.illustrationType}
                />
              ))}

              <div className="rounded-sm p-10 text-white flex flex-col justify-between" style={{ backgroundColor: content.colors.dark }}>
                <div>
                  <div className="mb-6">
                    <BookOpen size={32} style={{ color: content.colors.light }} />
                  </div>
                  <h3 className="font-serif text-2xl font-medium mb-4">Techletter</h3>
                  <p className="font-sans text-white/80 leading-relaxed mb-6">
                    Stratri's newsletter on AI governance, responsible technology, policy and literacy. Deep dives delivered to your inbox.
                  </p>
                </div>
                <div className="pt-4">
                  <Button href="#insights" className="bg-white hover:bg-gray-100" style={{ color: content.colors.dark }}>
                    Read Techletter
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button variant="outline" href="#insights">View all insights</Button>
            </div>
          </div>
        </section>

        {/* Trainings Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl sm:text-5xl font-medium mb-12 text-center uppercase" style={{ color: content.colors.dark }}>
                {content.trainings.title}
              </h2>
              <div className="rounded-sm p-10 border mb-8" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
                <div className="space-y-8">
                  {content.trainings.items.map((training, index) => (
                    <div key={index} className="pb-8 last:pb-0 border-b last:border-b-0" style={{ borderColor: '#E8E4DF' }}>
                      <h3 className="font-serif text-xl font-medium mb-3" style={{ color: content.colors.dark }}>
                        {training.title}
                      </h3>
                      <p className="font-sans leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                        {training.outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <Button variant="outline" href="#governance">
                  {content.trainings.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24" style={{ backgroundColor: content.colors.cream }}>
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <Newsletter 
              title={content.newsletter.title}
              description={content.newsletter.description}
              placeholder={content.newsletter.placeholder}
              buttonText={content.newsletter.buttonText}
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: content.colors.cream }}>
        <div className="border-t" style={{ borderColor: '#E8E4DF80' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <h3 className="font-serif text-2xl font-medium mb-6 uppercase tracking-wider" style={{ color: content.colors.dark }}>
                  {content.settings.siteName}
                </h3>
                <p className="text-sm leading-relaxed font-sans mb-8" style={{ color: `${content.colors.dark}B3` }}>
                  {content.settings.tagline}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={content.settings.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200"
                    style={{ 
                      borderColor: '#E8E4DF',
                      color: content.colors.dark 
                    }}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${content.settings.email}`}
                    className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200"
                    style={{ 
                      borderColor: '#E8E4DF',
                      color: content.colors.dark 
                    }}
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t" style={{ borderColor: '#E8E4DF80' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-xs font-sans" style={{ color: `${content.colors.dark}80` }}>
                  © {currentYear} {content.settings.siteName}. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
