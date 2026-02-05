import { useState } from 'react';

interface NavItem {
  name: string;
  path: string;
  children: Array<{ name: string; path: string }> | null;
}

interface MobileNavigationItemProps {
  item: NavItem;
  isActive: boolean;
  onNavigate: (path: string) => void;
  onClose: () => void;
  colors: {
    dark: string;
    accent: string;
  };
}

export function MobileNavigationItem({ item, isActive, onNavigate, onClose, colors }: MobileNavigationItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-1">
      <button
        onClick={() => {
          if (item.children) {
            setIsExpanded(!isExpanded);
          } else {
            onNavigate(item.path);
            onClose();
          }
        }}
        className="flex items-center justify-between w-full text-left py-3 px-4 text-base font-sans transition-all rounded-sm"
        style={{
          color: isActive ? colors.accent : colors.dark,
          fontWeight: isActive ? 600 : 400,
          backgroundColor: isActive ? '#F5F3F0' : 'transparent',
        }}
      >
        <span>{item.name}</span>
        {item.children && (
          <span className="text-xs">{isExpanded ? '−' : '+'}</span>
        )}
      </button>
      
      {/* Accordion Children */}
      {item.children && isExpanded && (
        <div className="pl-4 space-y-1 py-2">
          {item.children.map((child, childIndex) => (
            <button
              key={childIndex}
              onClick={() => {
                onNavigate(child.path);
                onClose();
              }}
              className="block w-full text-left py-2 px-4 text-sm font-sans transition-colors rounded-sm"
              style={{
                color: colors.dark,
                fontFamily: 'IBM Plex Serif, serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F5F3F0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {child.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
