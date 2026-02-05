import React from 'react';

interface AboutVisualProps {
  className?: string;
}

// Three converging paths illustration (Section 1 - Who We Are)
export function ConvergingPaths({ className = '' }: AboutVisualProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Technology path (top) - #184A5A */}
      <path
        d="M 50 50 Q 150 80, 200 150"
        stroke="#184A5A"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      
      {/* Policy path (bottom left) - #1E2A45 */}
      <path
        d="M 80 250 Q 140 200, 200 150"
        stroke="#1E2A45"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      
      {/* Society path (bottom right) - #9FB7C8 */}
      <path
        d="M 320 250 Q 260 200, 200 150"
        stroke="#9FB7C8"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      
      {/* Central hub (STRATRI convergence point) */}
      <circle
        cx="200"
        cy="150"
        r="6"
        fill="#1E2A45"
      />
      
      {/* Three connectors from the hub */}
      <line x1="200" y1="150" x2="200" y2="135" stroke="#1E2A45" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="200" y1="150" x2="187" y2="163" stroke="#1E2A45" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="200" y1="150" x2="213" y2="163" stroke="#1E2A45" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Trivium diagram (Section 2 - The Trivium)
export function TriviumDiagram({ className = '' }: AboutVisualProps) {
  return (
    <svg
      viewBox="0 0 300 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Technology node (top) */}
      <circle
        cx="150"
        cy="80"
        r="35"
        stroke="#184A5A"
        strokeWidth="2"
        fill="none"
      />
      {/* Tech marker - mini cluster */}
      <circle cx="145" cy="75" r="3" fill="#184A5A" opacity="0.6" />
      <circle cx="155" cy="75" r="3" fill="#184A5A" opacity="0.6" />
      <circle cx="150" cy="85" r="3" fill="#184A5A" opacity="0.6" />
      
      {/* Policy node (bottom left) */}
      <circle
        cx="90"
        cy="200"
        r="35"
        stroke="#1E2A45"
        strokeWidth="2"
        fill="none"
      />
      {/* Policy marker - small bar */}
      <rect x="80" y="195" width="20" height="4" fill="#1E2A45" opacity="0.6" />
      <rect x="80" y="203" width="20" height="4" fill="#1E2A45" opacity="0.6" />
      
      {/* Society node (bottom right) */}
      <circle
        cx="210"
        cy="200"
        r="35"
        stroke="#9FB7C8"
        strokeWidth="2"
        fill="none"
      />
      {/* Society marker - multi-dot cluster */}
      <circle cx="205" cy="195" r="2.5" fill="#9FB7C8" opacity="0.6" />
      <circle cx="215" cy="195" r="2.5" fill="#9FB7C8" opacity="0.6" />
      <circle cx="210" cy="203" r="2.5" fill="#9FB7C8" opacity="0.6" />
      <circle cx="200" cy="203" r="2.5" fill="#9FB7C8" opacity="0.6" />
      <circle cx="220" cy="203" r="2.5" fill="#9FB7C8" opacity="0.6" />
      
      {/* Connecting lines */}
      <line x1="150" y1="115" x2="90" y2="165" stroke="#1E2A45" strokeWidth="1.5" opacity="0.3" />
      <line x1="150" y1="115" x2="210" y2="165" stroke="#1E2A45" strokeWidth="1.5" opacity="0.3" />
      <line x1="90" y1="165" x2="210" y2="165" stroke="#1E2A45" strokeWidth="1.5" opacity="0.3" />
      
      {/* Central decision point (faint dot) */}
      <circle
        cx="150"
        cy="140"
        r="4"
        fill="#1E2A45"
        opacity="0.2"
      />
    </svg>
  );
}

// Governance as Rails (Section 3 - Why STRATRI Exists)
export function GovernanceRails({ className = '', lightMode = false }: AboutVisualProps & { lightMode?: boolean }) {
  const railColor = lightMode ? '#9FB7C8' : '#184A5A';
  const blockColor = lightMode ? '#FEFBF8' : '#1E2A45';
  
  return (
    <svg
      viewBox="0 0 300 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rails - two parallel lines */}
      <line x1="40" y1="60" x2="260" y2="60" stroke={railColor} strokeWidth="2" opacity="0.8" />
      <line x1="40" y1="80" x2="260" y2="80" stroke={railColor} strokeWidth="2" opacity="0.8" />
      
      {/* Sleepers (cross ties) */}
      <line x1="60" y1="60" x2="60" y2="80" stroke={railColor} strokeWidth="2" opacity="0.5" />
      <line x1="100" y1="60" x2="100" y2="80" stroke={railColor} strokeWidth="2" opacity="0.5" />
      <line x1="140" y1="60" x2="140" y2="80" stroke={railColor} strokeWidth="2" opacity="0.5" />
      <line x1="180" y1="60" x2="180" y2="80" stroke={railColor} strokeWidth="2" opacity="0.5" />
      <line x1="220" y1="60" x2="220" y2="80" stroke={railColor} strokeWidth="2" opacity="0.5" />
      
      {/* Strategy block resting on rails */}
      <rect
        x="120"
        y="30"
        width="60"
        height="25"
        stroke={blockColor}
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

// Minimal principle icons
export function NetworkIcon({ className = '' }: AboutVisualProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="8" x2="12" y2="14" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="14" x2="7" y2="17" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="14" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ShieldIcon({ className = '' }: AboutVisualProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LensIcon({ className = '' }: AboutVisualProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function BookIcon({ className = '' }: AboutVisualProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5v-13A2.5 2.5 0 0 1 6.5 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="12" y1="7" x2="12" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}