import type { SiteContent } from '../../App';
import { Button } from '../Button';
import { RailwayDiagram, RailwayVisual, StepNumber } from '../visuals';
import { 
  AIStrategyMaturityIcon, 
  AIGovernanceEthicsIcon, 
  MarketPolicyResearchIcon, 
  PolicyGovernmentAffairsIcon 
} from '../Icons';
import { CrossroadsInk } from '../visuals';
import railwayDiagram from 'figma:asset/c8df7dee889ee4da0a657a14d5be51387e4d9474.png';

interface ServicesPageProps {
  content: SiteContent;
}

export function ServicesPage({ content }: ServicesPageProps) {
  const services = [
    {
      number: '1',
      title: 'AI Strategy & Maturity',
      subtitle: 'From scattered experiments to a coherent plan',
      description: 'Most organizations have pilots. Few have a strategy that connects those pilots to business value, societal impact, and long‑term positioning. STRATRI helps you understand where you truly are in your technology and AI journey through honest assessments across products, data, governance, and teams. From there, we design roadmaps that link experimentation to outcomes and define operating models so innovation does not outrun responsibility.',
      offerings: [
        'Technology and AI maturity assessments and diagnostics',
        'Roadmaps aligned with business, societal, and public value',
        'Operating models, roles, and decision rights for responsible use of technology and AI'
      ],
      icon: AIStrategyMaturityIcon
    },
    {
      number: '2',
      title: 'AI Governance, Ethics & Literacy',
      subtitle: 'Turning principles into everyday decisions',
      description: 'Governance is not a folder of PDFs. It is the set of answers people reach for when something unexpected happens. We co‑create governance frameworks that start from your values and obligations, not from a generic template. We design ethical review mechanisms that work across the full lifecycle, and build literacy programs so leaders, boards, and teams know how to act without freezing innovation.',
      offerings: [
        'Governance frameworks, policies, and processes for technology and AI',
        'Ethical guidelines and review mechanisms across the full lifecycle',
        'Literacy and capability programs for leaders, boards, and teams'
      ],
      icon: AIGovernanceEthicsIcon
    },
    {
      number: '3',
      title: 'Market & Policy Research',
      subtitle: 'Making sense of shifting landscapes',
      description: 'Technology and policy maps move quickly and rarely in sync. We bring research on technology and AI markets, trends, and use cases together with analysis of regulatory and policy developments. The output is not long reports that sit unread, but explainers, briefings, and decision papers that help you orient your next move at the crossroads.',
      offerings: [
        'Research on technology and AI markets, trends, and use cases',
        'Analysis of technology and AI policy and regulatory landscapes',
        'Reports, explainers, briefings, and policy papers'
      ],
      icon: MarketPolicyResearchIcon
    },
    {
      number: '4',
      title: 'Policy & Government Affairs',
      subtitle: 'Engaging credibly with the public arena',
      description: 'You cannot outsource your voice in debates about technology and society. We support organizations that need to engage with policymakers, regulators, standards bodies, and wider ecosystems in a way that is informed, constructive, and consistent with what they actually do. We map stakeholders, prepare you for consultations and hearings, and help align your public positions with what really happens in product and practice.',
      offerings: [
        'Advisory on technology and AI policy positioning',
        'Stakeholder mapping and engagement strategies',
        'Support for consultations, hearings, and multi‑stakeholder processes'
      ],
      icon: PolicyGovernmentAffairsIcon
    }
  ];

  const railItems = [
    {
      letter: 'R',
      title: 'Risk & Responsibility',
      description: 'Identifying, assessing and managing risks across the AI lifecycle with clear accountability.'
    },
    {
      letter: 'A',
      title: 'Alignment',
      description: 'Ensuring AI systems align with organizational values, strategic objectives, and societal interests.'
    },
    {
      letter: 'I',
      title: 'Insight & Literacy',
      description: 'Developing AI literacy across leadership and teams to make informed decisions.'
    },
    {
      letter: 'L',
      title: 'Lifecycles & Regulation',
      description: 'Managing AI across its full lifecycle while navigating the evolving regulatory landscape.'
    }
  ];

  const iconMap = {
    '1': AIStrategyMaturityIcon,
    '2': AIGovernanceEthicsIcon,
    '3': MarketPolicyResearchIcon,
    '4': PolicyGovernmentAffairsIcon
  };

  return (
    <>
      {/* Hero Band - DARK */}
      <section 
        className="py-16 sm:py-20 lg:py-24" 
        style={{ backgroundColor: '#1E2A45' }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="font-serif text-5xl sm:text-6xl font-medium mb-8 text-center tracking-tight" style={{ color: '#FEFBF8', letterSpacing: '-0.05em' }}>
            Where strategy meets the everyday
          </h1>
          <div className="space-y-4 text-lg font-sans leading-relaxed text-center" style={{ color: '#FEFBF8E6' }}>
            <p>
              We work where your technology decisions actually happen, not only where the org chart says they should.
            </p>
            <p>
              Each service tackles the same reality: technology, policy, and society are converging, and most organizations lack a coherent way to navigate all three at once. STRATRI helps you build that coherence.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section - LIGHT BACKGROUND */}
      <section 
        className="relative py-16 sm:py-20 lg:py-24 border-t" 
        style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <CrossroadsInk animate={true} className="w-full h-full" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="font-serif text-4xl sm:text-5xl font-medium mb-4 tracking-tight" 
              style={{ color: content.colors.dark, letterSpacing: '-0.05em' }}
            >
              {content.howWeWork.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {content.howWeWork.steps.map((step) => (
              <div key={step.number} className="bg-white border rounded-sm p-8" style={{ borderColor: '#E8E4DF' }}>
                <div className="w-20 h-20 mb-6">
                  <StepNumber number={step.number} className="w-full h-full" color="#184A5A" />
                </div>
                <h3 
                  className="font-serif text-2xl font-medium mb-4" 
                  style={{ color: content.colors.accent }}
                >
                  {step.title}
                </h3>
                <p 
                  className="font-sans leading-relaxed" 
                  style={{ color: `${content.colors.dark}B3` }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-18 lg:py-20 border-b" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {services.map((service) => {
              const Icon = iconMap[service.number as keyof typeof iconMap];
              // Create anchor ID from title
              const anchorId = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
              
              return (
                <div key={service.number} id={anchorId} className="scroll-mt-24">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 flex-shrink-0 transition-transform duration-300 hover:scale-110">
                      <Icon className="w-full h-full" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-serif text-3xl font-medium mb-2" style={{ color: content.colors.dark }}>
                        {service.title}
                      </h2>
                      <p 
                        className="text-lg font-medium" 
                        style={{ 
                          color: content.colors.accent,
                          fontFamily: 'IBM Plex Serif, Georgia, serif'
                        }}
                      >
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="font-sans text-base leading-relaxed mb-6" style={{ color: `${content.colors.dark}B3` }}>
                    {service.description}
                  </p>

                  <div className="pt-4 border-t" style={{ borderColor: '#E8E4DF' }}>
                    <h3 className="font-sans text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: content.colors.dark }}>
                      What we offer
                    </h3>
                    <ul className="space-y-3">
                      {service.offerings.map((offering, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 flex-shrink-0 font-serif" style={{ color: content.colors.accent }}>•</span>
                          <span className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                            {offering}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* R.A.I.L.W.A.Y. Framework Section - DARK SOCIETY BAND */}
      <section 
        id="railway"
        className="py-16 sm:py-20 lg:py-24 border-t scroll-mt-24" 
        style={{ backgroundColor: '#184A5A', borderColor: '#0F3642' }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Section Label */}
          <div className="text-center mb-6">
            <span 
              className="inline-block px-4 py-2 rounded-sm border text-xs font-sans font-semibold uppercase tracking-wider"
              style={{ 
                borderColor: '#9FB7C8',
                color: '#9FB7C8'
              }}
            >
              Our governance framework for responsible AI
            </span>
          </div>
          
          {/* Headline */}
          <h2 className="font-serif text-5xl sm:text-6xl font-medium mb-8 text-center tracking-tight" style={{ color: '#FEFBF8', letterSpacing: '-0.05em' }}>
            Structure, direction, and confidence for the AI journey
          </h2>
          
          {/* Intro */}
          <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
            <p className="font-sans text-lg leading-relaxed" style={{ color: '#FEFBF8E6' }}>
              Most governance frameworks live in documents. <strong style={{ color: '#FEFBF8' }}>R.A.I.L.W.A.Y.</strong> lives in how your organization actually works.
            </p>
            <p className="font-sans text-base leading-relaxed" style={{ color: '#FEFBF8E6' }}>
              We designed R.A.I.L.W.A.Y. after seeing the same pattern: principles without practice, or controls without strategy. Organizations needed a system that connects leadership decisions to frontline actions and adapts as regulations and risks evolve.
            </p>
            <p className="font-sans text-base leading-relaxed" style={{ color: '#FEFBF8E6' }}>
              R.A.I.L.W.A.Y. operates on two levels: a macro framework that sets strategic direction across seven phases, and a micro loop (R.A.I.L.) that embeds responsible decision‑making into everyday operations. Both are aligned with ISO/IEC 42001.
            </p>
          </div>

          {/* Railway Visual */}
          <div className="mb-20">
            <RailwayVisual className="w-full max-w-4xl mx-auto" />
          </div>

          {/* R.A.I.L.W.A.Y. Governance (macro framework) */}
          <div className="mb-16">
            <h3 className="font-serif text-3xl font-medium mb-3 text-center" style={{ color: '#FEFBF8' }}>
              R.A.I.L.W.A.Y. Governance
            </h3>
            <p className="font-sans text-base mb-8 text-center italic" style={{ color: '#9FB7C8' }}>
              Seven phases that establish strategic direction, governance structures, and accountability
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  letter: 'R',
                  title: 'Recognize',
                  description: 'What you are building, its risks and responsibilities. Build your AI inventory, identify risks, and establish accountability before you scale.'
                },
                {
                  letter: 'A',
                  title: 'Architect',
                  description: 'The strategy and alignment. Define your AI strategy in connection with organizational values and objectives. Make trade‑offs explicit.'
                },
                {
                  letter: 'I',
                  title: 'Institutionalize',
                  description: 'Policies, infrastructure, and capabilities. Create policies, allocate resources, and build the governance infrastructure that will carry decisions forward.'
                },
                {
                  letter: 'L',
                  title: 'Learn & Lift',
                  description: 'AI literacy across the organization. Train teams, build workforce confidence, and develop insight capabilities at every level.'
                },
                {
                  letter: 'W',
                  title: 'Workflows with R.A.I.L.',
                  description: 'Operational integration. Embed the R.A.I.L. Loop into daily operations so governance is not separate from work but part of it.'
                },
                {
                  letter: 'A',
                  title: 'Assess',
                  description: 'Performance, compliance, and the regulatory landscape. Monitor metrics, conduct audits, and track compliance. Know where you stand and where the rules are heading.'
                },
                {
                  letter: 'Y',
                  title: 'Yield & Adapt',
                  description: 'To the evolving AI landscape. Learn from what you measure, improve continuously, and adapt to new regulations and emerging risks.'
                }
              ].map((phase, index) => (
                <div key={`${phase.letter}-${index}`} className="border rounded-sm p-6" style={{ borderColor: '#FEFBF820', backgroundColor: '#184A5A80' }}>
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-sm"
                      style={{ backgroundColor: '#9FB7C8' }}
                    >
                      <span className="font-serif text-2xl font-medium" style={{ color: '#1E2A45' }}>
                        {phase.letter}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="font-sans text-base font-bold mb-2" style={{ color: '#FEFBF8' }}>
                        {phase.title}
                      </h4>
                      <p className="font-sans text-sm leading-relaxed" style={{ color: '#FEFBF8E6' }}>
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The R.A.I.L. Loop (micro framework) */}
          <div className="mb-16 border-t pt-16" style={{ borderColor: '#FEFBF820' }}>
            <h3 className="font-serif text-3xl font-medium mb-3 text-center" style={{ color: '#FEFBF8' }}>
              The R.A.I.L. Loop
            </h3>
            <p className="font-sans text-base mb-8 text-center italic" style={{ color: '#9FB7C8' }}>
              Four steps that bring governance into everyday decisions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                {
                  step: 'Reflect',
                  description: 'What could go wrong? Who is affected? Are there fairness or rights concerns?'
                },
                {
                  step: 'Align',
                  description: 'Check policies, classify risk level, and route for approval if needed.'
                },
                {
                  step: 'Implement',
                  description: 'Execute with human oversight, testing, monitoring, and appropriate technical controls.'
                },
                {
                  step: 'Log',
                  description: 'Document decisions, create model cards, and maintain audit trails.'
                }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <div 
                    className="w-2 h-2 mt-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#9FB7C8' }}
                  />
                  <div className="flex-1">
                    <h4 className="font-sans text-base font-bold mb-1" style={{ color: '#FEFBF8' }}>
                      {item.step}
                    </h4>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: '#FEFBF8E6' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The integration point */}
          <div className="mb-12 p-8 rounded-sm border" style={{ backgroundColor: '#0F3642', borderColor: '#FEFBF820' }}>
            <h4 className="font-sans text-lg font-bold mb-3" style={{ color: '#FEFBF8' }}>
              The integration point
            </h4>
            <p className="font-sans text-base leading-relaxed" style={{ color: '#FEFBF8E6' }}>
              The <strong style={{ color: '#FEFBF8' }}>W</strong> phase of R.A.I.L.W.A.Y. (Workflows with R.A.I.L.) is where governance strategy meets operational execution. Leadership sets direction through the macro framework, frontline teams apply it through the micro loop, and insights flow back up to inform strategy. This is how governance becomes culture, not paperwork.
            </p>
          </div>

          {/* ISO 42001 alignment */}
          <div className="text-center p-6 rounded-sm border" style={{ backgroundColor: '#0F3642', borderColor: '#FEFBF820' }}>
            <h4 className="font-sans text-base font-bold mb-2" style={{ color: '#FEFBF8' }}>
              ISO 42001 alignment
            </h4>
            <p className="font-sans text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: '#FEFBF8E6' }}>
              R.A.I.L.W.A.Y. is designed to support compliance with ISO/IEC 42001, the international standard for AI management systems. Each phase maps to specific ISO clauses, making audit preparation and certification readiness a natural outcome of implementation.
            </p>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section 
        className="py-16 sm:py-20 lg:py-24 border-t" 
        style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="font-serif text-4xl sm:text-5xl font-medium mb-6 tracking-tight" 
              style={{ color: content.colors.dark, letterSpacing: '-0.05em' }}
            >
              {content.forTeams.title}
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm p-8 lg:p-10">
            <p 
              className="font-sans text-lg leading-relaxed mb-6" 
              style={{ color: `${content.colors.dark}B3` }}
            >
              {content.forTeams.intro}
            </p>

            <ul className="space-y-4 mb-8">
              {content.forTeams.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span 
                    className="mr-3 flex-shrink-0 font-serif text-lg" 
                    style={{ color: content.colors.accent }}
                  >
                    •
                  </span>
                  <span 
                    className="font-sans leading-relaxed" 
                    style={{ color: `${content.colors.dark}B3` }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p 
              className="font-sans text-lg leading-relaxed italic" 
              style={{ color: content.colors.dark }}
            >
              {content.forTeams.conclusion}
            </p>
          </div>

          <div className="text-center mt-12">
            <Button href="/connect">{content.forTeams.buttonText}</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 border-t" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-6" style={{ color: content.colors.dark }}>
            Ready to work together?
          </h2>
          <p className="font-sans text-lg leading-relaxed mb-8" style={{ color: `${content.colors.dark}B3` }}>
            Let's discuss how <strong className="font-bold">STRATRI</strong> can help your organization navigate the intersection of <span className="font-bold italic">technology</span>, <span className="font-bold italic">society</span> and <span className="font-bold italic">policy</span>.
          </p>
          <Button href="/connect">Get in touch</Button>
        </div>
      </section>
    </>
  );
}