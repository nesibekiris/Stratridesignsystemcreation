interface RailwayDiagramProps {
  className?: string;
  animate?: boolean;
  variant?: 'full' | 'simple' | 'junction';
}

export function RailwayDiagram({ className = '', animate = false, variant = 'full' }: RailwayDiagramProps) {
  if (variant === 'junction') {
    return <RailwayJunction className={className} animate={animate} />;
  }

  return (
    <svg 
      viewBox="0 0 1200 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity: 0.12 }}
    >
      {/* Main railway track - horizontal double line */}
      <g opacity="0.8">
        <line x1="100" y1="400" x2="1100" y2="400" stroke="#1E2A45" strokeWidth="3" />
        <line x1="100" y1="420" x2="1100" y2="420" stroke="#1E2A45" strokeWidth="3" />
      </g>

      {/* Station circles on the track */}
      <g opacity="0.85">
        {[200, 330, 460, 590, 720, 850, 980].map((x, i) => (
          <g key={i}>
            {/* Circle on track */}
            <circle cx={x} cy="410" r="16" fill="white" stroke="#1E2A45" strokeWidth="2.5" />
            <circle cx={x} cy="410" r="8" fill="#184A5A" />
            
            {/* Vertical line dropping down */}
            <line 
              x1={x} 
              y1="430" 
              x2={x} 
              y2="550" 
              stroke="#9FB7C8" 
              strokeWidth="1.5" 
              strokeDasharray="4 4"
              opacity="0.6"
            />
            
            {/* Rectangle box below (only first 5 stations) */}
            {i < 5 && (
              <g>
                <rect 
                  x={x - 30} 
                  y="560" 
                  width="60" 
                  height="100" 
                  fill="white" 
                  stroke="#1E2A45" 
                  strokeWidth="2"
                  rx="2"
                />
                {/* Partial fill inside rectangle */}
                <rect 
                  x={x - 25} 
                  y={610 - (i * 8)} 
                  width="50" 
                  height={50 + (i * 8)} 
                  fill="#9FB7C8" 
                  opacity="0.3"
                />
              </g>
            )}
          </g>
        ))}
      </g>

      {/* Circular cycle diagram in top right */}
      <g opacity="0.8" transform="translate(950, 150)">
        {/* Main circle path */}
        <circle cx="0" cy="0" r="70" fill="none" stroke="#9FB7C8" strokeWidth="2" />
        
        {/* Four nodes on the circle */}
        {[0, 90, 180, 270].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * 70;
          const y = Math.sin(rad) * 70;
          return (
            <circle 
              key={i} 
              cx={x} 
              cy={y} 
              r="12" 
              fill="#1E2A45" 
              stroke="white" 
              strokeWidth="2"
            />
          );
        })}
      </g>
    </svg>
  );
}

// Railway Junction close-up for detailed views
function RailwayJunction({ className = '', animate = false }: { className?: string; animate?: boolean }) {
  return (
    <svg 
      viewBox="0 0 800 600" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity: 0.15 }}
    >
      <defs>
        <filter id="junction-texture">
          <feTurbulence baseFrequency="0.05" numOctaves="2" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
      </defs>

      {/* Converging tracks with TEAL emphasis */}
      <g opacity="0.8" strokeLinecap="round">
        {/* Main track - TEAL */}
        <path
          d="M 100 200 Q 300 250, 400 300 Q 500 350, 700 400"
          stroke="#184A5A"
          strokeWidth="6"
          fill="none"
        />
        <path
          d="M 105 210 Q 305 260, 405 310 Q 505 360, 705 410"
          stroke="#184A5A"
          strokeWidth="6"
          fill="none"
        />

        {/* Branch track 1 - Deep blue */}
        <path
          d="M 100 350 Q 250 330, 400 300"
          stroke="#1E2A45"
          strokeWidth="5"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 105 360 Q 255 340, 405 310"
          stroke="#1E2A45"
          strokeWidth="5"
          fill="none"
          opacity="0.7"
        />

        {/* Branch track 2 - Light blue */}
        <path
          d="M 100 450 Q 200 400, 400 300"
          stroke="#9FB7C8"
          strokeWidth="4"
          fill="none"
          opacity="0.6"
        />
      </g>

      {/* Junction point - prominent TEAL */}
      <g opacity="0.9">
        <circle 
          cx="400" 
          cy="300" 
          r="16" 
          fill="#184A5A"
          className={animate ? 'animate-junction-pulse' : ''}
        />
        <circle 
          cx="400" 
          cy="300" 
          r="24" 
          fill="none"
          stroke="#184A5A"
          strokeWidth="2"
          opacity="0.4"
          className={animate ? 'animate-junction-ring' : ''}
        />
      </g>

      {/* Hand-drawn switch markers */}
      <g opacity="0.6" strokeWidth="3" stroke="#184A5A">
        <path d="M 380 285 L 395 295" strokeLinecap="round" />
        <path d="M 405 305 L 420 315" strokeLinecap="round" />
      </g>

      <style>{`
        @keyframes junction-pulse {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes junction-ring {
          0% { opacity: 0.4; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.8); }
        }
        .animate-junction-pulse { animation: junction-pulse 3s ease-in-out infinite; }
        .animate-junction-ring { animation: junction-ring 3s ease-out infinite; }
      `}</style>
    </svg>
  );
}
