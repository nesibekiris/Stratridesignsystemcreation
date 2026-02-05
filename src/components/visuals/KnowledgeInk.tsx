interface KnowledgeInkProps {
  className?: string;
  animate?: boolean;
}

// For Insights, Techletter, and blog pages
export function KnowledgeInk({ className = '', animate = false }: KnowledgeInkProps) {
  return (
    <svg 
      viewBox="0 0 1200 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity: 0.1 }}
    >
      <defs>
        <filter id="knowledge-texture">
          <feTurbulence baseFrequency="0.06" numOctaves="2" seed="9" />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
      </defs>

      {/* Background layer - reading/knowledge motifs */}
      <g opacity="0.2">
        <ellipse 
          cx="250" 
          cy="300" 
          rx="140" 
          ry="120" 
          fill="#9FB7C8"
          filter="url(#knowledge-texture)"
          className={animate ? 'animate-knowledge-float' : ''}
        />
        <ellipse 
          cx="950" 
          cy="500" 
          rx="160" 
          ry="130" 
          fill="#1E2A45"
          filter="url(#knowledge-texture)"
          className={animate ? 'animate-knowledge-float-delayed' : ''}
        />
        <ellipse 
          cx="600" 
          cy="200" 
          rx="120" 
          ry="100" 
          fill="#184A5A"
          filter="url(#knowledge-texture)"
          className={animate ? 'animate-knowledge-float-slow' : ''}
        />
      </g>

      {/* Mid-ground - flowing lines representing ideas/text with TEAL */}
      <g opacity="0.5" strokeWidth="2" strokeLinecap="round">
        <path
          d="M 150 250 Q 300 280, 450 260 Q 600 240, 750 270"
          stroke="#184A5A"
          fill="none"
          strokeDasharray="6 4"
          className={animate ? 'animate-flow' : ''}
        />
        <path
          d="M 200 350 Q 350 380, 500 360 Q 650 340, 800 370"
          stroke="#1E2A45"
          fill="none"
          strokeDasharray="6 4"
          className={animate ? 'animate-flow-delayed' : ''}
        />
        <path
          d="M 180 450 Q 330 420, 480 440 Q 630 460, 780 430"
          stroke="#9FB7C8"
          fill="none"
          strokeDasharray="6 4"
          className={animate ? 'animate-flow-delayed-2' : ''}
        />
        <path
          d="M 220 550 Q 400 530, 550 560 Q 700 590, 850 570"
          stroke="#184A5A"
          fill="none"
          strokeDasharray="6 4"
          opacity="0.7"
          className={animate ? 'animate-flow-slow' : ''}
        />
      </g>

      {/* Foreground - node network representing interconnected ideas */}
      <g opacity="0.7">
        {/* Teal nodes (main) */}
        <circle cx="300" cy="280" r="8" fill="#184A5A" />
        <circle cx="600" cy="240" r="10" fill="#184A5A" />
        <circle cx="750" cy="270" r="7" fill="#184A5A" />
        
        {/* Deep blue nodes */}
        <circle cx="350" cy="380" r="7" fill="#1E2A45" opacity="0.8" />
        <circle cx="650" cy="340" r="8" fill="#1E2A45" opacity="0.8" />
        
        {/* Light blue nodes */}
        <circle cx="330" cy="420" r="6" fill="#9FB7C8" opacity="0.8" />
        <circle cx="630" cy="460" r="7" fill="#9FB7C8" opacity="0.8" />
      </g>

      {/* Abstract "reading" elements - book pages/layers with TEAL accent */}
      <g opacity="0.4" strokeWidth="2">
        <rect x="850" y="350" width="80" height="100" fill="none" stroke="#184A5A" rx="2" />
        <rect x="855" y="355" width="80" height="100" fill="none" stroke="#1E2A45" rx="2" />
        <rect x="860" y="360" width="80" height="100" fill="none" stroke="#9FB7C8" rx="2" />
      </g>

      <style>{`
        @keyframes knowledge-float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(8px, -12px); }
        }
        @keyframes knowledge-float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, 10px); }
        }
        @keyframes knowledge-float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(6px, 8px); }
        }
        @keyframes flow {
          to { stroke-dashoffset: -100; }
        }
        @keyframes flow-delayed {
          to { stroke-dashoffset: -100; }
        }
        @keyframes flow-delayed-2 {
          to { stroke-dashoffset: -100; }
        }
        @keyframes flow-slow {
          to { stroke-dashoffset: -100; }
        }
        .animate-knowledge-float { animation: knowledge-float 18s ease-in-out infinite; }
        .animate-knowledge-float-delayed { animation: knowledge-float-delayed 22s ease-in-out infinite; }
        .animate-knowledge-float-slow { animation: knowledge-float-slow 26s ease-in-out infinite; }
        .animate-flow { animation: flow 25s linear infinite; }
        .animate-flow-delayed { animation: flow-delayed 30s linear infinite; }
        .animate-flow-delayed-2 { animation: flow-delayed-2 35s linear infinite; }
        .animate-flow-slow { animation: flow-slow 40s linear infinite; }
      `}</style>
    </svg>
  );
}
