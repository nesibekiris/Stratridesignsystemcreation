interface PrinciplesInkProps {
  className?: string;
  animate?: boolean;
}

// For About page - calm, structured, principled
export function PrinciplesInk({ className = '', animate = false }: PrinciplesInkProps) {
  return (
    <svg 
      viewBox="0 0 1200 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity: 0.08 }}
    >
      <defs>
        <filter id="principles-texture">
          <feTurbulence baseFrequency="0.04" numOctaves="2" seed="11" />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
      </defs>

      {/* Background layer - calm geometric forms */}
      <g opacity="0.15">
        <rect 
          x="150" 
          y="200" 
          width="180" 
          height="180" 
          fill="#9FB7C8"
          filter="url(#principles-texture)"
          className={animate ? 'animate-principle-subtle' : ''}
          rx="4"
        />
        <rect 
          x="870" 
          y="420" 
          width="160" 
          height="160" 
          fill="#1E2A45"
          filter="url(#principles-texture)"
          className={animate ? 'animate-principle-subtle-delayed' : ''}
          rx="4"
        />
        <rect 
          x="500" 
          y="150" 
          width="200" 
          height="200" 
          fill="#184A5A"
          filter="url(#principles-texture)"
          className={animate ? 'animate-principle-subtle-slow' : ''}
          rx="4"
        />
      </g>

      {/* Mid-ground - pillar/column structures with TEAL emphasis */}
      <g opacity="0.5" strokeWidth="3" strokeLinecap="round">
        {/* Four pillars representing principles - featuring TEAL */}
        <line x1="250" y1="500" x2="250" y2="300" stroke="#184A5A" />
        <line x1="245" y1="500" x2="245" y2="300" stroke="#184A5A" opacity="0.5" />
        
        <line x1="450" y1="520" x2="450" y2="280" stroke="#1E2A45" />
        <line x1="455" y1="520" x2="455" y2="280" stroke="#1E2A45" opacity="0.5" />
        
        <line x1="750" y1="510" x2="750" y2="310" stroke="#184A5A" />
        <line x1="755" y1="510" x2="755" y2="310" stroke="#184A5A" opacity="0.5" />
        
        <line x1="950" y1="530" x2="950" y2="290" stroke="#9FB7C8" />
        <line x1="945" y1="530" x2="945" y2="290" stroke="#9FB7C8" opacity="0.5" />
      </g>

      {/* Foreground - connecting elements (foundation) */}
      <g opacity="0.6" strokeWidth="2">
        <path
          d="M 220 520 L 980 540"
          stroke="#184A5A"
          strokeLinecap="round"
          strokeDasharray="4 3"
        />
        <path
          d="M 220 540 L 980 560"
          stroke="#1E2A45"
          strokeLinecap="round"
          strokeDasharray="4 3"
          opacity="0.7"
        />
      </g>

      {/* Anchor points - TEAL accents */}
      <g opacity="0.8">
        <circle cx="250" cy="295" r="8" fill="#184A5A" />
        <circle cx="450" cy="275" r="8" fill="#1E2A45" />
        <circle cx="750" cy="305" r="8" fill="#184A5A" />
        <circle cx="950" cy="285" r="8" fill="#9FB7C8" />
      </g>

      {/* Base foundations */}
      <g opacity="0.4" fill="#184A5A">
        <rect x="230" y="500" width="40" height="8" rx="2" />
        <rect x="430" y="520" width="40" height="8" rx="2" />
        <rect x="730" y="510" width="40" height="8" rx="2" />
        <rect x="930" y="530" width="40" height="8" rx="2" />
      </g>

      <style>{`
        @keyframes principle-subtle {
          0%, 100% { transform: translate(0, 0); opacity: 0.15; }
          50% { transform: translate(5px, -5px); opacity: 0.2; }
        }
        @keyframes principle-subtle-delayed {
          0%, 100% { transform: translate(0, 0); opacity: 0.15; }
          50% { transform: translate(-4px, 6px); opacity: 0.2; }
        }
        @keyframes principle-subtle-slow {
          0%, 100% { transform: translate(0, 0); opacity: 0.15; }
          50% { transform: translate(3px, 4px); opacity: 0.2; }
        }
        .animate-principle-subtle { animation: principle-subtle 20s ease-in-out infinite; }
        .animate-principle-subtle-delayed { animation: principle-subtle-delayed 24s ease-in-out infinite; }
        .animate-principle-subtle-slow { animation: principle-subtle-slow 28s ease-in-out infinite; }
      `}</style>
    </svg>
  );
}
