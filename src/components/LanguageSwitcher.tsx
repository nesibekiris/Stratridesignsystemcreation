import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLanguage: 'en' | 'tr';
  onLanguageChange: (lang: 'en' | 'tr') => void;
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange, colors }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4" style={{ color: colors.dark, opacity: 0.5 }} />
      <div 
        className="flex items-center gap-1 rounded-sm p-0.5"
        style={{ backgroundColor: 'rgba(30, 42, 69, 0.05)' }}
      >
        <button
          onClick={() => onLanguageChange('en')}
          className={`px-3 py-1.5 rounded-sm font-sans text-sm font-medium transition-all duration-200 ${
            currentLanguage === 'en' 
              ? 'shadow-sm' 
              : 'hover:bg-white/50'
          }`}
          style={{
            backgroundColor: currentLanguage === 'en' ? 'white' : 'transparent',
            color: currentLanguage === 'en' ? colors.dark : colors.dark,
            opacity: currentLanguage === 'en' ? 1 : 0.6,
          }}
        >
          EN
        </button>
        <button
          onClick={() => onLanguageChange('tr')}
          className={`px-3 py-1.5 rounded-sm font-sans text-sm font-medium transition-all duration-200 ${
            currentLanguage === 'tr' 
              ? 'shadow-sm' 
              : 'hover:bg-white/50'
          }`}
          style={{
            backgroundColor: currentLanguage === 'tr' ? 'white' : 'transparent',
            color: currentLanguage === 'tr' ? colors.dark : colors.dark,
            opacity: currentLanguage === 'tr' ? 1 : 0.6,
          }}
        >
          TR
        </button>
      </div>
    </div>
  );
}