interface ConnectInkProps {
  className?: string;
  animate?: boolean;
}

// For Connect page - paths converging to connection point
export function ConnectInk({ className = '', animate = false }: ConnectInkProps) {
  return (
    <svg 
      viewBox="0 0 1200 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity: 0.1 }}
    >
      <defs>
        <filter id="connect-texture">
          <feTurbulence baseFrequency="0.05" numOctaves="2" seed="13" />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
      </defs>

      {/* Background layer - gentle convergence */}
      <g opacity="0.2">
        <ellipse 
          cx="300" 
          cy="200" 
          rx="150" 
          ry="130" 
          fill="#9FB7C8"
          filter="url(#connect-texture)"
          className={animate ? 'animate-connect-drift' : ''}
        />
        <ellipse 
          cx="900" 
          cy="250" 
          rx="140" 
          ry="120" 
          fill="#184A5A"
          filter="url(#connect-texture)"
          className={animate ? 'animate-connect-drift-delayed' : ''}
        />
        <ellipse 
          cx="600" 
          cy="600" 
          rx="160" 
          ry="140" 
          fill="#1E2A45"
          filter="url(#connect-texture)"
          className={animate ? 'animate-connect-drift-slow' : ''}
        />
      </g>

      {/* Mid-ground - converging paths with TEAL emphasis */}
      <g opacity="0.6" strokeWidth="3" strokeLinecap="round">
        {/* Path from top-left - TEAL */}
        <path
          d="M 100 150 Q 350 250, 600 400"
          stroke="#184A5A"
          fill="none"
          strokeDasharray="6 4"
          className={animate ? 'animate-converge' : ''}
        />
        
        {/* Path from top-right - Deep blue */}
        <path
          d="M 1100 200 Q 850 280, 600 400"
          stroke="#1E2A45"
          fill="none"
          strokeDasharray="6 4"
          className={animate ? 'animate-converge-delayed' : ''}
        />
        
        {/* Path from bottom - Light blue */}
        <path
          d="M 600 700 Q 600 550, 600 400"
          stroke="#9FB7C8"
          fill="none"
          strokeDasharray="6 4"
          className={animate ? 'animate-converge-delayed-2' : ''}
        />
        
        {/* Path from left - TEAL accent */}
        <path
          d="M 50 450 Q 300 420, 600 400"
          stroke="#184A5A"
          fill="none"
          strokeDasharray="6 4"
          opacity="0.7"
          className={animate ? 'animate-converge-slow' : ''}
        />
      </g>

      {/* Central connection point - prominent TEAL */}
      <g opacity="0.9">
        <circle 
          cx="600" 
          cy="400" 
          r="16" 
          fill="#184A5A"
          className={animate ? 'animate-connect-pulse' : ''}
        />
        <circle 
          cx="600" 
          cy="400" 
          r="28" 
          fill="none"
          stroke="#184A5A"
          strokeWidth="2"
          opacity="0.5"
          className={animate ? 'animate-connect-ring' : ''}
        />
        <circle 
          cx="600" 
          cy="400" 
          r="40" 
          fill="none"
          stroke="#184A5A"
          strokeWidth="1.5"
          opacity="0.3"
          className={animate ? 'animate-connect-ring-slow' : ''}
        />
      </g>

      {/* Origin points */}
      <g opacity="0.7">
        <circle cx="100" cy="150" r="6" fill="#184A5A" />
        <circle cx="1100" cy="200" r="6" fill="#1E2A45" />
        <circle cx="600" cy="700" r="6" fill="#9FB7C8" />
        <circle cx="50" cy="450" r="6" fill="#184A5A" opacity="0.7" />
      </g>

      <style>{`
        @keyframes connect-drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(8px, -10px); }
        }
        @keyframes connect-drift-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, 8px); }
        }
        @keyframes connect-drift-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5px, 12px); }
        }
        @keyframes converge {
          to { stroke-dashoffset: -100; }
        }
        @keyframes converge-delayed {
          to { stroke-dashoffset: -100; }
        }
        @keyframes converge-delayed-2 {
          to { stroke-dashoffset: -100; }
        }
        @keyframes converge-slow {
          to { stroke-dashoffset: -100; }
        }
        @keyframes connect-pulse {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes connect-ring {
          0% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 0; transform: scale(2); }
        }
        @keyframes connect-ring-slow {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 0; transform: scale(2.5); }
        }
        .animate-connect-drift { animation: connect-drift 20s ease-in-out infinite; }
        .animate-connect-drift-delayed { animation: connect-drift-delayed 24s ease-in-out infinite; }
        .animate-connect-drift-slow { animation: connect-drift-slow 28s ease-in-out infinite; }
        .animate-converge { animation: converge 28s linear infinite; }
        .animate-converge-delayed { animation: converge-delayed 32s linear infinite; }
        .animate-converge-delayed-2 { animation: converge-delayed-2 36s linear infinite; }
        .animate-converge-slow { animation: converge-slow 40s linear infinite; }
        .animate-connect-pulse { animation: connect-pulse 3s ease-in-out infinite; }
        .animate-connect-ring { animation: connect-ring 3s ease-out infinite; }
        .animate-connect-ring-slow { animation: connect-ring-slow 4s ease-out infinite; }
      `}</style>
    </svg>
  );
}
