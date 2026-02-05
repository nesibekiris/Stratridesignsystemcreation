interface HandDrawnNumberProps {
  number: string | number;
  className?: string;
  color?: string;
}

// Hand-drawn, uneven numbers in Japanese ink style
export function HandDrawnNumber({ number, className = '', color = '#184A5A' }: HandDrawnNumberProps) {
  const numStr = String(number).padStart(2, '0');
  
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id={`hand-texture-${number}`}>
          <feTurbulence baseFrequency="0.1" numOctaves="2" seed={Number(number) || 0} />
          <feDisplacementMap in="SourceGraphic" scale="1.5" />
        </filter>
      </defs>
      
      <g filter={`url(#hand-texture-${number})`}>
        <text
          x="50"
          y="70"
          fontSize="64"
          fontFamily="Cormorant Garamond, serif"
          fontWeight="500"
          fill={color}
          textAnchor="middle"
          style={{ fontStyle: 'italic' }}
        >
          {numStr}
        </text>
      </g>
    </svg>
  );
}

// Alternative: Number in a hand-drawn circle badge
export function HandDrawnNumberBadge({ number, className = '', color = '#184A5A' }: HandDrawnNumberProps) {
  const numStr = String(number);
  
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id={`badge-texture-${number}`}>
          <feTurbulence baseFrequency="0.08" numOctaves="2" seed={Number(number) * 7 || 0} />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
      </defs>
      
      {/* Uneven circle background */}
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke={color}
        strokeWidth="3"
        opacity="0.3"
        filter={`url(#badge-texture-${number})`}
      />
      <circle
        cx="50"
        cy="50"
        r="38"
        fill={`${color}15`}
        filter={`url(#badge-texture-${number})`}
      />
      
      {/* Hand-drawn number */}
      <text
        x="50"
        y="68"
        fontSize="48"
        fontFamily="Cormorant Garamond, serif"
        fontWeight="600"
        fill={color}
        textAnchor="middle"
        style={{ fontStyle: 'italic' }}
        filter={`url(#badge-texture-${number})`}
      >
        {numStr}
      </text>
    </svg>
  );
}

// Step number with ink-style decoration
export function StepNumber({ number, className = '', color = '#184A5A' }: HandDrawnNumberProps) {
  const num = Number(number);
  
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <filter id={`step-ink-${number}`} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
        </filter>
      </defs>
      
      {/* Subtle background circle */}
      <circle 
        cx="50" 
        cy="50" 
        r="38" 
        fill={color} 
        opacity="0.08" 
        filter={`url(#step-ink-${number})`} 
      />
      
      {/* Outer ring */}
      <circle 
        cx="50" 
        cy="50" 
        r="42" 
        fill="none" 
        stroke={color} 
        strokeWidth="1.5" 
        opacity="0.25" 
        filter={`url(#step-ink-${number})`} 
      />
      
      {/* Number text */}
      <text
        x="50"
        y="50"
        fontSize="48"
        fontFamily="Cormorant Garamond, serif"
        fontWeight="500"
        fill={color}
        textAnchor="middle"
        dominantBaseline="middle"
        opacity="0.9"
        filter={`url(#step-ink-${number})`}
      >
        {num}
      </text>
      
      {/* Small decorative dots - matching icon style */}
      <circle cx="50" cy="15" r="2.5" fill={color} opacity="0.4" filter={`url(#step-ink-${number})`} />
      <circle cx="85" cy="50" r="2" fill="#9FB7C8" opacity="0.5" filter={`url(#step-ink-${number})`} />
    </svg>
  );
}

// Inline number for diagrams (small, subtle)
export function DiagramNumber({ number, className = '', color = '#184A5A' }: HandDrawnNumberProps) {
  const numStr = String(number);
  
  return (
    <svg 
      viewBox="0 0 60 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="30"
        cy="30"
        r="24"
        fill={color}
        opacity="0.9"
      />
      <text
        x="30"
        y="42"
        fontSize="32"
        fontFamily="Cormorant Garamond, serif"
        fontWeight="600"
        fill="#FEFBF8"
        textAnchor="middle"
        style={{ fontStyle: 'italic' }}
      >
        {numStr}
      </text>
    </svg>
  );
}