interface BlogCoverProps {
  variant: 'governance' | 'policy' | 'literacy' | 'research' | 'framework' | 'wrapped' | 'concentric' | 'waves' | 'spiral';
  className?: string;
}

// Minimal blog cover templates matching the reference designs
export function BlogCoverTemplate({ variant, className = '' }: BlogCoverProps) {
  const variants = {
    governance: <GovernanceCover />,
    policy: <PolicyCover />,
    literacy: <LiteracyCover />,
    research: <ResearchCover />,
    framework: <FrameworkCover />,
    wrapped: <WrappedCover />,
    concentric: <ConcentricCover />,
    waves: <WavesCover />,
    spiral: <SpiralCover />
  };

  return (
    <div className={`w-full h-full bg-white ${className}`}>
      {variants[variant]}
    </div>
  );
}

// Governance (Articles) - Tree/branching structure
function GovernanceCover() {
  return (
    <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="160" fill="white" />
      
      {/* Y-shaped tree structure */}
      <g>
        {/* Main trunk - dark */}
        <line x1="200" y1="130" x2="200" y2="80" stroke="#1E2A45" strokeWidth="2" strokeLinecap="round" />
        
        {/* Left branch - dark */}
        <line x1="200" y1="80" x2="150" y2="50" stroke="#1E2A45" strokeWidth="2" strokeLinecap="round" />
        
        {/* Right branch - dark */}
        <line x1="200" y1="80" x2="250" y2="50" stroke="#1E2A45" strokeWidth="2" strokeLinecap="round" />
        
        {/* Left sub-branches - light */}
        <line x1="150" y1="50" x2="130" y2="30" stroke="#9FB7C8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="150" y1="50" x2="160" y2="25" stroke="#9FB7C8" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Right sub-branches - light */}
        <line x1="250" y1="50" x2="240" y2="25" stroke="#9FB7C8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="250" y1="50" x2="270" y2="30" stroke="#9FB7C8" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Nodes - light gray */}
        <circle cx="130" cy="30" r="3.5" fill="#9FB7C8" />
        <circle cx="160" cy="25" r="3.5" fill="#9FB7C8" />
        <circle cx="240" cy="25" r="3.5" fill="#9FB7C8" />
        <circle cx="270" cy="30" r="3.5" fill="#9FB7C8" />
        
        {/* Main nodes - dark */}
        <circle cx="150" cy="50" r="4.5" fill="#1E2A45" />
        <circle cx="250" cy="50" r="4.5" fill="#1E2A45" />
        <circle cx="200" cy="80" r="5" fill="#1E2A45" />
      </g>
    </svg>
  );
}

// Policy - Layered boxes/hierarchy
function PolicyCover() {
  return (
    <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="160" fill="white" />
      
      {/* Stacked boxes with connectors */}
      <g>
        {/* Top box - darker stroke */}
        <rect x="150" y="20" width="100" height="28" rx="3" stroke="#1E2A45" strokeWidth="2" fill="none" />
        
        {/* Connector */}
        <line x1="200" y1="48" x2="200" y2="60" stroke="#184A5A" strokeWidth="1.5" />
        
        {/* Second box - teal */}
        <rect x="135" y="60" width="130" height="28" rx="3" stroke="#184A5A" strokeWidth="2" fill="none" />
        
        {/* Connector */}
        <line x1="200" y1="88" x2="200" y2="100" stroke="#184A5A" strokeWidth="1.5" />
        
        {/* Third box - darker */}
        <rect x="120" y="100" width="160" height="28" rx="3" stroke="#1E2A45" strokeWidth="2" fill="none" />
        
        {/* Connector */}
        <line x1="200" y1="128" x2="200" y2="138" stroke="#9FB7C8" strokeWidth="1.5" />
        
        {/* Bottom box - light */}
        <rect x="105" y="138" width="190" height="18" rx="2" stroke="#9FB7C8" strokeWidth="1.5" fill="none" opacity="0.6" />
      </g>
    </svg>
  );
}

// Literacy (Techletter) - Dot matrix pattern
function LiteracyCover() {
  return (
    <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="160" fill="white" />
      
      {/* 3 rows of dots with varying colors */}
      <g>
        {/* Top row - lightest */}
        <circle cx="110" cy="50" r="4" fill="#9FB7C8" opacity="0.5" />
        <circle cx="140" cy="50" r="4" fill="#9FB7C8" opacity="0.5" />
        <circle cx="170" cy="50" r="4" fill="#9FB7C8" opacity="0.5" />
        <circle cx="200" cy="50" r="4" fill="#9FB7C8" opacity="0.5" />
        <circle cx="230" cy="50" r="4" fill="#9FB7C8" opacity="0.5" />
        <circle cx="260" cy="50" r="4" fill="#9FB7C8" opacity="0.5" />
        <circle cx="290" cy="50" r="4" fill="#9FB7C8" opacity="0.5" />
        
        {/* Middle row - dark */}
        <circle cx="110" cy="80" r="4.5" fill="#1E2A45" />
        <circle cx="140" cy="80" r="4.5" fill="#1E2A45" />
        <circle cx="170" cy="80" r="4.5" fill="#1E2A45" />
        <circle cx="200" cy="80" r="4.5" fill="#1E2A45" />
        <circle cx="230" cy="80" r="4.5" fill="#1E2A45" />
        <circle cx="260" cy="80" r="4.5" fill="#1E2A45" />
        <circle cx="290" cy="80" r="4.5" fill="#1E2A45" />
        
        {/* Bottom row - teal */}
        <circle cx="110" cy="110" r="4.5" fill="#184A5A" />
        <circle cx="140" cy="110" r="4.5" fill="#184A5A" />
        <circle cx="170" cy="110" r="4.5" fill="#184A5A" />
        <circle cx="200" cy="110" r="4.5" fill="#184A5A" />
        <circle cx="230" cy="110" r="4.5" fill="#184A5A" />
        <circle cx="260" cy="110" r="4.5" fill="#184A5A" />
        <circle cx="290" cy="110" r="4.5" fill="#184A5A" />
      </g>
    </svg>
  );
}

// Research (Reports) - Grid of squares
function ResearchCover() {
  return (
    <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="160" fill="white" />
      
      {/* 2x3 grid of squares */}
      <g>
        {/* Top row */}
        <rect x="80" y="40" width="60" height="50" rx="2" stroke="#1E2A45" strokeWidth="2.5" fill="none" />
        <rect x="150" y="40" width="60" height="50" rx="2" stroke="#1E2A45" strokeWidth="2.5" fill="#F0F4F8" fillOpacity="0.3" />
        <rect x="220" y="40" width="60" height="50" rx="2" stroke="#184A5A" strokeWidth="2.5" fill="none" />
        
        {/* Bottom row */}
        <rect x="80" y="100" width="60" height="50" rx="2" stroke="#1E2A45" strokeWidth="2.5" fill="#F0F4F8" fillOpacity="0.3" />
        <rect x="150" y="100" width="60" height="50" rx="2" stroke="#1E2A45" strokeWidth="2.5" fill="none" />
      </g>
    </svg>
  );
}

// Framework - Hexagon honeycomb pattern
function FrameworkCover() {
  return (
    <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="160" fill="white" />
      
      {/* Hexagon pattern */}
      <g>
        {/* Top row - light */}
        <path d="M 170 25 L 185 34 L 185 52 L 170 61 L 155 52 L 155 34 Z" stroke="#9FB7C8" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M 215 25 L 230 34 L 230 52 L 215 61 L 200 52 L 200 34 Z" stroke="#9FB7C8" strokeWidth="1.5" fill="none" opacity="0.6" />
        
        {/* Middle row - darker */}
        <path d="M 147 61 L 162 70 L 162 88 L 147 97 L 132 88 L 132 70 Z" stroke="#1E2A45" strokeWidth="2" fill="none" />
        <path d="M 192 61 L 207 70 L 207 88 L 192 97 L 177 88 L 177 70 Z" stroke="#184A5A" strokeWidth="2" fill="none" />
        <path d="M 237 61 L 252 70 L 252 88 L 237 97 L 222 88 L 222 70 Z" stroke="#1E2A45" strokeWidth="2" fill="none" />
        
        {/* Bottom row - light */}
        <path d="M 170 97 L 185 106 L 185 124 L 170 133 L 155 124 L 155 106 Z" stroke="#9FB7C8" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M 215 97 L 230 106 L 230 124 L 215 133 L 200 124 L 200 106 Z" stroke="#9FB7C8" strokeWidth="1.5" fill="none" opacity="0.6" />
      </g>
    </svg>
  );
}

// Wrapped - Three circles
function WrappedCover() {
  return (
    <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="160" fill="white" />
      
      {/* Three circles of different sizes */}
      <g>
        {/* Large circle - dark outline */}
        <circle cx="150" cy="85" r="42" stroke="#1E2A45" strokeWidth="2.5" fill="none" />
        
        {/* Medium circle - dark filled */}
        <circle cx="220" cy="65" r="32" stroke="#1E2A45" strokeWidth="2.5" fill="#F0F4F8" fillOpacity="0.4" />
        
        {/* Small circle - teal */}
        <circle cx="255" cy="105" r="22" stroke="#184A5A" strokeWidth="2.5" fill="none" />
      </g>
    </svg>
  );
}

// Concentric - Concentric circles
function ConcentricCover() {
  return (
    <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="160" fill="white" />
      
      {/* Concentric circles */}
      <g>
        <circle cx="200" cy="80" r="50" stroke="#1E2A45" strokeWidth="2.5" fill="none" />
        <circle cx="200" cy="80" r="35" stroke="#184A5A" strokeWidth="2.5" fill="none" />
        <circle cx="200" cy="80" r="20" stroke="#9FB7C8" strokeWidth="2.5" fill="none" />
      </g>
    </svg>
  );
}

// Waves - Wave pattern
function WavesCover() {
  return (
    <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="160" fill="white" />
      
      {/* Wave pattern */}
      <g>
        <path d="M 50 100 Q 100 50 150 100 Q 200 150 250 100 Q 300 50 350 100" stroke="#1E2A45" strokeWidth="2.5" fill="none" />
        <path d="M 50 120 Q 100 70 150 120 Q 200 170 250 120 Q 300 70 350 120" stroke="#184A5A" strokeWidth="2.5" fill="none" />
        <path d="M 50 140 Q 100 90 150 140 Q 200 190 250 140 Q 300 90 350 140" stroke="#9FB7C8" strokeWidth="2.5" fill="none" />
      </g>
    </svg>
  );
}

// Spiral - Spiral pattern
function SpiralCover() {
  return (
    <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="160" fill="white" />
      
      {/* Spiral pattern */}
      <g>
        <path d="M 200 80 Q 220 60 240 80 Q 260 100 240 120 Q 220 140 200 120 Q 180 100 200 80" stroke="#1E2A45" strokeWidth="2.5" fill="none" />
        <path d="M 200 80 Q 230 50 260 80 Q 290 110 260 140 Q 230 170 200 140 Q 170 110 200 80" stroke="#184A5A" strokeWidth="2.5" fill="none" />
        <path d="M 200 80 Q 240 40 280 80 Q 320 120 280 160 Q 240 200 200 160 Q 160 120 200 80" stroke="#9FB7C8" strokeWidth="2.5" fill="none" />
      </g>
    </svg>
  );
}