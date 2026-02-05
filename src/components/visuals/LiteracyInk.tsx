interface LiteracyInkProps {
  className?: string;
  animate?: boolean;
}

export function LiteracyInk({ className = '', animate = false }: LiteracyInkProps) {
  return (
    <svg
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity: 0.08 }}
    >
      <defs>
        <filter id="literacy-texture">
          <feTurbulence baseFrequency="0.03" numOctaves="3" seed="12" />
          <feDisplacementMap in="SourceGraphic" scale="4" />
        </filter>
      </defs>

      {/* Open book pages */}
      <g opacity="0.6">
        {/* Left page */}
        <path
          d="M 300 250 Q 400 280, 500 300 L 500 650 Q 400 630, 300 600 Z"
          fill="#9FB7C8"
          opacity="0.2"
          filter="url(#literacy-texture)"
        />
        {/* Right page */}
        <path
          d="M 700 250 Q 800 280, 900 300 L 900 600 Q 800 630, 700 650 Z"
          fill="#184A5A"
          opacity="0.15"
          filter="url(#literacy-texture)"
        />
        {/* Center spine */}
        <line
          x1="600"
          y1="260"
          x2="600"
          y2="640"
          stroke="#1E2A45"
          strokeWidth="4"
          opacity="0.4"
        />
      </g>

      {/* Text lines on left page */}
      <g opacity="0.4" stroke="#1E2A45" strokeWidth="2">
        <line x1="340" y1="350" x2="480" y2="360" />
        <line x1="340" y1="380" x2="490" y2="390" />
        <line x1="340" y1="410" x2="470" y2="420" />
        <line x1="340" y1="440" x2="485" y2="450" />
        <line x1="340" y1="470" x2="475" y2="480" />
        <line x1="340" y1="500" x2="490" y2="510" />
      </g>

      {/* Text lines on right page */}
      <g opacity="0.4" stroke="#184A5A" strokeWidth="2">
        <line x1="720" y1="350" x2="860" y2="360" />
        <line x1="720" y1="380" x2="870" y2="390" />
        <line x1="720" y1="410" x2="850" y2="420" />
        <line x1="720" y1="440" x2="865" y2="450" />
        <line x1="720" y1="470" x2="855" y2="480" />
        <line x1="720" y1="500" x2="870" y2="510" />
      </g>

      {/* Lightbulb/insight icon floating above book */}
      <g opacity="0.5" transform="translate(600, 150)">
        {/* Bulb shape */}
        <circle cx="0" cy="0" r="30" fill="none" stroke="#184A5A" strokeWidth="2.5" />
        <path
          d="M -15 25 L -10 40 L 10 40 L 15 25"
          fill="none"
          stroke="#184A5A"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Light rays */}
        <line x1="-45" y1="-20" x2="-55" y2="-30" stroke="#9FB7C8" strokeWidth="2" />
        <line x1="45" y1="-20" x2="55" y2="-30" stroke="#9FB7C8" strokeWidth="2" />
        <line x1="-40" y1="10" x2="-50" y2="15" stroke="#9FB7C8" strokeWidth="2" />
        <line x1="40" y1="10" x2="50" y2="15" stroke="#9FB7C8" strokeWidth="2" />
        <line x1="0" y1="-40" x2="0" y2="-50" stroke="#9FB7C8" strokeWidth="2" />
      </g>

      {/* Network nodes connecting book to lightbulb - representing knowledge flow */}
      <g opacity="0.3">
        <circle cx="450" cy="320" r="6" fill="#184A5A" />
        <circle cx="550" cy="200" r="6" fill="#9FB7C8" />
        <circle cx="650" cy="200" r="6" fill="#9FB7C8" />
        <circle cx="750" cy="320" r="6" fill="#184A5A" />
        
        <line x1="450" y1="320" x2="550" y2="200" stroke="#9FB7C8" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="550" y1="200" x2="600" y2="150" stroke="#184A5A" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="650" y1="200" x2="600" y2="150" stroke="#184A5A" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="750" y1="320" x2="650" y2="200" stroke="#9FB7C8" strokeWidth="1.5" strokeDasharray="4 4" />
      </g>

      {/* Decorative brush strokes around the composition */}
      <g opacity="0.15">
        <path
          d="M 200 200 Q 250 180, 300 190"
          stroke="#9FB7C8"
          strokeWidth="12"
          fill="none"
          filter="url(#literacy-texture)"
        />
        <path
          d="M 900 200 Q 950 180, 1000 190"
          stroke="#184A5A"
          strokeWidth="12"
          fill="none"
          filter="url(#literacy-texture)"
        />
        <path
          d="M 200 650 Q 250 670, 300 660"
          stroke="#9FB7C8"
          strokeWidth="10"
          fill="none"
          filter="url(#literacy-texture)"
        />
        <path
          d="M 900 650 Q 950 670, 1000 660"
          stroke="#1E2A45"
          strokeWidth="10"
          fill="none"
          filter="url(#literacy-texture)"
        />
      </g>

      {animate && (
        <style>{`
          @keyframes literacy-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          g[transform*="translate(600, 150)"] {
            animation: literacy-float 4s ease-in-out infinite;
          }
        `}</style>
      )}
    </svg>
  );
}
