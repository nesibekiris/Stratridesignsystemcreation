import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      bg-white rounded-sm p-8 border border-[#E8E4DF]
      shadow-[0_1px_3px_rgba(0,0,0,0.05)]
      hover:border-[#184A5A] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-1
      transition-all duration-300 ease-out
      ${className}
    `}>
      {children}
    </div>
  );
}

interface PillarCardProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  points: string[];
  link: string;
}

export function PillarCard({ title, subtitle, icon, points, link }: PillarCardProps) {
  return (
    <Card className="h-full flex flex-col group">
      {icon && (
        <div className="w-16 h-16 mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
          {icon}
        </div>
      )}
      <h3 className="font-serif text-2xl font-medium text-[#1E2A45] mb-2">{title}</h3>
      {subtitle && <p className="font-serif text-base italic text-[#1E2A45]/60 mb-6">{subtitle}</p>}
      <ul className="space-y-3 mb-6 flex-grow">
        {points.map((point, index) => (
          <li key={index} className="text-sm text-[#1E2A45]/70 leading-relaxed font-sans">
            {point}
          </li>
        ))}
      </ul>
      <a href={link} className="inline-flex items-center text-sm font-sans font-medium text-[#184A5A] hover:text-[#1E2A45] transition-colors group/link">
        Learn more <ArrowRight size={16} className="ml-2 transition-transform duration-200 group-hover/link:translate-x-1" />
      </a>
    </Card>
  );
}

interface InsightCardProps {
  title: string;
  summary: string;
  category: string;
  date: string;
  slug: string;
  readingTime?: string;
  illustrationType?: string;
  isExternal?: boolean;
}

function AbstractIllustration({ type }: { type: string }) {
  const illustrations = {
    network: (
      <svg viewBox="0 0 200 120" className="w-full h-full transition-transform duration-300 group-hover:scale-105">
        <circle cx="30" cy="30" r="8" fill="none" stroke="#1E2A45" strokeWidth="1.5" className="transition-colors duration-300 group-hover:stroke-[#184A5A]" />
        <circle cx="100" cy="25" r="8" fill="none" stroke="#1E2A45" strokeWidth="1.5" className="transition-colors duration-300 group-hover:stroke-[#184A5A]" />
        <circle cx="170" cy="35" r="8" fill="none" stroke="#1E2A45" strokeWidth="1.5" className="transition-colors duration-300 group-hover:stroke-[#184A5A]" />
        <circle cx="60" cy="80" r="8" fill="none" stroke="#1E2A45" strokeWidth="1.5" className="transition-colors duration-300 group-hover:stroke-[#184A5A]" />
        <circle cx="140" cy="85" r="8" fill="none" stroke="#1E2A45" strokeWidth="1.5" className="transition-colors duration-300 group-hover:stroke-[#184A5A]" />
        <line x1="30" y1="30" x2="100" y2="25" stroke="#9FB7C8" strokeWidth="1" />
        <line x1="100" y1="25" x2="170" y2="35" stroke="#9FB7C8" strokeWidth="1" />
        <line x1="30" y1="30" x2="60" y2="80" stroke="#9FB7C8" strokeWidth="1" />
        <line x1="100" y1="25" x2="60" y2="80" stroke="#9FB7C8" strokeWidth="1" />
        <line x1="170" y1="35" x2="140" y2="85" stroke="#9FB7C8" strokeWidth="1" />
      </svg>
    ),
    circles: (
      <svg viewBox="0 0 200 120" className="w-full h-full transition-transform duration-300 group-hover:scale-105">
        <circle cx="50" cy="60" r="35" fill="none" stroke="#1E2A45" strokeWidth="1.5" className="transition-colors duration-300 group-hover:stroke-[#184A5A]" />
        <circle cx="120" cy="40" r="25" fill="#9FB7C8" fillOpacity="0.15" stroke="#1E2A45" strokeWidth="1.5" className="transition-colors duration-300 group-hover:stroke-[#184A5A]" />
        <circle cx="150" cy="80" r="20" fill="none" stroke="#184A5A" strokeWidth="1.5" className="transition-colors duration-300 group-hover:stroke-[#1a5a6f]" />
      </svg>
    ),
    lines: (
      <svg viewBox="0 0 200 120" className="w-full h-full transition-transform duration-300 group-hover:scale-105">
        <path d="M20,100 Q60,30 100,60 T180,40" fill="none" stroke="#1E2A45" strokeWidth="1.5" className="transition-colors duration-300 group-hover:stroke-[#184A5A]" />
        <path d="M20,80 Q70,20 120,50 T180,30" fill="none" stroke="#9FB7C8" strokeWidth="1" />
        <circle cx="100" cy="60" r="4" fill="#184A5A" className="transition-colors duration-300 group-hover:fill-[#1a5a6f]" />
        <circle cx="180" cy="40" r="4" fill="#184A5A" className="transition-colors duration-300 group-hover:fill-[#1a5a6f]" />
      </svg>
    ),
    grid: (
      <svg viewBox="0 0 200 120" className="w-full h-full transition-transform duration-300 group-hover:scale-105">
        <rect x="20" y="20" width="50" height="35" fill="none" stroke="#1E2A45" strokeWidth="1.5" className="transition-colors duration-300 group-hover:stroke-[#184A5A]" />
        <rect x="80" y="20" width="50" height="35" fill="#9FB7C8" fillOpacity="0.15" stroke="#1E2A45" strokeWidth="1.5" className="transition-colors duration-300 group-hover:stroke-[#184A5A]" />
        <rect x="140" y="20" width="40" height="35" fill="none" stroke="#184A5A" strokeWidth="1.5" className="transition-colors duration-300 group-hover:stroke-[#1a5a6f]" />
        <rect x="20" y="65" width="50" height="35" fill="#184A5A" fillOpacity="0.1" stroke="#1E2A45" strokeWidth="1.5" className="transition-colors duration-300 group-hover:stroke-[#184A5A]" />
        <rect x="80" y="65" width="50" height="35" fill="none" stroke="#1E2A45" strokeWidth="1.5" className="transition-colors duration-300 group-hover:stroke-[#184A5A]" />
      </svg>
    ),
    dots: (
      <svg viewBox="0 0 200 120" className="w-full h-full transition-transform duration-300 group-hover:scale-105">
        {[...Array(8)].map((_, i) => (
          <circle key={i} cx={30 + i * 22} cy={30} r="3" fill="#9FB7C8" className="transition-colors duration-300 group-hover:fill-[#184A5A]" />
        ))}
        {[...Array(7)].map((_, i) => (
          <circle key={i} cx={40 + i * 22} cy={60} r="3" fill="#1E2A45" className="transition-colors duration-300 group-hover:fill-[#184A5A]" />
        ))}
        {[...Array(8)].map((_, i) => (
          <circle key={i} cx={30 + i * 22} cy={90} r="3" fill="#184A5A" className="transition-colors duration-300 group-hover:fill-[#1a5a6f]" />
        ))}
      </svg>
    ),
    waves: (
      <svg viewBox="0 0 200 120" className="w-full h-full transition-transform duration-300 group-hover:scale-105">
        <path d="M0,60 Q25,40 50,60 T100,60 T150,60 T200,60" fill="none" stroke="#1E2A45" strokeWidth="1.5" className="transition-colors duration-300 group-hover:stroke-[#184A5A]" />
        <path d="M0,75 Q25,55 50,75 T100,75 T150,75 T200,75" fill="none" stroke="#9FB7C8" strokeWidth="1" />
        <path d="M0,45 Q25,25 50,45 T100,45 T150,45 T200,45" fill="none" stroke="#184A5A" strokeWidth="1" className="transition-colors duration-300 group-hover:stroke-[#1a5a6f]" />
      </svg>
    ),
  };

  return illustrations[type as keyof typeof illustrations] || illustrations.network;
}

export function InsightCard({ title, summary, category, date, slug, readingTime, illustrationType = 'network', isExternal = false }: InsightCardProps) {
  return (
    <a 
      href={isExternal ? slug : `/insights/${slug}`} 
      className="block h-full group"
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      <div className="h-full flex flex-col bg-[#FEFBF8] border border-[#E8E4DF]/50 rounded-sm overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out hover:border-[#184A5A] hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] hover:-translate-y-2">
        <div className="h-32 bg-white border-b border-[#E8E4DF]/30 flex items-center justify-center p-6 overflow-hidden">
          <AbstractIllustration type={illustrationType} />
        </div>

        <div className="flex-1 p-6 flex flex-col">
          <h3 className="font-serif text-xl font-medium text-[#1E2A45] mb-3 line-clamp-2 group-hover:text-[#184A5A] transition-colors duration-300">
            {title}
          </h3>

          <p className="font-sans text-sm text-[#1E2A45]/70 leading-relaxed mb-4 flex-grow line-clamp-3">
            {summary}
          </p>

          <div className="flex items-center gap-2 text-xs font-sans text-[#1E2A45]/50 pt-4 border-t border-[#E8E4DF]/30">
            <span>{date}</span>
            <span>•</span>
            <span>{readingTime || '5 min read'}</span>
            <span>•</span>
            <span className="font-medium text-[#184A5A]">{category}</span>
          </div>
        </div>
      </div>
    </a>
  );
}