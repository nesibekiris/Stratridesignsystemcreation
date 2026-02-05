import React from 'react';

interface IconProps {
  className?: string;
}

// Hand-drawn Japanese ink style filter component
const InkFilter = ({ id }: { id: string }) => (
  <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
  </filter>
);

export function TechnologyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <InkFilter id="tech-ink" />
      </defs>
      {/* Circuit nodes - hand-drawn */}
      <circle cx="50" cy="30" r="8" fill="#184A5A" opacity="0.9" filter="url(#tech-ink)" />
      <circle cx="30" cy="60" r="8" fill="#1E2A45" opacity="0.9" filter="url(#tech-ink)" />
      <circle cx="70" cy="60" r="8" fill="#184A5A" opacity="0.9" filter="url(#tech-ink)" />
      <circle cx="50" cy="75" r="6" fill="#9FB7C8" opacity="0.9" filter="url(#tech-ink)" />
      
      {/* Connecting lines - slightly uneven */}
      <path d="M 50 30 L 30 60" stroke="#1E2A45" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" filter="url(#tech-ink)" />
      <path d="M 50 30 L 70 60" stroke="#184A5A" strokeWidth="2.5" opacity="0.6" strokeLinecap="round" filter="url(#tech-ink)" />
      <path d="M 30 60 L 50 75" stroke="#1E2A45" strokeWidth="2" opacity="0.5" strokeLinecap="round" filter="url(#tech-ink)" />
      <path d="M 70 60 L 50 75" stroke="#184A5A" strokeWidth="2" opacity="0.5" strokeLinecap="round" filter="url(#tech-ink)" />
    </svg>
  );
}

export function PolicyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <InkFilter id="policy-ink" />
      </defs>
      {/* Balance/pillar structure - hand-drawn */}
      <rect x="25" y="40" width="12" height="45" fill="#1E2A45" opacity="0.7" filter="url(#policy-ink)" />
      <rect x="63" y="40" width="12" height="45" fill="#184A5A" opacity="0.7" filter="url(#policy-ink)" />
      <rect x="20" y="32" width="60" height="6" fill="#1E2A45" opacity="0.8" filter="url(#policy-ink)" />
      <rect x="15" y="85" width="70" height="4" fill="#9FB7C8" opacity="0.6" filter="url(#policy-ink)" />
      
      {/* Balance point */}
      <circle cx="50" cy="35" r="5" fill="#184A5A" opacity="0.9" filter="url(#policy-ink)" />
    </svg>
  );
}

export function SocietyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <InkFilter id="society-ink" />
      </defs>
      {/* CANONICAL SOCIETY ICON - Connected people representing community */}
      
      {/* Central person/node - larger, representing collective center */}
      <circle cx="50" cy="45" r="8" fill="#184A5A" opacity="0.95" filter="url(#society-ink)" />
      <circle cx="50" cy="45" r="4" fill="#FEFBF8" opacity="0.3" filter="url(#society-ink)" />
      
      {/* Surrounding people/nodes - forming community circle */}
      {/* Top */}
      <circle cx="50" cy="20" r="6" fill="#1E2A45" opacity="0.9" filter="url(#society-ink)" />
      <circle cx="50" cy="20" r="3" fill="#FEFBF8" opacity="0.25" filter="url(#society-ink)" />
      
      {/* Top Right */}
      <circle cx="73" cy="30" r="6" fill="#9FB7C8" opacity="0.9" filter="url(#society-ink)" />
      <circle cx="73" cy="30" r="3" fill="#FEFBF8" opacity="0.25" filter="url(#society-ink)" />
      
      {/* Right */}
      <circle cx="80" cy="50" r="6" fill="#184A5A" opacity="0.85" filter="url(#society-ink)" />
      <circle cx="80" cy="50" r="3" fill="#FEFBF8" opacity="0.25" filter="url(#society-ink)" />
      
      {/* Bottom Right */}
      <circle cx="68" cy="68" r="6" fill="#1E2A45" opacity="0.85" filter="url(#society-ink)" />
      <circle cx="68" cy="68" r="3" fill="#FEFBF8" opacity="0.25" filter="url(#society-ink)" />
      
      {/* Bottom Left */}
      <circle cx="32" cy="68" r="6" fill="#9FB7C8" opacity="0.85" filter="url(#society-ink)" />
      <circle cx="32" cy="68" r="3" fill="#FEFBF8" opacity="0.25" filter="url(#society-ink)" />
      
      {/* Left */}
      <circle cx="20" cy="50" r="6" fill="#1E2A45" opacity="0.85" filter="url(#society-ink)" />
      <circle cx="20" cy="50" r="3" fill="#FEFBF8" opacity="0.25" filter="url(#society-ink)" />
      
      {/* Top Left */}
      <circle cx="27" cy="30" r="6" fill="#184A5A" opacity="0.9" filter="url(#society-ink)" />
      <circle cx="27" cy="30" r="3" fill="#FEFBF8" opacity="0.25" filter="url(#society-ink)" />
      
      {/* Connection lines - representing relationships and community bonds */}
      {/* From center to all surrounding nodes */}
      <path d="M 50 37 L 50 26" stroke="#184A5A" strokeWidth="2" opacity="0.5" strokeLinecap="round" filter="url(#society-ink)" />
      <path d="M 56 40 L 67 34" stroke="#9FB7C8" strokeWidth="2" opacity="0.5" strokeLinecap="round" filter="url(#society-ink)" />
      <path d="M 58 48 L 74 50" stroke="#184A5A" strokeWidth="2" opacity="0.45" strokeLinecap="round" filter="url(#society-ink)" />
      <path d="M 56 51 L 63 63" stroke="#1E2A45" strokeWidth="2" opacity="0.45" strokeLinecap="round" filter="url(#society-ink)" />
      <path d="M 44 51 L 37 63" stroke="#9FB7C8" strokeWidth="2" opacity="0.45" strokeLinecap="round" filter="url(#society-ink)" />
      <path d="M 42 48 L 26 50" stroke="#1E2A45" strokeWidth="2" opacity="0.45" strokeLinecap="round" filter="url(#society-ink)" />
      <path d="M 44 40 L 33 34" stroke="#184A5A" strokeWidth="2" opacity="0.5" strokeLinecap="round" filter="url(#society-ink)" />
      
      {/* Outer subtle connections - representing extended network */}
      <path d="M 50 26 Q 62 24 68 28" stroke="#9FB7C8" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" filter="url(#society-ink)" />
      <path d="M 74 56 Q 76 62 70 66" stroke="#184A5A" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" filter="url(#society-ink)" />
      <path d="M 38 70 Q 50 75 62 70" stroke="#1E2A45" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" filter="url(#society-ink)" />
      <path d="M 26 56 Q 22 62 28 66" stroke="#9FB7C8" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" filter="url(#society-ink)" />
      <path d="M 32 28 Q 20 24 27 20" stroke="#1E2A45" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" filter="url(#society-ink)" />
    </svg>
  );
}

export function StrategyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <InkFilter id="strategy-ink" />
      </defs>
      {/* Strategic dial - hand-drawn navigation instrument */}
      
      {/* Outer dial ring */}
      <circle cx="50" cy="50" r="32" fill="none" stroke="#184A5A" strokeWidth="2.5" opacity="0.85" filter="url(#strategy-ink)" />
      
      {/* Inner measurement ring */}
      <circle cx="50" cy="50" r="22" fill="none" stroke="#9FB7C8" strokeWidth="2" opacity="0.7" filter="url(#strategy-ink)" />
      
      {/* Cardinal direction markers - 4 points */}
      <circle cx="50" cy="18" r="3.5" fill="#1E2A45" opacity="0.9" filter="url(#strategy-ink)" />
      <circle cx="82" cy="50" r="3.5" fill="#1E2A45" opacity="0.9" filter="url(#strategy-ink)" />
      <circle cx="50" cy="82" r="3.5" fill="#1E2A45" opacity="0.9" filter="url(#strategy-ink)" />
      <circle cx="18" cy="50" r="3.5" fill="#1E2A45" opacity="0.9" filter="url(#strategy-ink)" />
      
      {/* Secondary markers - 4 intercardinal points */}
      <circle cx="64" cy="28" r="2.5" fill="#9FB7C8" opacity="0.75" filter="url(#strategy-ink)" />
      <circle cx="72" cy="64" r="2.5" fill="#9FB7C8" opacity="0.75" filter="url(#strategy-ink)" />
      <circle cx="36" cy="72" r="2.5" fill="#9FB7C8" opacity="0.75" filter="url(#strategy-ink)" />
      <circle cx="28" cy="36" r="2.5" fill="#9FB7C8" opacity="0.75" filter="url(#strategy-ink)" />
      
      {/* Central pivot point */}
      <circle cx="50" cy="50" r="7" fill="#184A5A" opacity="0.95" filter="url(#strategy-ink)" />
      
      {/* Strategic direction needle - pointing toward value alignment (NE) */}
      <path d="M 50 50 L 66 34" stroke="#1E2A45" strokeWidth="3.5" opacity="0.95" strokeLinecap="round" filter="url(#strategy-ink)" />
      <circle cx="66" cy="34" r="4" fill="#1E2A45" opacity="0.95" filter="url(#strategy-ink)" />
      
      {/* Subtle tick marks around dial */}
      <rect x="48.5" y="13" width="3" height="2" fill="#184A5A" opacity="0.5" filter="url(#strategy-ink)" />
      <rect x="85" y="48.5" width="2" height="3" fill="#184A5A" opacity="0.5" filter="url(#strategy-ink)" />
      <rect x="48.5" y="85" width="3" height="2" fill="#184A5A" opacity="0.5" filter="url(#strategy-ink)" />
      <rect x="13" y="48.5" width="2" height="3" fill="#184A5A" opacity="0.5" filter="url(#strategy-ink)" />
    </svg>
  );
}

export function GovernanceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <InkFilter id="gov-ink" />
      </defs>
      {/* Governance structure - hand-drawn pillars */}
      <rect x="20" y="50" width="8" height="35" fill="#1E2A45" opacity="0.7" filter="url(#gov-ink)" />
      <rect x="40" y="40" width="8" height="45" fill="#184A5A" opacity="0.75" filter="url(#gov-ink)" />
      <rect x="60" y="45" width="8" height="40" fill="#1E2A45" opacity="0.7" filter="url(#gov-ink)" />
      <rect x="72" y="55" width="8" height="30" fill="#9FB7C8" opacity="0.7" filter="url(#gov-ink)" />
      
      {/* Connection line */}
      <line x1="15" y1="85" x2="85" y2="85" stroke="#184A5A" strokeWidth="2.5" opacity="0.5" strokeLinecap="round" filter="url(#gov-ink)" />
    </svg>
  );
}

export function ResearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <InkFilter id="research-ink" />
      </defs>
      {/* Research nodes and connections */}
      <circle cx="50" cy="30" r="12" fill="none" stroke="#184A5A" strokeWidth="2.5" opacity="0.7" filter="url(#research-ink)" />
      <circle cx="50" cy="30" r="4" fill="#184A5A" opacity="0.9" filter="url(#research-ink)" />
      
      <circle cx="30" cy="65" r="8" fill="#1E2A45" opacity="0.8" filter="url(#research-ink)" />
      <circle cx="70" cy="65" r="8" fill="#9FB7C8" opacity="0.8" filter="url(#research-ink)" />
      
      <line x1="50" y1="40" x2="30" y2="60" stroke="#1E2A45" strokeWidth="2" opacity="0.5" strokeLinecap="round" filter="url(#research-ink)" />
      <line x1="50" y1="40" x2="70" y2="60" stroke="#9FB7C8" strokeWidth="2" opacity="0.5" strokeLinecap="round" filter="url(#research-ink)" />
    </svg>
  );
}

export function PolicyAffairsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <InkFilter id="affairs-ink" />
      </defs>
      {/* Policy document/layers - hand-drawn */}
      <rect x="25" y="25" width="45" height="8" fill="#1E2A45" opacity="0.6" filter="url(#affairs-ink)" />
      <rect x="25" y="40" width="50" height="8" fill="#184A5A" opacity="0.7" filter="url(#affairs-ink)" />
      <rect x="25" y="55" width="40" height="8" fill="#9FB7C8" opacity="0.6" filter="url(#affairs-ink)" />
      <rect x="25" y="70" width="48" height="8" fill="#1E2A45" opacity="0.65" filter="url(#affairs-ink)" />
      
      {/* Accent mark */}
      <circle cx="80" cy="45" r="6" fill="#184A5A" opacity="0.8" filter="url(#affairs-ink)" />
    </svg>
  );
}

// SERVICE ICONS - STRATRI Design System

export function AIStrategyMaturityIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <InkFilter id="strategy-maturity-ink" />
      </defs>
      {/* Compass/pathfinding with maturity progression - hand-drawn */}
      
      {/* Compass circle - strategic navigation */}
      <circle cx="50" cy="50" r="28" fill="none" stroke="#1E2A45" strokeWidth="2.5" opacity="0.85" filter="url(#strategy-maturity-ink)" />
      
      {/* Cardinal direction markers */}
      <circle cx="50" cy="22" r="4" fill="#184A5A" opacity="0.9" filter="url(#strategy-maturity-ink)" />
      <circle cx="78" cy="50" r="4" fill="#9FB7C8" opacity="0.85" filter="url(#strategy-maturity-ink)" />
      <circle cx="50" cy="78" r="4" fill="#184A5A" opacity="0.85" filter="url(#strategy-maturity-ink)" />
      <circle cx="22" cy="50" r="4" fill="#9FB7C8" opacity="0.85" filter="url(#strategy-maturity-ink)" />
      
      {/* Center compass point */}
      <circle cx="50" cy="50" r="6" fill="#1E2A45" opacity="0.95" filter="url(#strategy-maturity-ink)" />
      
      {/* Compass needle pointing to strategic direction (NE) */}
      <path d="M 50 50 L 64 36" stroke="#184A5A" strokeWidth="3" opacity="0.9" strokeLinecap="round" filter="url(#strategy-maturity-ink)" />
      <circle cx="64" cy="36" r="3.5" fill="#184A5A" opacity="0.95" filter="url(#strategy-maturity-ink)" />
      
      {/* Maturity progression path - subtle arc showing growth */}
      <path 
        d="M 30 70 Q 40 60 50 56 Q 60 52 70 48" 
        stroke="#9FB7C8" 
        strokeWidth="2.5" 
        fill="none" 
        opacity="0.65" 
        strokeLinecap="round" 
        strokeDasharray="4 3"
        filter="url(#strategy-maturity-ink)" 
      />
      
      {/* Milestone markers on path */}
      <circle cx="30" cy="70" r="3" fill="#9FB7C8" opacity="0.8" filter="url(#strategy-maturity-ink)" />
      <circle cx="50" cy="56" r="3" fill="#9FB7C8" opacity="0.85" filter="url(#strategy-maturity-ink)" />
      <circle cx="70" cy="48" r="3" fill="#9FB7C8" opacity="0.9" filter="url(#strategy-maturity-ink)" />
    </svg>
  );
}

export function AIGovernanceEthicsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <InkFilter id="governance-ethics-ink" />
      </defs>
      {/* Balanced pillars with ethical framework - hand-drawn */}
      
      {/* Three main pillars - representing governance structure */}
      <rect x="20" y="45" width="10" height="40" fill="#1E2A45" opacity="0.85" filter="url(#governance-ethics-ink)" />
      <rect x="45" y="40" width="10" height="45" fill="#184A5A" opacity="0.9" filter="url(#governance-ethics-ink)" />
      <rect x="70" y="45" width="10" height="40" fill="#1E2A45" opacity="0.85" filter="url(#governance-ethics-ink)" />
      
      {/* Top connecting beam - unified framework */}
      <rect x="15" y="33" width="70" height="5" fill="#1E2A45" opacity="0.9" filter="url(#governance-ethics-ink)" />
      
      {/* Base foundation */}
      <rect x="12" y="85" width="76" height="4" fill="#9FB7C8" opacity="0.7" filter="url(#governance-ethics-ink)" />
      
      {/* Ethical balance point - centered above */}
      <circle cx="50" cy="25" r="6" fill="#184A5A" opacity="0.95" filter="url(#governance-ethics-ink)" />
      
      {/* Connecting lines from balance point to pillars - showing ethical oversight */}
      <path d="M 50 31 L 25 45" stroke="#184A5A" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" filter="url(#governance-ethics-ink)" />
      <path d="M 50 31 L 50 40" stroke="#184A5A" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" filter="url(#governance-ethics-ink)" />
      <path d="M 50 31 L 75 45" stroke="#184A5A" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" filter="url(#governance-ethics-ink)" />
      
      {/* Principles markers on pillars */}
      <rect x="22" y="55" width="6" height="3" fill="#FEFBF8" opacity="0.4" filter="url(#governance-ethics-ink)" />
      <rect x="47" y="52" width="6" height="3" fill="#FEFBF8" opacity="0.4" filter="url(#governance-ethics-ink)" />
      <rect x="72" y="55" width="6" height="3" fill="#FEFBF8" opacity="0.4" filter="url(#governance-ethics-ink)" />
    </svg>
  );
}

export function MarketPolicyResearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <InkFilter id="market-research-ink" />
      </defs>
      {/* Research nodes with market/policy insights - hand-drawn */}
      
      {/* Central research hub */}
      <circle cx="50" cy="45" r="12" fill="none" stroke="#184A5A" strokeWidth="2.5" opacity="0.85" filter="url(#market-research-ink)" />
      <circle cx="50" cy="45" r="5" fill="#184A5A" opacity="0.95" filter="url(#market-research-ink)" />
      
      {/* Market insight nodes - top layer */}
      <circle cx="30" cy="25" r="7" fill="#9FB7C8" opacity="0.9" filter="url(#market-research-ink)" />
      <circle cx="70" cy="25" r="7" fill="#9FB7C8" opacity="0.9" filter="url(#market-research-ink)" />
      
      {/* Policy insight nodes - bottom layer */}
      <circle cx="25" cy="70" r="8" fill="#1E2A45" opacity="0.9" filter="url(#market-research-ink)" />
      <circle cx="75" cy="70" r="8" fill="#1E2A45" opacity="0.9" filter="url(#market-research-ink)" />
      
      {/* Connecting research lines - showing analysis flow */}
      <path d="M 50 33 L 35 28" stroke="#9FB7C8" strokeWidth="2" opacity="0.6" strokeLinecap="round" filter="url(#market-research-ink)" />
      <path d="M 50 33 L 65 28" stroke="#9FB7C8" strokeWidth="2" opacity="0.6" strokeLinecap="round" filter="url(#market-research-ink)" />
      <path d="M 42 53 L 30 64" stroke="#1E2A45" strokeWidth="2" opacity="0.6" strokeLinecap="round" filter="url(#market-research-ink)" />
      <path d="M 58 53 L 70 64" stroke="#1E2A45" strokeWidth="2" opacity="0.6" strokeLinecap="round" filter="url(#market-research-ink)" />
      
      {/* Cross-connections showing integrated insights */}
      <path d="M 35 30 Q 28 45 28 62" stroke="#184A5A" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" strokeDasharray="3 2" filter="url(#market-research-ink)" />
      <path d="M 65 30 Q 72 45 72 62" stroke="#184A5A" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" strokeDasharray="3 2" filter="url(#market-research-ink)" />
      
      {/* Data points - small markers showing research depth */}
      <circle cx="50" cy="25" r="2.5" fill="#184A5A" opacity="0.7" filter="url(#market-research-ink)" />
      <circle cx="20" cy="50" r="2.5" fill="#9FB7C8" opacity="0.7" filter="url(#market-research-ink)" />
      <circle cx="80" cy="50" r="2.5" fill="#9FB7C8" opacity="0.7" filter="url(#market-research-ink)" />
      <circle cx="50" cy="75" r="2.5" fill="#184A5A" opacity="0.7" filter="url(#market-research-ink)" />
    </svg>
  );
}

export function PolicyGovernmentAffairsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <InkFilter id="policy-affairs-ink" />
      </defs>
      {/* Stakeholder network with public engagement - hand-drawn */}
      
      {/* Central organization node */}
      <rect x="42" y="37" width="16" height="16" fill="#1E2A45" opacity="0.9" filter="url(#policy-affairs-ink)" />
      <rect x="45" y="40" width="10" height="10" fill="#FEFBF8" opacity="0.3" filter="url(#policy-affairs-ink)" />
      
      {/* Government/regulatory stakeholders - top */}
      <circle cx="35" cy="15" r="6" fill="#184A5A" opacity="0.9" filter="url(#policy-affairs-ink)" />
      <circle cx="65" cy="15" r="6" fill="#184A5A" opacity="0.9" filter="url(#policy-affairs-ink)" />
      
      {/* Standards/multi-stakeholder bodies - sides */}
      <circle cx="15" cy="45" r="6" fill="#9FB7C8" opacity="0.85" filter="url(#policy-affairs-ink)" />
      <circle cx="85" cy="45" r="6" fill="#9FB7C8" opacity="0.85" filter="url(#policy-affairs-ink)" />
      
      {/* Public/ecosystem stakeholders - bottom */}
      <circle cx="30" cy="75" r="6" fill="#1E2A45" opacity="0.85" filter="url(#policy-affairs-ink)" />
      <circle cx="70" cy="75" r="6" fill="#1E2A45" opacity="0.85" filter="url(#policy-affairs-ink)" />
      
      {/* Engagement lines - showing active dialogue */}
      <path d="M 42 40 L 38 20" stroke="#184A5A" strokeWidth="2" opacity="0.6" strokeLinecap="round" filter="url(#policy-affairs-ink)" />
      <path d="M 58 40 L 62 20" stroke="#184A5A" strokeWidth="2" opacity="0.6" strokeLinecap="round" filter="url(#policy-affairs-ink)" />
      <path d="M 42 48 L 21 46" stroke="#9FB7C8" strokeWidth="2" opacity="0.55" strokeLinecap="round" filter="url(#policy-affairs-ink)" />
      <path d="M 58 48 L 79 46" stroke="#9FB7C8" strokeWidth="2" opacity="0.55" strokeLinecap="round" filter="url(#policy-affairs-ink)" />
      <path d="M 44 53 L 33 70" stroke="#1E2A45" strokeWidth="2" opacity="0.55" strokeLinecap="round" filter="url(#policy-affairs-ink)" />
      <path d="M 56 53 L 67 70" stroke="#1E2A45" strokeWidth="2" opacity="0.55" strokeLinecap="round" filter="url(#policy-affairs-ink)" />
      
      {/* Consultation/hearing symbols - document stacks at stakeholder points */}
      <rect x="32" y="12" width="6" height="2" fill="#FEFBF8" opacity="0.4" filter="url(#policy-affairs-ink)" />
      <rect x="62" y="12" width="6" height="2" fill="#FEFBF8" opacity="0.4" filter="url(#policy-affairs-ink)" />
      
      {/* Network effect - subtle outer connections */}
      <path d="M 35 21 Q 50 28 65 21" stroke="#184A5A" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" filter="url(#policy-affairs-ink)" />
      <path d="M 30 69 Q 50 65 70 69" stroke="#1E2A45" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" filter="url(#policy-affairs-ink)" />
    </svg>
  );
}