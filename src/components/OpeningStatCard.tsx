import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { prefersReducedMotion, durations } from '../utils/motion';

interface OpeningStatCardProps {
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
}

export function OpeningStatCard({ colors }: OpeningStatCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      className="py-16 lg:py-20"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: prefersReducedMotion() ? 0 : durations.medium / 1000,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="bg-white border rounded-sm overflow-hidden"
          style={{ borderColor: '#E8E4DF' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr]">
            {/* Left: Text Content */}
            <div className="p-8 lg:p-10">
              <h3
                className="font-serif text-4xl lg:text-5xl font-light mb-4 tracking-tight"
                style={{ color: colors.dark, letterSpacing: '-0.05em' }}
              >
                <span className="font-bold italic" style={{ color: colors.accent }}>88%</span> use AI.{' '}
                <span className="font-bold italic" style={{ color: colors.accent }}>7%</span> scale it.
              </h3>
              <p
                className="font-sans text-base lg:text-lg leading-relaxed mb-6"
                style={{ color: `${colors.dark}CC` }}
              >
                Most organizations are trapped between promising pilots and real transformation.
              </p>
              <p
                className="font-sans text-xs tracking-wide uppercase"
                style={{ color: colors.light }}
              >
                Source: McKinsey, 2025
              </p>
            </div>

            {/* Right: Visual */}
            <div className="relative p-8 lg:p-10 flex items-center justify-center" style={{ backgroundColor: `${colors.cream}` }}>
              <svg viewBox="0 0 200 200" className="w-full h-auto max-w-[200px]">
                <defs>
                  <filter id="opening-ink" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
                  </filter>
                </defs>
                
                {/* 88% bar - full height */}
                <g>
                  <rect
                    x="40"
                    y="30"
                    width="40"
                    height="140"
                    fill={colors.light}
                    opacity="0.5"
                    filter="url(#opening-ink)"
                  />
                  <text
                    x="60"
                    y="190"
                    textAnchor="middle"
                    className="font-sans text-xs font-semibold"
                    fill={colors.dark}
                  >
                    88%
                  </text>
                  <text
                    x="60"
                    y="25"
                    textAnchor="middle"
                    className="font-sans text-[10px]"
                    fill={colors.dark}
                    opacity="0.6"
                  >
                    use
                  </text>
                </g>

                {/* 7% bar - proportionally smaller */}
                <g>
                  <rect
                    x="120"
                    y="159"
                    width="40"
                    height="11"
                    fill={colors.accent}
                    opacity="0.8"
                    filter="url(#opening-ink)"
                  />
                  <text
                    x="140"
                    y="190"
                    textAnchor="middle"
                    className="font-sans text-xs font-semibold"
                    fill={colors.accent}
                  >
                    7%
                  </text>
                  <text
                    x="140"
                    y="25"
                    textAnchor="middle"
                    className="font-sans text-[10px]"
                    fill={colors.dark}
                    opacity="0.6"
                  >
                    scale
                  </text>
                </g>

                {/* Gap indicator - hand-drawn arrow */}
                <path
                  d="M 85 100 L 115 100"
                  stroke={colors.dark}
                  strokeWidth="1.5"
                  opacity="0.3"
                  strokeDasharray="3,3"
                  filter="url(#opening-ink)"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
