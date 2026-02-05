interface TechnologyInkProps {
  className?: string;
  animate?: boolean;
}

export function TechnologyInk({ className = '', animate = false }: TechnologyInkProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Very subtle ink wash */}
        <radialGradient id="inkWash1" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#9FB7C8" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#9FB7C8" stopOpacity="0" />
        </radialGradient>
        
        {/* Minimal brush effect */}
        <filter id="inkBrush" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
      </defs>

      {/* Background layer - extremely subtle */}
      <g className={animate ? 'ink-bg-layer' : ''} opacity="0.15">
        <ellipse cx="300" cy="280" rx="160" ry="140" fill="url(#inkWash1)" />
        <ellipse cx="500" cy="320" rx="140" ry="120" fill="url(#inkWash1)" />
      </g>

      {/* Mid-ground - minimal crossroads paths (Technology-Policy-Society junction) */}
      <g className={animate ? 'ink-mid-layer' : ''} opacity="0.08">
        {/* Three subtle paths converging to center */}
        <path
          d="M 150 150 Q 300 250 400 300"
          stroke="#1E2A45"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#inkBrush)"
        />
        <path
          d="M 650 150 Q 500 250 400 300"
          stroke="#184A5A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#inkBrush)"
        />
        <path
          d="M 400 500 Q 400 400 400 300"
          stroke="#9FB7C8"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#inkBrush)"
        />

        {/* Minimal junction point */}
        <circle cx="400" cy="300" r="12" fill="none" stroke="#1E2A45" strokeWidth="1.5" opacity="0.4" filter="url(#inkBrush)" />
      </g>

      {/* Animation styles - very gentle */}
      <style>{`
        @keyframes floatBg {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(3px, -5px); }
        }
        @keyframes floatMid {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-2px, 3px); }
        }
        .ink-bg-layer {
          animation: floatBg 12s ease-in-out infinite;
        }
        .ink-mid-layer {
          animation: floatMid 10s ease-in-out infinite;
        }
      `}</style>
    </svg>
  );
}