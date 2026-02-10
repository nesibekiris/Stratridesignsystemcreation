import type { SiteContent } from '../../App';
import { Button } from '../Button';
import { 
  ConvergingPaths, 
  TriviumDiagram, 
  GovernanceRails,
  NetworkIcon,
  ShieldIcon,
  LensIcon,
  BookIcon
} from '../visuals';

interface AboutPageProps {
  content: SiteContent;
}

export function AboutPage({ content }: AboutPageProps) {
  const principles = [
    {
      title: 'Technology, Society, Policy',
      description: 'We work where these three forces converge. Sustainable technology strategy means navigating technical capability, societal impact, and policy constraints with equal rigor. None of them can be an afterthought.',
      icon: NetworkIcon
    },
    {
      title: 'Governance as strategy',
      description: 'Responsible technology governance is not a compliance burden. It is a strategic advantage. Organizations that govern well move faster, with greater confidence and fewer surprises.',
      icon: ShieldIcon
    },
    {
      title: 'Depth over hype',
      description: 'We prioritize nuance and long-term thinking over trends and buzzwords. Turning complexity into clarity requires deep understanding, not shallow excitement.',
      icon: LensIcon
    },
    {
      title: 'Literacy as foundation',
      description: 'Technology literacy is how leaders and teams gain real agency. Without shared understanding across the organization, there is no meaningful governance, no clear accountability, and no strategic clarity.',
      icon: BookIcon
    }
  ];

  return (
    <>
      {/* Section 1 - Who We Are */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: content.colors.cream }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div>
              <h1 className="font-serif text-5xl sm:text-6xl font-medium mb-6 tracking-tight" style={{ color: content.colors.dark, letterSpacing: '-0.05em' }}>
                Who We Are
              </h1>
              <p className="font-serif text-2xl italic mb-6" style={{ color: content.colors.accent }}>
                Strategy at the intersection
              </p>
              <p className="font-sans text-lg leading-relaxed mb-4" style={{ color: `${content.colors.dark}B3` }}>
                <strong className="font-bold">STRATRI</strong> is a governance and technology policy studio built on a simple belief: governance belongs at the center of strategy, not at the edges of compliance.
              </p>
              <p className="font-sans text-lg leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                The name brings together "strategy" and a triadic way of thinking. We look at every problem through the coordinated movement of three forces: Technology, Society, and Policy.
              </p>
            </div>
            
            {/* Visual */}
            <div className="flex items-center justify-center">
              <ConvergingPaths className="w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - The Trivium */}
      <section className="py-16 sm:py-20 lg:py-24 border-t" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual (on left) */}
            <div className="flex items-center justify-center lg:order-1">
              <TriviumDiagram className="w-full max-w-sm" />
            </div>
            
            {/* Copy (on right) */}
            <div className="lg:order-2">
              <h2 className="font-serif text-4xl font-medium mb-6" style={{ color: content.colors.dark }}>
                The Trivium
              </h2>
              <p className="font-sans text-lg leading-relaxed mb-4" style={{ color: `${content.colors.dark}B3` }}>
                At the core of <strong className="font-bold">STRATRI</strong> is a three-pillar lens. We see Technology, Society, and Policy not as three separate checklists, but as a trivium: three intersecting paths that shape how technology is imagined, built, and governed.
              </p>
              <p className="font-sans text-lg leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                Like the classical trivium in education (grammar, logic, rhetoric) that structured how people learned to think, our trivium structures how organizations learn to govern technology. The point is not to pick one road. It is to design the relationship between all three.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Why STRATRI Exists - DARK POLICY BAND */}
      <section className="py-16 sm:py-20 lg:py-24 border-t" style={{ backgroundColor: '#1E2A45', borderColor: '#14202F' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Optional "Why now" badge */}
          <div className="text-center mb-6">
            <span 
              className="inline-block px-3 py-1 rounded-sm text-xs font-sans font-semibold uppercase tracking-wider"
              style={{ 
                backgroundColor: '#9FB7C820',
                color: '#9FB7C8',
                border: '1px solid #9FB7C8'
              }}
            >
              Why now
            </span>
          </div>
          
          <h2 className="font-serif text-4xl font-medium mb-6 text-center" style={{ color: '#FEFBF8' }}>
            Why <strong className="font-bold">STRATRI</strong> Exists
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Copy (on left) */}
            <div className="space-y-6">
              <p className="font-sans text-lg leading-relaxed" style={{ color: '#FEFBF8E6' }}>
                Most organizations experience these forces as tension: innovation vs. regulation, scale vs. risk, speed vs. responsibility. <strong className="font-bold" style={{ color: '#FEFBF8' }}>STRATRI</strong> was created to flip that script.
              </p>
              <p className="font-sans text-lg leading-relaxed" style={{ color: '#FEFBF8E6' }}>
                We treat governance, ethics, and policy as strategic infrastructure. Not barriers that slow you down, but rails that let you move quickly and safely over time, across markets and jurisdictions. In this view, the trivium is not abstract theory. It is how you decide which systems to build, where to deploy them, how to explain them, and what you are willing to walk away from.
              </p>
            </div>
            
            {/* Mini rails visual (on right) */}
            <div className="flex items-center justify-center">
              <GovernanceRails className="w-full max-w-md" lightMode />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Our Team */}
      <section className="py-16 sm:py-20 lg:py-24 border-t" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-medium mb-6" style={{ color: content.colors.dark }}>
            Our Team
          </h2>
          <p className="font-sans text-lg leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
            <strong className="font-bold">STRATRI</strong> is a multidisciplinary team. We have experts in technology governance and policy strategy, data scientists, machine learning engineers, and social impact advisors. This combination allows us to work across the full landscape: from technical implementation to policy strategy to societal outcomes.
          </p>
        </div>
      </section>

      {/* Section 5 - Who We Work With */}
      <section className="py-16 sm:py-20 lg:py-24 border-t" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-medium mb-6" style={{ color: content.colors.dark }}>
            Who We Work With
          </h2>
          <div className="space-y-4 font-sans text-lg leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
            <p>
              We advise leading companies in blockchain, retail, fintech, and healthcare on governance, policy, and responsible technology strategy.
            </p>
            <p>
              We also work with technology startups and scaleups navigating growth and regulation, venture capital firms building governance perspectives into their investment approach, and think tanks shaping the policy conversations that define the rules of the game.
            </p>
            <p>
              Our clients share one thing: they operate where technology, policy, and society intersect, and they want to do it well.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 - Founder */}
      <section className="py-16 sm:py-20 lg:py-24 border-t" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-medium mb-4" style={{ color: content.colors.dark }}>
            Founder
          </h2>
          <h3 className="font-serif text-2xl font-medium mb-8" style={{ color: content.colors.accent }}>
            Nesibe Kırış Can
          </h3>
          
          <div className="space-y-6 text-base font-sans leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
            <p>
              Consultant and researcher specializing in technology governance, public policy, and responsible innovation. Currently Responsible AI Consultant at Pandora and Research Fellow contributing to global work on democratic governance and digital policy.
            </p>
            
            <p>
              Co-author of the CAIDP AI Governance Index, the HUX AI ISO 42001 Implementation Report, and Gov2AI's civil society AI literacy study in Türkiye. Founder of TechLetter, a technology policy newsletter with 8,100+ readers in 65+ countries.
            </p>
            
            <p>
              Previously Government Affairs Director at AmCham Türkiye, representing 140+ global firms on technology policy. Earlier roles include Corporate and Public Affairs Lead at Istanbul's first Web3 hub and regulatory consultant at Ussal Consultancy.
            </p>
            
            <p>
              Delivers executive training on technology ethics and governance. Regular speaker and commentator in global and local media, including Harvard Business Review Türkiye, CoinDesk, Bloomberg, and CNBC-e.
            </p>
            
            <p>
              <strong style={{ color: content.colors.dark }}>Credentials:</strong> Certified AI Governance Professional (IAPP). Executive programs at Oxford Saïd Business School, Anthropic, the Alan Turing Institute, and BlueDot Impact. LL.B. and B.A. Sociology, Koç University.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 - Our Principles */}
      <section className="py-16 sm:py-20 lg:py-24 border-t" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-medium mb-12 text-center" style={{ color: content.colors.dark }}>
            Our Principles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-sm p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1" style={{ color: content.colors.accent }}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium mb-3" style={{ color: content.colors.dark }}>
                        {principle.title}
                      </h3>
                      <p className="font-sans text-base leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 8 - Work with STRATRI */}
      <section className="py-16 sm:py-20 lg:py-24 border-t" style={{ backgroundColor: content.colors.cream, borderColor: '#E8E4DF' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-medium mb-6" style={{ color: content.colors.dark }}>
            Work with <strong className="font-bold">STRATRI</strong>
          </h2>
          <p className="font-sans text-lg leading-relaxed mb-4" style={{ color: `${content.colors.dark}B3` }}>
            Whether you need strategic advisory, governance design, research, or training, we would like to hear from you.
          </p>
          <p className="font-sans text-lg leading-relaxed mb-8" style={{ color: `${content.colors.dark}B3` }}>
            Let's explore how <strong className="font-bold">STRATRI</strong> can support your organization at the intersection of technology, society, and policy.
          </p>
          <Button href="/connect">Get in touch</Button>
        </div>
      </section>
    </>
  );
}