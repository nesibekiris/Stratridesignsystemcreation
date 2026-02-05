import { useState } from 'react';

interface NavItem {
  name: string;
  path: string;
  children: Array<{ name: string; path: string }> | null;
}

interface NavigationDropdownProps {
  item: NavItem;
  isActive: boolean;
  onNavigate: (path: string) => void;
  colors: {
    dark: string;
    accent: string;
  };
}

export function NavigationDropdown({ item, isActive, onNavigate, colors }: NavigationDropdownProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <button
        onClick={() => onNavigate(item.path)}
        className={`px-4 py-2 rounded-sm text-sm font-sans transition-all duration-200 ${
          isActive ? 'font-bold' : 'font-normal'
        }`}
        style={{
          fontFamily: isActive ? 'Cormorant Garamond, serif' : 'IBM Plex Serif, serif',
          color: isActive ? colors.dark : colors.dark,
          backgroundColor: isActive ? '#E8E4DF' : 'transparent',
          border: isActive ? 'none' : '1px solid #E8E4DF',
          boxShadow: isActive ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        {item.name}
      </button>
      
      {/* Dropdown Panel */}
      {item.children && isHovered && (
        <div 
          className="absolute top-full left-0 mt-2 min-w-[280px] bg-white border rounded-sm shadow-lg py-3 px-4"
          style={{ borderColor: '#E8E4DF' }}
        >
          {item.children.map((child, childIndex) => (
            <button
              key={childIndex}
              onClick={() => {
                onNavigate(child.path);
                setIsHovered(false);
              }}
              className="block w-full text-left py-2 px-3 text-sm font-sans transition-colors duration-150 rounded-sm"
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