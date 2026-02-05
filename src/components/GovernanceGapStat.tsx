import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { prefersReducedMotion, durations } from '../utils/motion';

interface GovernanceGapStatProps {
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
}

export function GovernanceGapStat({ colors }: GovernanceGapStatProps) {
  const [isVisible, setIsVisible] = useState(false);
  const bandRef = useRef<HTMLDivElement>(null);

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

    if (bandRef.current) {
      observer.observe(bandRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-12 border-y"
      style={{
        backgroundColor: colors.cream,
        borderColor: '#E8E4DF',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={bandRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: prefersReducedMotion() ? 0 : durations.medium / 1000,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-center"
        >
          {/* Left: Text Content */}
          <div>
            <h3
              className="font-serif text-3xl lg:text-4xl font-light mb-4 tracking-tight"
              style={{ color: colors.dark, letterSpacing: '-0.05em' }}
            >
              Most boards still govern AI{' '}
              <span className="font-bold italic" style={{ color: colors.accent }}>
                in the dark.
              </span>
            </h3>
            <p
              className="font-sans text-base lg:text-lg leading-relaxed mb-4"
              style={{ color: `${colors.dark}CC` }}
            >
              &lt;25% of companies have board-approved AI policies and CEO-level oversight, despite its clear link to performance.
            </p>
            <p
              className="font-sans text-xs tracking-wide uppercase"
              style={{ color: colors.light }}
            >
              Sources: McKinsey, 2025 · NACD, 2025
            </p>
          </div>

          {/* Right: Visual - Gauge/Bar showing ~25% */}
          <div className="flex items-center justify-center lg:justify-end">
            <svg viewBox="0 0 160 120" className="w-full h-auto max-w-[160px]">
              <defs>
                <filter id="governance-ink" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
                </filter>
              </defs>

              {/* Background bar - empty portion */}
              <rect
                x="20"
                y="40"
                width="120"
                height="40"
                fill={colors.light}
                opacity="0.2"
                filter="url(#governance-ink)"
              />

              {/* Filled portion - 25% */}
              <rect
                x="20"
                y="40"
                width="30"
                height="40"
                fill={colors.accent}
                opacity="0.7"
                filter="url(#governance-ink)"
              />

              {/* Label */}
              <text
                x="80"
                y="105"
                textAnchor="middle"
                className="font-sans text-sm font-semibold"
                fill={colors.dark}
              >
                &lt;25%
              </text>
              <text
                x="80"
                y="25"
                textAnchor="middle"
                className="font-sans text-[10px]"
                fill={colors.dark}
                opacity="0.6"
              >
                board-approved policies
              </text>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
