interface InsightsHeroInkProps {
  className?: string;
  animate?: boolean;
}

// Tech-inspired abstract visualization for Insights hero - Japanese ink style meets digital
export function InsightsHeroInk({ className = '', animate = false }: InsightsHeroInkProps) {
  return (
    <svg 
      viewBox="0 0 1400 900" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Subtle texture for hand-drawn feel */}
        <filter id="insights-grain">
          <feTurbulence baseFrequency="0.6" numOctaves="2" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="multiply" opacity="0.15" />
        </filter>

        {/* Soft glow for nodes */}
        <filter id="insights-glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background grid pattern - subtle tech foundation */}
      <g opacity="0.08" strokeWidth="1" stroke="#1E2A45">
        {/* Vertical grid lines */}
        <line x1="200" y1="0" x2="200" y2="900" strokeDasharray="4 6" />
        <line x1="400" y1="0" x2="400" y2="900" strokeDasharray="4 6" />
        <line x1="600" y1="0" x2="600" y2="900" strokeDasharray="4 6" />
        <line x1="800" y1="0" x2="800" y2="900" strokeDasharray="4 6" />
        <line x1="1000" y1="0" x2="1000" y2="900" strokeDasharray="4 6" />
        <line x1="1200" y1="0" x2="1200" y2="900" strokeDasharray="4 6" />
        
        {/* Horizontal grid lines */}
        <line x1="0" y1="200" x2="1400" y2="200" strokeDasharray="4 6" />
        <line x1="0" y1="400" x2="1400" y2="400" strokeDasharray="4 6" />
        <line x1="0" y1="600" x2="1400" y2="600" strokeDasharray="4 6" />
      </g>

      {/* Network visualization - interconnected nodes */}
      <g opacity="0.2" strokeWidth="1.5">
        {/* Connection lines */}
        <line x1="200" y1="250" x2="350" y2="300" stroke="#184A5A" strokeDasharray="3 3" className={animate ? 'animate-insight-pulse-1' : ''} />
        <line x1="350" y1="300" x2="500" y2="280" stroke="#184A5A" strokeDasharray="3 3" className={animate ? 'animate-insight-pulse-2' : ''} />
        <line x1="500" y1="280" x2="650" y2="320" stroke="#1E2A45" strokeDasharray="3 3" className={animate ? 'animate-insight-pulse-3' : ''} />
        <line x1="650" y1="320" x2="800" y2="290" stroke="#184A5A" strokeDasharray="3 3" className={animate ? 'animate-insight-pulse-1' : ''} />
        
        <line x1="300" y1="500" x2="450" y2="520" stroke="#1E2A45" strokeDasharray="3 3" className={animate ? 'animate-insight-pulse-2' : ''} />
        <line x1="450" y1="520" x2="600" y2="490" stroke="#184A5A" strokeDasharray="3 3" className={animate ? 'animate-insight-pulse-3' : ''} />
        <line x1="600" y1="490" x2="750" y2="510" stroke="#1E2A45" strokeDasharray="3 3" className={animate ? 'animate-insight-pulse-1' : ''} />
        <line x1="750" y1="510" x2="900" y2="480" stroke="#184A5A" strokeDasharray="3 3" className={animate ? 'animate-insight-pulse-2' : ''} />

        <line x1="350" y1="300" x2="450" y2="520" stroke="#0F2A38" strokeDasharray="3 3" opacity="0.5" />
        <line x1="650" y1="320" x2="600" y2="490" stroke="#0F2A38" strokeDasharray="3 3" opacity="0.5" />
        <line x1="500" y1="280" x2="750" y2="510" stroke="#0F2A38" strokeDasharray="3 3" opacity="0.4" />
      </g>

      {/* Hexagonal clusters - tech pattern inspired */}
      <g opacity="0.15" strokeWidth="1.5" fill="none">
        {/* Left cluster */}
        <polygon points="180,200 210,185 240,200 240,230 210,245 180,230" stroke="#1E2A45" filter="url(#insights-grain)" />
        <polygon points="240,200 270,185 300,200 300,230 270,245 240,230" stroke="#184A5A" filter="url(#insights-grain)" />
        <polygon points="180,260 210,245 240,260 240,290 210,305 180,290" stroke="#184A5A" filter="url(#insights-grain)" />
        
        {/* Right upper cluster */}
        <polygon points="1080,180 1110,165 1140,180 1140,210 1110,225 1080,210" stroke="#184A5A" filter="url(#insights-grain)" />
        <polygon points="1140,180 1170,165 1200,180 1200,210 1170,225 1140,210" stroke="#1E2A45" filter="url(#insights-grain)" />
        
        {/* Bottom cluster */}
        <polygon points="880,650 910,635 940,650 940,680 910,695 880,680" stroke="#0F2A38" filter="url(#insights-grain)" />
        <polygon points="940,650 970,635 1000,650 1000,680 970,695 940,680" stroke="#184A5A" filter="url(#insights-grain)" />
      </g>

      {/* Circuit-like flowing paths */}
      <g opacity="0.25" strokeWidth="2" strokeLinecap="round">
        {/* Data flow paths */}
        <path
          d="M 100 350 L 200 350 L 220 370 L 280 370 L 300 350 L 400 350"
          stroke="#184A5A"
          fill="none"
          strokeDasharray="8 4"
          className={animate ? 'animate-insight-flow-1' : ''}
        />
        
        <path
          d="M 500 450 L 600 450 L 620 470 L 680 470 L 700 450 L 850 450"
          stroke="#1E2A45"
          fill="none"
          strokeDasharray="8 4"
          className={animate ? 'animate-insight-flow-2' : ''}
        />

        <path
          d="M 900 550 L 1000 550 L 1020 570 L 1080 570 L 1100 550 L 1250 550"
          stroke="#0F2A38"
          fill="none"
          strokeDasharray="8 4"
          className={animate ? 'animate-insight-flow-3' : ''}
        />
      </g>

      {/* Node network points - data visualization style */}
      <g opacity="0.3">
        {/* Upper left network */}
        <circle cx="200" cy="250" r="8" fill="#1E2A45" filter="url(#insights-glow)" />
        <circle cx="350" cy="300" r="10" fill="#184A5A" filter="url(#insights-glow)" />
        <circle cx="500" cy="280" r="7" fill="#184A5A" filter="url(#insights-glow)" />
        <circle cx="650" cy="320" r="9" fill="#1E2A45" filter="url(#insights-glow)" />
        <circle cx="800" cy="290" r="8" fill="#184A5A" filter="url(#insights-glow)" />

        {/* Mid-level network */}
        <circle cx="300" cy="500" r="7" fill="#1E2A45" filter="url(#insights-glow)" />
        <circle cx="450" cy="520" r="9" fill="#184A5A" filter="url(#insights-glow)" />
        <circle cx="600" cy="490" r="11" fill="#1E2A45" filter="url(#insights-glow)" />
        <circle cx="750" cy="510" r="8" fill="#184A5A" filter="url(#insights-glow)" />
        <circle cx="900" cy="480" r="7" fill="#0F2A38" filter="url(#insights-glow)" />

        {/* Scattered accent nodes */}
        <circle cx="150" cy="400" r="5" fill="#184A5A" opacity="0.7" />
        <circle cx="1100" cy="350" r="6" fill="#1E2A45" opacity="0.7" />
        <circle cx="450" cy="700" r="5" fill="#0F2A38" opacity="0.6" />
        <circle cx="1000" cy="200" r="7" fill="#184A5A" opacity="0.7" />
      </g>

      {/* Abstract geometric fragments - policy/framework shapes */}
      <g opacity="0.18" strokeWidth="2" fill="none">
        {/* Rectangle frames - document/policy motif */}
        <rect x="950" y="600" width="90" height="70" stroke="#1E2A45" rx="2" filter="url(#insights-grain)" />
        <rect x="955" y="605" width="90" height="70" stroke="#184A5A" rx="2" filter="url(#insights-grain)" />
        
        {/* Concentric circles - target/focus motif */}
        <circle cx="1200" cy="450" r="40" stroke="#184A5A" filter="url(#insights-grain)" />
        <circle cx="1200" cy="450" r="50" stroke="#1E2A45" opacity="0.6" filter="url(#insights-grain)" />
        
        {/* Triangle - direction/progress */}
        <path d="M 120 650 L 180 650 L 150 590 Z" stroke="#0F2A38" filter="url(#insights-grain)" />
      </g>

      {/* Matrix dots - data visualization pattern */}
      <g opacity="0.12" fill="#1E2A45">
        <circle cx="400" cy="150" r="2" />
        <circle cx="420" cy="150" r="2" />
        <circle cx="440" cy="150" r="2" />
        <circle cx="460" cy="150" r="2" />
        <circle cx="400" cy="170" r="2" />
        <circle cx="420" cy="170" r="2" />
        <circle cx="440" cy="170" r="2" />
        <circle cx="460" cy="170" r="2" />
        
        <circle cx="900" cy="700" r="2" />
        <circle cx="920" cy="700" r="2" />
        <circle cx="940" cy="700" r="2" />
        <circle cx="900" cy="720" r="2" />
        <circle cx="920" cy="720" r="2" />
        <circle cx="940" cy="720" r="2" />
      </g>

      <style>{`
        @keyframes insight-pulse-1 {
          0%, 100% { opacity: 0.2; stroke-dashoffset: 0; }
          50% { opacity: 0.4; stroke-dashoffset: -20; }
        }
        @keyframes insight-pulse-2 {
          0%, 100% { opacity: 0.2; stroke-dashoffset: 0; }
          50% { opacity: 0.35; stroke-dashoffset: -20; }
        }
        @keyframes insight-pulse-3 {
          0%, 100% { opacity: 0.2; stroke-dashoffset: 0; }
          50% { opacity: 0.3; stroke-dashoffset: -20; }
        }
        @keyframes insight-flow-1 {
          to { stroke-dashoffset: -120; }
        }
        @keyframes insight-flow-2 {
          to { stroke-dashoffset: -140; }
        }
        @keyframes insight-flow-3 {
          to { stroke-dashoffset: -160; }
        }

        .animate-insight-pulse-1 { animation: insight-pulse-1 4s ease-in-out infinite; }
        .animate-insight-pulse-2 { animation: insight-pulse-2 5s ease-in-out infinite; }
        .animate-insight-pulse-3 { animation: insight-pulse-3 6s ease-in-out infinite; }
        .animate-insight-flow-1 { animation: insight-flow-1 25s linear infinite; }
        .animate-insight-flow-2 { animation: insight-flow-2 30s linear infinite; }
        .animate-insight-flow-3 { animation: insight-flow-3 35s linear infinite; }
      `}</style>
    </svg>
  );
}