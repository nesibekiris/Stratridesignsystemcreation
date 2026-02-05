interface CrossroadsInkProps {
  className?: string;
  animate?: boolean;
}

export function CrossroadsInk({ className = '', animate = false }: CrossroadsInkProps) {
  return (
    <svg 
      viewBox="0 0 1200 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity: 0.15 }}
    >
      <defs>
        {/* Subtle texture for hand-drawn feel */}
        <filter id="crossroads-texture">
          <feTurbulence baseFrequency="0.05" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
      </defs>

      {/* Background layer - soft ink washes */}
      <g opacity="0.3">
        <ellipse 
          cx="300" 
          cy="400" 
          rx="180" 
          ry="160" 
          fill="#9FB7C8"
          filter="url(#crossroads-texture)"
          className={animate ? 'animate-float-slow' : ''}
        />
        <ellipse 
          cx="900" 
          cy="300" 
          rx="150" 
          ry="140" 
          fill="#1E2A45"
          filter="url(#crossroads-texture)"
          className={animate ? 'animate-float-slower' : ''}
        />
      </g>

      {/* Mid-ground layer - three converging paths with TEAL accent */}
      <g opacity="0.6" strokeWidth="3" strokeLinecap="round">
        {/* Path 1: Technology - using teal-blue accent */}
        <path
          d="M 100 200 Q 300 250, 600 400 Q 700 450, 800 500"
          stroke="#184A5A"
          fill="none"
          strokeDasharray="8 6"
          className={animate ? 'animate-dash' : ''}
        />
        
        {/* Path 2: Policy - deep blue-grey */}
        <path
          d="M 200 100 Q 400 200, 600 400 Q 750 500, 850 600"
          stroke="#1E2A45"
          fill="none"
          strokeDasharray="8 6"
          className={animate ? 'animate-dash-delayed' : ''}
        />
        
        {/* Path 3: Society - soft light blue */}
        <path
          d="M 1100 250 Q 900 300, 600 400 Q 500 450, 400 550"
          stroke="#9FB7C8"
          fill="none"
          strokeDasharray="8 6"
          className={animate ? 'animate-dash-delayed-2' : ''}
        />
      </g>

      {/* Foreground layer - junction nodes and dots with TEAL */}
      <g opacity="0.8">
        {/* Central junction - prominent teal */}
        <circle 
          cx="600" 
          cy="400" 
          r="12" 
          fill="#184A5A"
          className={animate ? 'animate-pulse-subtle' : ''}
        />
        
        {/* Technology node */}
        <circle cx="300" cy="250" r="6" fill="#184A5A" opacity="0.7" />
        <circle cx="800" cy="500" r="6" fill="#184A5A" opacity="0.7" />
        
        {/* Policy node */}
        <circle cx="400" cy="200" r="6" fill="#1E2A45" opacity="0.7" />
        <circle cx="850" cy="600" r="6" fill="#1E2A45" opacity="0.7" />
        
        {/* Society node */}
        <circle cx="900" cy="300" r="6" fill="#9FB7C8" opacity="0.7" />
        <circle cx="500" cy="450" r="6" fill="#9FB7C8" opacity="0.7" />
      </g>

      {/* Hand-drawn junction markers with uneven strokes */}
      <g opacity="0.5" strokeWidth="2" fill="none">
        <path
          d="M 590 385 L 610 385 L 610 415 L 590 415 Z"
          stroke="#184A5A"
          strokeLinejoin="round"
        />
        <path
          d="M 585 390 L 595 400 L 585 410"
          stroke="#1E2A45"
        />
      </g>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -15px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-8px, 12px); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
        @keyframes dash-delayed {
          to { stroke-dashoffset: -100; }
        }
        @keyframes dash-delayed-2 {
          to { stroke-dashoffset: -100; }
        }
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-float-slow { animation: float-slow 20s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 25s ease-in-out infinite; }
        .animate-dash { animation: dash 30s linear infinite; }
        .animate-dash-delayed { animation: dash-delayed 35s linear infinite; }
        .animate-dash-delayed-2 { animation: dash-delayed-2 40s linear infinite; }
        .animate-pulse-subtle { animation: pulse-subtle 4s ease-in-out infinite; }
      `}</style>
    </svg>
  );
}
