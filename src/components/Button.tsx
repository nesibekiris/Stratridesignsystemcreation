import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, variant = 'primary', href, onClick, className = '' }: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-3.5 font-sans font-medium text-sm transition-all duration-200 rounded-sm cursor-pointer select-none';

  const variants = {
    primary: 'bg-[#184A5A] text-[#FEFBF8] border border-[#0f3a47] shadow-[0_3px_8px_rgba(24,74,90,0.25),0_1px_3px_rgba(0,0,0,0.1)] hover:bg-[#1d5768] hover:-translate-y-1 hover:shadow-[0_5px_12px_rgba(24,74,90,0.3),0_2px_4px_rgba(0,0,0,0.12)] active:translate-y-0.5 active:bg-[#134050] active:shadow-[0_1px_3px_rgba(24,74,90,0.2),0_0.5px_1px_rgba(0,0,0,0.08)]',
    secondary: 'bg-[#FEFBF8] text-[#1E2A45] border border-[#1E2A45] shadow-[0_2px_6px_rgba(30,42,69,0.15),0_1px_2px_rgba(0,0,0,0.08)] hover:bg-[#f0ede8] hover:-translate-y-1 hover:shadow-[0_4px_10px_rgba(30,42,69,0.2),0_2px_3px_rgba(0,0,0,0.1)] active:translate-y-0.5 active:bg-[#e8e4dd] active:shadow-[0_1px_3px_rgba(30,42,69,0.12)]',
    outline: 'bg-transparent text-[#1E2A45] border border-[#1E2A45] shadow-[0_1px_3px_rgba(30,42,69,0.1)] hover:bg-[#9FB7C8]/10 hover:border-[#184A5A] hover:-translate-y-0.5 hover:shadow-[0_3px_6px_rgba(30,42,69,0.15)] active:translate-y-0 active:bg-[#9FB7C8]/20 active:shadow-[0_1px_2px_rgba(30,42,69,0.08)]',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
      // Internal route - prevent default and use pushState
      e.preventDefault();
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // For external links, hash links, and mailto links, let default behavior happen
  };

  if (href) {
    return (
      <a href={href} className={styles} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}