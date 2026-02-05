interface PolicyInkProps {
  className?: string;
  animate?: boolean;
}

export function PolicyInk({ className = '', animate = false }: PolicyInkProps) {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Soft ink wash */}
        <radialGradient id="policyWash" cx="0.5" cy="0.6" r="0.6">
          <stop offset="0%" stopColor="#184A5A" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#184A5A" stopOpacity="0" />
        </radialGradient>
        
        {/* Brush texture */}
        <filter id="policyBrush" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
      </defs>

      {/* Background layer - ink wash */}
      <g className={animate ? 'policy-bg-layer' : ''}>
        <ellipse cx="400" cy="350" rx="280" ry="220" fill="url(#policyWash)" />
      </g>

      {/* Mid-ground layer - pillar structures */}
      <g className={animate ? 'policy-mid-layer' : ''}>
        {/* Left pillar - broader base */}
        <path
          d="M 220 450 L 240 150 L 260 150 L 280 450 Z"
          fill="#1E2A45"
          opacity="0.25"
          filter="url(#policyBrush)"
        />
        <rect
          x="230"
          y="140"
          width="40"
          height="8"
          fill="#1E2A45"
          opacity="0.4"
          filter="url(#policyBrush)"
        />

        {/* Center pillar - tallest */}
        <path
          d="M 370 480 L 385 100 L 415 100 L 430 480 Z"
          fill="#184A5A"
          opacity="0.3"
          filter="url(#policyBrush)"
        />
        <rect
          x="375"
          y="85"
          width="50"
          height="10"
          fill="#184A5A"
          opacity="0.5"
          filter="url(#policyBrush)"
        />

        {/* Right pillar */}
        <path
          d="M 520 450 L 535 150 L 565 150 L 580 450 Z"
          fill="#1E2A45"
          opacity="0.25"
          filter="url(#policyBrush)"
        />
        <rect
          x="530"
          y="140"
          width="40"
          height="8"
          fill="#1E2A45"
          opacity="0.4"
          filter="url(#policyBrush)"
        />

        {/* Balance beam - connecting element */}
        <rect
          x="180"
          y="280"
          width="440"
          height="6"
          fill="#184A5A"
          opacity="0.2"
          rx="3"
          filter="url(#policyBrush)"
        />
        
        {/* Subtle foundation lines */}
        <line
          x1="150"
          y1="480"
          x2="650"
          y2="480"
          stroke="#1E2A45"
          strokeWidth="3"
          strokeOpacity="0.15"
          strokeLinecap="round"
          filter="url(#policyBrush)"
        />
      </g>

      {/* Foreground layer - accent elements */}
      <g className={animate ? 'policy-fg-layer' : ''}>
        {/* Small accent marks on pillars */}
        <circle cx="250" cy="200" r="6" fill="#184A5A" opacity="0.6" filter="url(#policyBrush)" />
        <circle cx="250" cy="350" r="5" fill="#9FB7C8" opacity="0.7" filter="url(#policyBrush)" />
        
        <circle cx="400" cy="180" r="8" fill="#184A5A" opacity="0.7" filter="url(#policyBrush)" />
        <circle cx="400" cy="320" r="6" fill="#9FB7C8" opacity="0.75" filter="url(#policyBrush)" />
        
        <circle cx="550" cy="200" r="6" fill="#184A5A" opacity="0.6" filter="url(#policyBrush)" />
        <circle cx="550" cy="350" r="5" fill="#9FB7C8" opacity="0.7" filter="url(#policyBrush)" />

        {/* Balance point indicator */}
        <circle cx="400" cy="280" r="10" fill="#FEFBF8" stroke="#184A5A" strokeWidth="3" opacity="0.9" filter="url(#policyBrush)" />
      </g>

      <style>{`
        @keyframes policyFloatBg {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -10px); }
        }
        @keyframes policyFloatMid {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @keyframes policyFloatFg {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(0, -5px) scale(1.15); opacity: 0.85; }
        }
        .policy-bg-layer {
          animation: policyFloatBg 9s ease-in-out infinite;
        }
        .policy-mid-layer {
          animation: policyFloatMid 7s ease-in-out infinite;
        }
        .policy-fg-layer {
          animation: policyFloatFg 5s ease-in-out infinite;
        }
      `}</style>
    </svg>
  );
}
