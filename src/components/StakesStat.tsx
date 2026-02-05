import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { prefersReducedMotion, durations } from '../utils/motion';

interface StakesStatProps {
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
}

export function StakesStat({ colors }: StakesStatProps) {
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
      className="py-16 lg:py-20 border-t"
      style={{
        backgroundColor: colors.cream,
        borderColor: '#E8E4DF',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Optional subtle header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{
            duration: prefersReducedMotion() ? 0 : durations.fast / 1000,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="text-center mb-8"
        >
          <p
            className="font-sans text-xs tracking-widest uppercase"
            style={{ color: colors.light }}
          >
            The proof
          </p>
        </motion.div>

        {/* Main proof band */}
        <motion.div
          ref={bandRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: prefersReducedMotion() ? 0 : durations.medium / 1000,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-center"
        >
          {/* Left: Text Content */}
          <div>
            <h3
              className="font-serif text-3xl lg:text-4xl font-light mb-4 tracking-tight"
              style={{ color: colors.dark, letterSpacing: '-0.05em' }}
            >
              <span className="font-bold italic" style={{ color: colors.accent }}>
                Governed AI
              </span>{' '}
              outperforms.
            </h3>
            <p
              className="font-sans text-base lg:text-lg leading-relaxed mb-6"
              style={{ color: `${colors.dark}CC` }}
            >
              Organizations with AI‑savvy boards earn around 11 percentage‑points higher return on equity than their peers.
            </p>
            <p
              className="font-sans text-xs tracking-wide uppercase"
              style={{ color: colors.light }}
            >
              Source: MIT, 2025
            </p>
          </div>

          {/* Right: Simple 3-bar chart */}
          <div className="flex items-center justify-center lg:justify-end">
            <svg viewBox="0 0 240 160" className="w-full h-auto max-w-[240px]">
              <defs>
                <filter id="proof-ink" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
                </filter>
              </defs>

              {/* Bar 1: No governance - low */}
              <g>
                <rect
                  x="20"
                  y="100"
                  width="50"
                  height="30"
                  fill={colors.light}
                  opacity="0.4"
                  filter="url(#proof-ink)"
                />
                <text
                  x="45"
                  y="145"
                  textAnchor="middle"
                  className="font-sans text-[9px]"
                  fill={colors.dark}
                  opacity="0.6"
                >
                  No
                </text>
                <text
                  x="45"
                  y="155"
                  textAnchor="middle"
                  className="font-sans text-[9px]"
                  fill={colors.dark}
                  opacity="0.6"
                >
                  governance
                </text>
              </g>

              {/* Bar 2: Base - medium */}
              <g>
                <rect
                  x="95"
                  y="70"
                  width="50"
                  height="60"
                  fill="#1E2A45"
                  opacity="0.5"
                  filter="url(#proof-ink)"
                />
                <text
                  x="120"
                  y="145"
                  textAnchor="middle"
                  className="font-sans text-[9px]"
                  fill={colors.dark}
                  opacity="0.6"
                >
                  Base
                </text>
              </g>

              {/* Bar 3: AI-savvy board - high (+11pp) */}
              <g>
                <rect
                  x="170"
                  y="30"
                  width="50"
                  height="100"
                  fill="#184A5A"
                  opacity="0.7"
                  filter="url(#proof-ink)"
                />
                <text
                  x="195"
                  y="145"
                  textAnchor="middle"
                  className="font-sans text-[9px] font-semibold"
                  fill={colors.accent}
                >
                  AI‑savvy
                </text>
                <text
                  x="195"
                  y="155"
                  textAnchor="middle"
                  className="font-sans text-[9px] font-semibold"
                  fill={colors.accent}
                >
                  board
                </text>
                
                {/* +11pp label */}
                <text
                  x="195"
                  y="20"
                  textAnchor="middle"
                  className="font-sans text-xs font-bold"
                  fill={colors.accent}
                >
                  +11pp
                </text>
              </g>

              {/* Baseline */}
              <line
                x1="15"
                y1="131"
                x2="225"
                y2="131"
                stroke={colors.dark}
                strokeWidth="1"
                opacity="0.2"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
