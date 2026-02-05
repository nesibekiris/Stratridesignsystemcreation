interface SocietyInkProps {
  className?: string;
  animate?: boolean;
}

export function SocietyInk({ className = '', animate = false }: SocietyInkProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Radial wash gradients */}
        <radialGradient id="societyWash1" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#9FB7C8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#9FB7C8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="societyWash2" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#184A5A" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#184A5A" stopOpacity="0" />
        </radialGradient>
        
        {/* Brush filter */}
        <filter id="societyBrush" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" />
        </filter>
      </defs>

      {/* Background layer - radiating wash */}
      <g className={animate ? 'society-bg-layer' : ''}>
        <circle cx="400" cy="300" r="240" fill="url(#societyWash1)" />
        <circle cx="400" cy="300" r="180" fill="url(#societyWash2)" />
      </g>

      {/* Mid-ground layer - radiating circles */}
      <g className={animate ? 'society-mid-layer' : ''}>
        {/* Concentric circles - hand-drawn */}
        <circle
          cx="400"
          cy="300"
          r="80"
          fill="none"
          stroke="#1E2A45"
          strokeWidth="3"
          strokeOpacity="0.25"
          filter="url(#societyBrush)"
        />
        <circle
          cx="400"
          cy="300"
          r="130"
          fill="none"
          stroke="#184A5A"
          strokeWidth="2.5"
          strokeOpacity="0.2"
          filter="url(#societyBrush)"
        />
        <circle
          cx="400"
          cy="300"
          r="180"
          fill="none"
          stroke="#1E2A45"
          strokeWidth="2"
          strokeOpacity="0.15"
          filter="url(#societyBrush)"
        />
        <circle
          cx="400"
          cy="300"
          r="230"
          fill="none"
          stroke="#184A5A"
          strokeWidth="2"
          strokeOpacity="0.12"
          filter="url(#societyBrush)"
        />

        {/* Radiating lines from center */}
        <g opacity="0.2">
          <line x1="400" y1="300" x2="280" y2="180" stroke="#1E2A45" strokeWidth="2" strokeLinecap="round" filter="url(#societyBrush)" />
          <line x1="400" y1="300" x2="520" y2="180" stroke="#184A5A" strokeWidth="2" strokeLinecap="round" filter="url(#societyBrush)" />
          <line x1="400" y1="300" x2="580" y2="300" stroke="#1E2A45" strokeWidth="2" strokeLinecap="round" filter="url(#societyBrush)" />
          <line x1="400" y1="300" x2="520" y2="420" stroke="#184A5A" strokeWidth="2" strokeLinecap="round" filter="url(#societyBrush)" />
          <line x1="400" y1="300" x2="280" y2="420" stroke="#1E2A45" strokeWidth="2" strokeLinecap="round" filter="url(#societyBrush)" />
          <line x1="400" y1="300" x2="220" y2="300" stroke="#184A5A" strokeWidth="2" strokeLinecap="round" filter="url(#societyBrush)" />
        </g>

        {/* Center point */}
        <circle
          cx="400"
          cy="300"
          r="35"
          fill="#FEFBF8"
          stroke="#184A5A"
          strokeWidth="5"
          opacity="0.95"
          filter="url(#societyBrush)"
        />
      </g>

      {/* Foreground layer - impact points */}
      <g className={animate ? 'society-fg-layer' : ''}>
        {/* Nodes on the radiating lines */}
        <circle cx="280" cy="180" r="10" fill="#184A5A" opacity="0.7" filter="url(#societyBrush)" />
        <circle cx="520" cy="180" r="9" fill="#9FB7C8" opacity="0.75" filter="url(#societyBrush)" />
        <circle cx="580" cy="300" r="10" fill="#184A5A" opacity="0.65" filter="url(#societyBrush)" />
        <circle cx="520" cy="420" r="9" fill="#9FB7C8" opacity="0.7" filter="url(#societyBrush)" />
        <circle cx="280" cy="420" r="10" fill="#184A5A" opacity="0.7" filter="url(#societyBrush)" />
        <circle cx="220" cy="300" r="9" fill="#9FB7C8" opacity="0.75" filter="url(#societyBrush)" />

        {/* Mid-ring accent dots */}
        <circle cx="400" cy="170" r="7" fill="#9FB7C8" opacity="0.6" filter="url(#societyBrush)" />
        <circle cx="530" cy="300" r="6" fill="#184A5A" opacity="0.6" filter="url(#societyBrush)" />
        <circle cx="400" cy="430" r="7" fill="#9FB7C8" opacity="0.6" filter="url(#societyBrush)" />
        <circle cx="270" cy="300" r="6" fill="#184A5A" opacity="0.6" filter="url(#societyBrush)" />
      </g>

      <style>{`
        @keyframes societyFloatBg {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        @keyframes societyFloatMid {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes societyFloatFg {
          0%, 100% { transform: scale(1); opacity: 0.65; }
          50% { transform: scale(1.2); opacity: 0.85; }
        }
        .society-bg-layer {
          transform-origin: center;
          animation: societyFloatBg 10s ease-in-out infinite;
        }
        .society-mid-layer {
          transform-origin: center;
          animation: societyFloatMid 12s ease-in-out infinite;
        }
        .society-fg-layer {
          animation: societyFloatFg 4s ease-in-out infinite;
        }
      `}</style>
    </svg>
  );
}
