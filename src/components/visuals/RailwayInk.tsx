interface RailwayInkProps {
  className?: string;
  animate?: boolean;
}

export function RailwayInk({ className = '', animate = false }: RailwayInkProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Minimal brush effect */}
        <filter id="railwayBrush" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
      </defs>

      {/* Minimal railway tracks converging (decision junction metaphor) */}
      <g className={animate ? 'railway-layer' : ''} opacity="0.06">
        {/* Left track */}
        <path
          d="M 100 200 Q 250 280 400 300"
          stroke="#1E2A45"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#railwayBrush)"
        />
        <path
          d="M 120 180 Q 260 265 410 285"
          stroke="#1E2A45"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#railwayBrush)"
        />

        {/* Right track */}
        <path
          d="M 700 200 Q 550 280 400 300"
          stroke="#184A5A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#railwayBrush)"
        />
        <path
          d="M 680 180 Q 540 265 390 285"
          stroke="#184A5A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#railwayBrush)"
        />

        {/* Center track */}
        <path
          d="M 400 100 L 400 300"
          stroke="#9FB7C8"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#railwayBrush)"
        />
        <path
          d="M 380 100 L 380 290"
          stroke="#9FB7C8"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#railwayBrush)"
        />

        {/* Subtle junction point */}
        <circle cx="400" cy="300" r="8" fill="none" stroke="#1E2A45" strokeWidth="1" opacity="0.3" />
      </g>

      <style>{`
        @keyframes railwayFloat {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-1px, 2px); }
        }
        .railway-layer {
          animation: railwayFloat 14s ease-in-out infinite;
        }
      `}</style>
    </svg>
  );
}