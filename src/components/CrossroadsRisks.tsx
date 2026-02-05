import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import { prefersReducedMotion, durations, stagger } from '../utils/motion';

export interface RiskItem {
  id: string;
  label: string;
  description: string;
  linkedService?: string; // Link to corresponding service/solution
}

interface CrossroadsRisksProps {
  risks: RiskItem[];
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
  onRiskClick?: (risk: RiskItem) => void;
}

export function CrossroadsRisks({ risks, colors, onRiskClick }: CrossroadsRisksProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-24" 
      style={{ backgroundColor: colors.cream }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: prefersReducedMotion() ? 0 : durations.medium / 1000,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="text-center mb-12"
        >
          <h2 
            className="font-serif text-4xl lg:text-5xl font-light mb-4 tracking-tight"
            style={{ color: colors.dark, letterSpacing: '-0.05em' }}
          >
            When <span className="font-bold italic">alignment</span> is missing
          </h2>
          <p 
            className="font-sans text-lg max-w-2xl mx-auto"
            style={{ color: `${colors.dark}B3` }}
          >
            Convergence is inevitable. Without strategy, so are the breakdowns.
          </p>
        </motion.div>

        {/* Risk Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {risks.map((risk, index) => (
            <RiskTile
              key={risk.id}
              risk={risk}
              index={index}
              colors={colors}
              isVisible={isVisible}
              onClick={() => onRiskClick?.(risk)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface RiskTileProps {
  risk: RiskItem;
  index: number;
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
  isVisible: boolean;
  onClick?: () => void;
}

function RiskTile({ risk, index, colors, isVisible, onClick }: RiskTileProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const tileVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: prefersReducedMotion() ? 0 : durations.medium / 1000,
        delay: prefersReducedMotion() ? 0 : stagger.getDelay(index, 150) / 1000,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <motion.div
      variants={tileVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="relative"
    >
      <motion.div
        whileHover={{
          scale: prefersReducedMotion() ? 1 : 1.01,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => {
          setShowTooltip(!showTooltip);
          onClick?.();
        }}
        className="bg-white border rounded-sm p-6 lg:p-8 cursor-pointer transition-governance relative overflow-hidden"
        style={{
          borderColor: isHovered ? colors.accent : '#E8E4DF',
          backgroundColor: isHovered ? `${colors.cream}80` : 'white',
        }}
      >
        {/* Left accent line - appears on hover */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isHovered ? 1 : 0 }}
          transition={{
            duration: durations.fast / 1000,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="absolute left-0 top-0 bottom-0 w-1 origin-top"
          style={{ backgroundColor: colors.accent }}
        />

        {/* Icon */}
        <div className="flex items-start gap-4 mb-3">
          <div 
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-governance"
            style={{ 
              backgroundColor: isHovered ? colors.accent : `${colors.accent}20`,
            }}
          >
            <svg 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <defs>
                <filter id={`alert-ink-${risk.id}`} x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
                </filter>
              </defs>
              
              {/* Outer circle */}
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                fill="none" 
                stroke={isHovered ? 'white' : colors.accent}
                strokeWidth="6"
                opacity="0.9"
                filter={`url(#alert-ink-${risk.id})`}
              />
              
              {/* Exclamation line */}
              <rect 
                x="45" 
                y="25" 
                width="10" 
                height="35" 
                fill={isHovered ? 'white' : colors.accent}
                opacity="0.9"
                filter={`url(#alert-ink-${risk.id})`}
              />
              
              {/* Exclamation dot */}
              <circle 
                cx="50" 
                cy="72" 
                r="5" 
                fill={isHovered ? 'white' : colors.accent}
                opacity="0.9"
                filter={`url(#alert-ink-${risk.id})`}
              />
            </svg>
          </div>

          {/* Risk Label */}
          <div className="flex-1">
            <h3 
              className="font-serif text-xl font-bold transition-governance"
              style={{ 
                color: isHovered ? colors.accent : colors.dark,
              }}
            >
              {risk.label}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p 
          className="font-sans text-sm leading-relaxed pl-14"
          style={{ color: `${colors.dark}B3` }}
        >
          {risk.description}
        </p>

        {/* "How STRATRI helps" tooltip - appears on click/tap */}
        {risk.linkedService && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: showTooltip ? 'auto' : 0,
              opacity: showTooltip ? 1 : 0,
            }}
            transition={{
              duration: durations.fast / 1000,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="overflow-hidden"
          >
            <div 
              className="mt-4 pt-4 border-t pl-14"
              style={{ borderColor: '#E8E4DF' }}
            >
              <p 
                className="text-xs font-sans font-semibold uppercase tracking-wider mb-1"
                style={{ color: colors.accent }}
              >
                How STRATRI helps
              </p>
              <p 
                className="text-sm font-sans"
                style={{ color: colors.dark }}
              >
                {risk.linkedService}
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

// Default risks data
export const defaultRisks: RiskItem[] = [
  {
    id: '1',
    label: 'Wasted investment and duplicated effort',
    description: 'Different teams buy different tools, run separate pilots, and build incompatible systems. Resources scatter. Nothing scales.',
    linkedService: 'AI Strategy & Maturity helps you map scattered pilots into a coherent roadmap with shared governance.',
  },
  {
    id: '2',
    label: 'Decisions that get satisfying, but expensive do-overs',
    description: 'Products launch without policy input. Legal reviews come after the build. You end up retrofitting compliance into systems that were never designed for it.',
    linkedService: 'AI Governance, Ethics & Literacy embeds principles into everyday decisions from the start.',
  },
  {
    id: '3',
    label: 'Regulatory fines, reputational damage, or both',
    description: 'A single misaligned deployment can trigger regulatory action, public backlash, or loss of customer trust. Often all three arrive together.',
    linkedService: 'Market & Policy Research keeps you ahead of regulatory developments and public sentiment.',
  },
  {
    id: '4',
    label: 'Leadership flying blind on technology risk',
    description: 'Executives approve initiatives they don\'t fully understand. Teams make critical calls without strategic guidance. Risk accumulates where no one is looking.',
    linkedService: 'AI Literacy programs equip leaders, boards, and teams with the understanding to govern effectively.',
  },
];