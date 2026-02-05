import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Insights', path: '/insights' },
    { name: 'About', path: '/about' },
    { name: 'Connect', path: '/connect' },
  ];

  const isActive = (path: string) => activeLink === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8E4DF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" onClick={() => setActiveLink('/')} className="font-serif text-2xl font-medium tracking-wider text-[#1E2A45] uppercase">
            STRATRI
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setActiveLink(link.path)}
                className={`text-sm font-sans font-normal transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-[#184A5A] font-medium'
                    : 'text-[#1E2A45] hover:text-[#184A5A]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-sm hover:bg-[#FEFBF8] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-[#1E2A45]" /> : <Menu size={24} className="text-[#1E2A45]" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#E8E4DF]">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={() => {
                  setActiveLink(link.path);
                  setIsOpen(false);
                }}
                className={`block py-2 text-base font-sans transition-colors ${
                  isActive(link.path)
                    ? 'text-[#184A5A] font-medium'
                    : 'text-[#1E2A45] hover:text-[#184A5A]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
