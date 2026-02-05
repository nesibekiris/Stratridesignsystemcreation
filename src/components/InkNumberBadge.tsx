interface InkNumberBadgeProps {
  number: string | number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'dark' | 'accent' | 'light';
}

export function InkNumberBadge({ 
  number, 
  size = 'md',
  color = 'accent' 
}: InkNumberBadgeProps) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-xl',
    md: 'w-16 h-16 text-2xl',
    lg: 'w-20 h-20 text-3xl',
  };

  const colorMap = {
    dark: '#1E2A45',
    accent: '#184A5A',
    light: '#9FB7C8',
  };

  const bgColor = colorMap[color];

  return (
    <div className="relative inline-block">
      <svg
        viewBox="0 0 80 80"
        className={sizeClasses[size]}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Hand-drawn brush filter */}
          <filter id={`inkBrush-${number}`} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.03" 
              numOctaves="2" 
              result="noise" 
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="2" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </defs>

        {/* Hand-drawn circle background */}
        <path
          d="M 40 8 
             C 57 8, 70 18, 72 40 
             C 71 59, 58 72, 40 72 
             C 21 71, 8 58, 8 40 
             C 9 20, 22 9, 40 8 Z"
          fill={bgColor}
          opacity="0.95"
          filter={`url(#inkBrush-${number})`}
        />

        {/* Number text */}
        <text
          x="40"
          y="50"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', serif"
          fontSize="32"
          fontWeight="500"
          fill="#FEFBF8"
          filter={`url(#inkBrush-${number})`}
        >
          {number}
        </text>
      </svg>
    </div>
  );
}
