interface InsightsInkProps {
  className?: string;
  animate?: boolean;
}

export function InsightsInk({ className = '', animate = false }: InsightsInkProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id="insightsBrush" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
      </defs>

      {/* Minimal flowing lines (reading/insight/knowledge streams) */}
      <g className={animate ? 'insights-layer' : ''} opacity="0.05">
        {/* Gentle flowing paths suggesting text/reading */}
        <path
          d="M 100 200 Q 250 220 400 200 Q 550 180 700 200"
          stroke="#1E2A45"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          filter="url(#insightsBrush)"
        />
        <path
          d="M 100 280 Q 250 300 400 280 Q 550 260 700 280"
          stroke="#184A5A"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          filter="url(#insightsBrush)"
        />
        <path
          d="M 100 360 Q 250 380 400 360 Q 550 340 700 360"
          stroke="#9FB7C8"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          filter="url(#insightsBrush)"
        />

        {/* Subtle dots suggesting text/paragraphs */}
        <circle cx="150" cy="250" r="2" fill="#1E2A45" opacity="0.3" />
        <circle cx="400" cy="240" r="2" fill="#184A5A" opacity="0.3" />
        <circle cx="650" cy="330" r="2" fill="#9FB7C8" opacity="0.3" />
      </g>

      <style>{`
        @keyframes insightsFloat {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        .insights-layer {
          animation: insightsFloat 16s ease-in-out infinite;
        }
      `}</style>
    </svg>
  );
}