import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { prefersReducedMotion, durations, stagger } from '../utils/motion';
import { PolicyIcon } from './Icons';

interface MisalignmentCost {
  id: string;
  title: string;
  description: string;
  iconType: 'experiments' | 'compliance' | 'impact' | 'alignment';
}

interface MisalignmentCostsProps {
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
}

const costs: MisalignmentCost[] = [
  {
    id: '1',
    title: 'Wasted pilots',
    description: 'Years of experimentation with no shared route to scale or strategic coherence.',
    iconType: 'experiments'
  },
  {
    id: '2',
    title: 'Regulatory exposure',
    description: 'Products launch without policy input, requiring expensive retrofits and compliance do-overs.',
    iconType: 'compliance'
  },
  {
    id: '3',
    title: 'Reputational shocks',
    description: 'A single misaligned deployment triggers regulatory action, public backlash, or customer trust loss.',
    iconType: 'impact'
  },
  {
    id: '4',
    title: 'Fragmented decisions',
    description: 'Leaders approve initiatives they do not understand. Critical calls lack strategic guidance.',
    iconType: 'alignment'
  }
];

export function MisalignmentCosts({ colors }: MisalignmentCostsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
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
            What <span className="font-bold italic">misalignment</span> costs
          </h2>
          <p
            className="font-sans text-lg max-w-2xl mx-auto"
            style={{ color: `${colors.dark}B3` }}
          >
            Without alignment, convergence becomes collision.
          </p>
        </motion.div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {costs.map((cost, index) => (
            <CostCard
              key={cost.id}
              cost={cost}
              index={index}
              colors={colors}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CostCardProps {
  cost: MisalignmentCost;
  index: number;
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
  isVisible: boolean;
}

function CostCard({ cost, index, colors, isVisible }: CostCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion() ? 0 : durations.medium / 1000,
        delay: prefersReducedMotion() ? 0 : stagger.getDelay(index, 120) / 1000,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white border rounded-sm p-8 transition-governance cursor-default"
      style={{
        borderColor: isHovered ? colors.accent : '#E8E4DF',
      }}
    >
      {/* Icon */}
      <div className="mb-6">
        <div 
          className="w-12 h-12 transition-governance"
          style={{ 
            color: isHovered ? colors.accent : colors.light,
          }}
        >
          <PolicyIcon className="w-full h-full" />
        </div>
      </div>

      {/* Title */}
      <h3
        className="font-serif text-2xl font-bold mb-3 transition-governance"
        style={{ color: isHovered ? colors.accent : colors.dark }}
      >
        {cost.title}
      </h3>

      {/* Description */}
      <p
        className="font-sans text-base leading-relaxed"
        style={{ color: `${colors.dark}B3` }}
      >
        {cost.description}
      </p>
    </motion.div>
  );
}