import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { prefersReducedMotion, durations, stagger } from '../utils/motion';

export interface GovernanceSuiteItem {
  id: string;
  title: string;
  subtitle: string;
  offerings: string[];
  bestFor?: string;
  link?: string;
}

interface GovernanceSuiteCardProps {
  item: GovernanceSuiteItem;
  index: number;
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
  onClick?: () => void;
}

export function GovernanceSuiteCard({ item, index, colors, onClick }: GovernanceSuiteCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else if (onClick) {
      onClick();
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
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

  const hoverVariants = {
    rest: { 
      scale: 1,
      boxShadow: '0 2px 4px rgba(30, 42, 69, 0.08)',
    },
    hover: { 
      scale: prefersReducedMotion() ? 1 : 1.02,
      boxShadow: '0 8px 16px rgba(24, 74, 90, 0.2)',
      transition: {
        duration: durations.fast / 1000,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="relative"
    >
      <motion.div
        variants={hoverVariants}
        initial="rest"
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
        className="bg-white border rounded-sm p-6 lg:p-8 cursor-pointer overflow-hidden transition-governance"
        style={{
          borderColor: isExpanded || isHovered ? colors.accent : '#E8E4DF',
          borderWidth: isExpanded || isHovered ? '2px' : '1px',
          backgroundColor: isHovered ? `${colors.accent}08` : 'white',
        }}
      >
        {/* Title */}
        <h3 
          className="font-serif text-2xl font-medium mb-2"
          style={{ color: colors.dark }}
        >
          {item.title}
        </h3>

        {/* Subtitle */}
        <p 
          className="font-serif text-base italic mb-4"
          style={{ color: colors.accent }}
        >
          {item.subtitle}
        </p>

        {/* Offerings (max 3 bullet points) */}
        <ul className="space-y-2 mb-4">
          {item.offerings.slice(0, 3).map((offering, idx) => (
            <li 
              key={idx} 
              className="flex items-start text-sm font-sans"
              style={{ color: `${colors.dark}B3` }}
            >
              <span 
                className="mr-2 flex-shrink-0 font-serif"
                style={{ color: colors.accent }}
              >
                •
              </span>
              <span className="leading-relaxed">{offering}</span>
            </li>
          ))}
        </ul>

        {/* "Best for" - shown on hover (desktop) or expand (mobile) */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: (isHovered || isExpanded) ? 'auto' : 0,
            opacity: (isHovered || isExpanded) ? 1 : 0,
          }}
          transition={{
            duration: durations.fast / 1000,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="overflow-hidden"
        >
          {item.bestFor && (
            <div 
              className="pt-4 mt-4 border-t rounded-sm p-3"
              style={{ 
                borderColor: colors.accent,
                backgroundColor: `${colors.accent}0D`
              }}
            >
              <p 
                className="text-xs font-sans font-semibold uppercase tracking-wider mb-1"
                style={{ color: colors.accent }}
              >
                Best for
              </p>
              <p 
                className="text-sm font-sans"
                style={{ color: colors.dark }}
              >
                {item.bestFor}
              </p>
            </div>
          )}
        </motion.div>

        {/* CTA */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t" style={{ borderColor: '#E8E4DF' }}>
          <span 
            className="text-sm font-sans font-medium flex items-center gap-2 transition-governance"
            style={{ 
              color: isHovered || isExpanded ? colors.accent : colors.dark,
            }}
          >
            {isExpanded ? 'Learn more' : 'View details'}
            <motion.span
              animate={{
                x: (isHovered || isExpanded) ? 4 : 0,
              }}
              transition={{
                duration: durations.fast / 1000,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Governance Suite Grid Container
interface GovernanceSuiteGridProps {
  items: GovernanceSuiteItem[];
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
  onItemClick?: (item: GovernanceSuiteItem) => void;
}

export function GovernanceSuiteGrid({ items, colors, onItemClick }: GovernanceSuiteGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <GovernanceSuiteCard
          key={item.id}
          item={item}
          index={index}
          colors={colors}
          onClick={() => onItemClick?.(item)}
        />
      ))}
    </div>
  );
}