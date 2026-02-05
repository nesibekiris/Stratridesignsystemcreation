import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { prefersReducedMotion, durations, animateCounter } from '../utils/motion';

export interface MetricItem {
  id: string;
  number: number;
  suffix?: string; // e.g., "+", "K", "%"
  label: string;
  description?: string;
}

interface MetricStripProps {
  metrics: MetricItem[];
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
  title?: string;
  subtitle?: string;
}

export function MetricStrip({ metrics, colors, title, subtitle }: MetricStripProps) {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-20 border-t border-b" 
      style={{ 
        backgroundColor: colors.dark,
        borderColor: `${colors.accent}40`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Optional Title */}
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: prefersReducedMotion() ? 0 : durations.medium / 1000,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="text-center mb-12"
          >
            {title && (
              <h2 
                className="font-serif text-3xl lg:text-4xl font-medium mb-3"
                style={{ color: colors.cream }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p 
                className="font-sans text-base"
                style={{ color: `${colors.cream}B3` }}
              >
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <MetricTile
              key={metric.id}
              metric={metric}
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

interface MetricTileProps {
  metric: MetricItem;
  index: number;
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
  isVisible: boolean;
}

function MetricTile({ metric, index, colors, isVisible }: MetricTileProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const numberRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Animate counter when visible
  useEffect(() => {
    if (isVisible && !hasAnimated && numberRef.current) {
      animateCounter(numberRef.current, 0, metric.number, durations.counter, metric.suffix || '');
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated, metric.number, metric.suffix]);

  // Animate progress bar
  useEffect(() => {
    if (isVisible && progressRef.current) {
      if (prefersReducedMotion()) {
        progressRef.current.style.width = '100%';
      } else {
        setTimeout(() => {
          if (progressRef.current) {
            progressRef.current.style.width = '100%';
          }
        }, 200 + index * 150);
      }
    }
  }, [isVisible, index]);

  const tileVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: prefersReducedMotion() ? 0 : durations.medium / 1000,
        delay: prefersReducedMotion() ? 0 : index * 0.1,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <motion.div
      variants={tileVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="text-center transition-governance"
    >
      {/* Number */}
      <div 
        ref={numberRef}
        className="font-serif text-5xl lg:text-6xl font-medium mb-2 transition-governance"
        style={{ 
          color: isHovered ? colors.accent : colors.cream,
        }}
      >
        {metric.number}{metric.suffix || ''}
      </div>

      {/* Progress Bar */}
      <div 
        className="w-full h-1 mb-4 rounded-full overflow-hidden"
        style={{ backgroundColor: `${colors.accent}30` }}
      >
        <div
          ref={progressRef}
          className="h-full rounded-full transition-all"
          style={{
            width: '0%',
            backgroundColor: isHovered ? colors.accent : colors.light,
            transitionDuration: prefersReducedMotion() ? '0ms' : '1200ms',
            transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)',
          }}
        />
      </div>

      {/* Label */}
      <div 
        className="font-sans text-base font-medium mb-2 uppercase tracking-wide"
        style={{ color: colors.cream }}
      >
        {metric.label}
      </div>

      {/* Description */}
      {metric.description && (
        <p 
          className="font-sans text-sm leading-relaxed"
          style={{ color: `${colors.cream}99` }}
        >
          {metric.description}
        </p>
      )}

      {/* Glow effect on hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 -z-10 blur-xl"
          style={{
            background: `radial-gradient(circle at center, ${colors.accent}20, transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  );
}

// Default metrics data for STRATRI
export const defaultMetrics: MetricItem[] = [
  {
    id: '1',
    number: 30,
    suffix: '+',
    label: 'Speaking Engagements',
    description: 'Speaking engagements across technology, policy, and governance forums',
  },
  {
    id: '2',
    number: 8100,
    suffix: '+',
    label: 'Techletter Readers',
    description: 'Subscribers across 65+ countries following AI governance insights',
  },
  {
    id: '3',
    number: 12,
    suffix: '+',
    label: 'Training',
    description: 'AI governance, policy research, and strategy engagements',
  },
];