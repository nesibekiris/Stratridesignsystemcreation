interface RailwayVisualProps {
  className?: string;
  lightMode?: boolean;
}

export function RailwayVisual({ className = '', lightMode = false }: RailwayVisualProps) {
  // STRATRI colors
  const colors = lightMode ? {
    cream: '#1E2A45',
    dark: '#FEFBF8',
    accent: '#9FB7C8',
    light: '#FEFBF8'
  } : {
    cream: '#FEFBF8',
    dark: '#1E2A45',
    accent: '#184A5A',
    light: '#9FB7C8'
  };

  // Wagons on the railway
  const wagons = [
    { id: 'ethics', label: 'Ethics compass' },
    { id: 'compliance', label: 'Compliance rules' },
    { id: 'governance', label: 'Governance operations' },
    { id: 'train', label: 'Train your business' },
    { id: 'systems', label: 'AI systems' }
  ];

  // Layout constants
  const canvasWidth = 1100;
  const canvasHeight = 340;
  const railStartX = 50;
  const railEndX = 1050;
  const railY = 140;
  const railGap = 6;
  
  // Engine position
  const engineX = 100;
  const engineY = railY - 35;
  const engineWidth = 70;
  const engineHeight = 55;
  
  // Wagon layout
  const firstWagonX = engineX + engineWidth + 40;
  const wagonWidth = 120;
  const wagonHeight = 65;
  const wagonGap = 20;
  const wagonY = railY - wagonHeight + 10;

  return (
    <svg 
      viewBox={`0 0 ${canvasWidth} ${canvasHeight}`} 
      className={className}
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      {/* Background */}
      <rect width={canvasWidth} height={canvasHeight} fill={colors.cream} />

      {/* Railway line */}
      <g stroke={colors.dark} strokeWidth="2.5" fill="none" opacity="0.4">
        {/* Top rail */}
        <line 
          x1={railStartX} 
          y1={railY} 
          x2={railEndX} 
          y2={railY}
          strokeLinecap="round"
        />
        {/* Bottom rail */}
        <line 
          x1={railStartX} 
          y1={railY + railGap} 
          x2={railEndX} 
          y2={railY + railGap}
          strokeLinecap="round"
        />
        
        {/* Sleepers */}
        {Array.from({ length: 15 }).map((_, i) => {
          const x = railStartX + (i * (railEndX - railStartX) / 14);
          return (
            <line 
              key={i}
              x1={x} 
              y1={railY - 4}
              x2={x}
              y2={railY + railGap + 4}
              strokeWidth="2"
              opacity="0.3"
            />
          );
        })}
      </g>

      {/* Engine (locomotive) */}
      <g>
        {/* Engine body */}
        <rect
          x={engineX}
          y={engineY}
          width={engineWidth}
          height={engineHeight - 10}
          rx="3"
          fill="white"
          stroke={colors.dark}
          strokeWidth="2.5"
        />
        {/* Engine front (nose) */}
        <path
          d={`M ${engineX} ${engineY + 15} L ${engineX - 15} ${engineY + 15} L ${engineX - 15} ${engineY + 30} L ${engineX} ${engineY + 30}`}
          fill="white"
          stroke={colors.dark}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Chimney */}
        <rect
          x={engineX + 15}
          y={engineY - 8}
          width="12"
          height="8"
          rx="2"
          fill="white"
          stroke={colors.dark}
          strokeWidth="2"
        />
        {/* Window */}
        <rect
          x={engineX + 40}
          y={engineY + 12}
          width="20"
          height="18"
          rx="2"
          fill="none"
          stroke={colors.dark}
          strokeWidth="2"
        />
        {/* Wheels */}
        <circle cx={engineX + 20} cy={railY + 3} r="6" fill={colors.dark} />
        <circle cx={engineX + 50} cy={railY + 3} r="6" fill={colors.dark} />
        
        {/* Connector to first wagon */}
        <line
          x1={engineX + engineWidth}
          y1={railY - 15}
          x2={firstWagonX}
          y2={railY - 15}
          stroke={colors.dark}
          strokeWidth="2"
          opacity="0.6"
        />
      </g>

      {/* Wagons */}
      {wagons.map((wagon, index) => {
        const x = firstWagonX + index * (wagonWidth + wagonGap);
        const y = wagonY;

        return (
          <g key={wagon.id}>
            {/* Wagon body */}
            <rect
              x={x}
              y={y}
              width={wagonWidth}
              height={wagonHeight}
              rx="4"
              fill="white"
              stroke={colors.dark}
              strokeWidth="2.5"
            />

            {/* Wheels */}
            <circle cx={x + 25} cy={railY + 3} r="6" fill={colors.dark} />
            <circle cx={x + wagonWidth - 25} cy={railY + 3} r="6" fill={colors.dark} />

            {/* Icon inside wagon */}
            <g transform={`translate(${x + wagonWidth / 2}, ${y + 30})`}>
              {/* Ethics Compass */}
              {wagon.id === 'ethics' && (
                <g>
                  <circle 
                    cx="0" 
                    cy="0" 
                    r="14" 
                    fill="none" 
                    stroke={colors.accent} 
                    strokeWidth="2.5"
                  />
                  <line 
                    x1="0" 
                    y1="-9" 
                    x2="0" 
                    y2="3"
                    stroke={colors.accent}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle 
                    cx="0" 
                    cy="0" 
                    r="2" 
                    fill={colors.accent}
                  />
                </g>
              )}

              {/* Compliance Rules */}
              {wagon.id === 'compliance' && (
                <g>
                  <path
                    d="M -11,-12 L 7,-12 L 7,-7 L 11,-7 L 11,12 L -11,12 Z"
                    fill="none"
                    stroke={colors.dark}
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <line x1="-6" y1="-5" x2="6" y2="-5" stroke={colors.dark} strokeWidth="1.5" />
                  <line x1="-6" y1="0" x2="6" y2="0" stroke={colors.dark} strokeWidth="1.5" />
                  <line x1="-6" y1="5" x2="4" y2="5" stroke={colors.dark} strokeWidth="1.5" />
                </g>
              )}

              {/* Governance Operations */}
              {wagon.id === 'governance' && (
                <g>
                  <rect x="-16" y="-6" width="9" height="9" rx="1.5" fill="none" stroke={colors.dark} strokeWidth="2.5" />
                  <rect x="-3" y="-6" width="9" height="9" rx="1.5" fill="none" stroke={colors.dark} strokeWidth="2.5" />
                  <rect x="10" y="-6" width="9" height="9" rx="1.5" fill="none" stroke={colors.dark} strokeWidth="2.5" />
                  <path 
                    d="M -7,-1.5 L -3,-1.5" 
                    stroke={colors.dark} 
                    strokeWidth="2" 
                    markerEnd="url(#arrow)"
                  />
                  <path 
                    d="M 6,-1.5 L 10,-1.5" 
                    stroke={colors.dark} 
                    strokeWidth="2" 
                    markerEnd="url(#arrow)"
                  />
                </g>
              )}

              {/* Train Your Business */}
              {wagon.id === 'train' && (
                <g>
                  <rect 
                    x="-13" 
                    y="-11" 
                    width="26" 
                    height="15" 
                    rx="2" 
                    fill="none" 
                    stroke={colors.accent} 
                    strokeWidth="2.5"
                  />
                  <circle cx="-6.5" cy="7" r="2.5" fill={colors.accent} opacity="0.7" />
                  <circle cx="0" cy="7" r="2.5" fill={colors.accent} opacity="0.7" />
                  <circle cx="6.5" cy="7" r="2.5" fill={colors.accent} opacity="0.7" />
                </g>
              )}

              {/* AI Systems */}
              {wagon.id === 'systems' && (
                <g>
                  <circle cx="-8" cy="-6" r="3" fill={colors.accent} />
                  <circle cx="8" cy="-6" r="3" fill={colors.accent} />
                  <circle cx="-8" cy="6" r="3" fill={colors.accent} />
                  <circle cx="8" cy="6" r="3" fill={colors.accent} />
                  <circle cx="0" cy="0" r="3" fill={colors.accent} />
                  <line x1="-8" y1="-6" x2="0" y2="0" stroke={colors.accent} strokeWidth="2" />
                  <line x1="8" y1="-6" x2="0" y2="0" stroke={colors.accent} strokeWidth="2" />
                  <line x1="-8" y1="6" x2="0" y2="0" stroke={colors.accent} strokeWidth="2" />
                  <line x1="8" y1="6" x2="0" y2="0" stroke={colors.accent} strokeWidth="2" />
                </g>
              )}
            </g>

            {/* Label below wagon */}
            <text
              x={x + wagonWidth / 2}
              y={railY + 40}
              textAnchor="middle"
              fontSize="12"
              fontFamily="IBM Plex Serif, Georgia, serif"
              fill={colors.dark}
              opacity="0.85"
            >
              {wagon.label}
            </text>

            {/* Connector to next wagon (except last) */}
            {index < wagons.length - 1 && (
              <line
                x1={x + wagonWidth}
                y1={railY - 15}
                x2={x + wagonWidth + wagonGap}
                y2={railY - 15}
                stroke={colors.dark}
                strokeWidth="2"
                opacity="0.6"
              />
            )}
          </g>
        );
      })}

      {/* R.A.I.L. Loop - positioned under "Train your business" wagon (index 3) */}
      <g>
        {/* Calculate position under 4th wagon */}
        <g transform={`translate(${firstWagonX + 3 * (wagonWidth + wagonGap) + wagonWidth / 2}, ${railY + 85})`}>
          {/* Loop circle */}
          <circle 
            cx="0" 
            cy="0"
            r="28" 
            fill="white"
            stroke={colors.accent}
            strokeWidth="2.5"
          />
          
          {/* Four points around the loop */}
          {[
            { angle: -90, label: 'R' },
            { angle: 0, label: 'A' },
            { angle: 90, label: 'I' },
            { angle: 180, label: 'L' }
          ].map((point, i) => {
            const angle = (point.angle * Math.PI) / 180;
            const px = Math.cos(angle) * 28;
            const py = Math.sin(angle) * 28;
            
            return (
              <g key={i}>
                <circle 
                  cx={px}
                  cy={py}
                  r="6"
                  fill={colors.accent}
                />
                <text
                  x={px}
                  y={py + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="9"
                  fontFamily="IBM Plex Serif, Georgia, serif"
                  fontWeight="600"
                  fill="white"
                >
                  {point.label}
                </text>
              </g>
            );
          })}

          {/* Center label */}
          <text
            x="0"
            y="0"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="8"
            fontFamily="IBM Plex Serif, Georgia, serif"
            fontWeight="600"
            fill={colors.dark}
            opacity="0.5"
          >
            RAIL
          </text>

          {/* Clean vertical connector line UP to the wagon */}
          <line
            x1="0"
            y1="-28"
            x2="0"
            y2={-(85 - (railY - wagonY + wagonHeight))}
            stroke={colors.accent}
            strokeWidth="2.5"
            opacity="0.7"
          />

          {/* Loop label below */}
          <text
            x="0"
            y="44"
            textAnchor="middle"
            fontSize="11"
            fontFamily="IBM Plex Serif, Georgia, serif"
            fill={colors.dark}
            opacity="0.75"
          >
            Operational loop (R.A.I.L.)
          </text>
        </g>
      </g>

      {/* Arrow marker definition */}
      <defs>
        <marker
          id="arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 6 3, 0 6" fill={colors.dark} />
        </marker>
      </defs>
    </svg>
  );
}