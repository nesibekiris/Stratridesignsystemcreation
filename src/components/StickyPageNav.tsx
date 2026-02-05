import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { prefersReducedMotion, durations, scroll } from '../utils/motion';

export interface NavSection {
  id: string;
  label: string;
  elementId: string; // ID of the section to scroll to
}

interface StickyPageNavProps {
  sections: NavSection[];
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
  offset?: number; // Offset from top when scrolling
  showThreshold?: number; // Pixels to scroll before showing nav
}

export function StickyPageNav({ 
  sections, 
  colors, 
  offset = 80,
  showThreshold = 400,
}: StickyPageNavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Show/hide nav based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > showThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showThreshold]);

  // Track active section with Intersection Observer
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is roughly centered
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.find((s) => s.elementId === entry.target.id);
          if (section) {
            setActiveSection(section.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.elementId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleNavClick = (section: NavSection) => {
    setActiveSection(section.id);
    scroll.toElement(section.elementId, offset);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: prefersReducedMotion() ? 0 : durations.medium / 1000,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-40 hidden lg:block"
          style={{
            maxWidth: 'fit-content',
          }}
        >
          <div
            className="flex items-center gap-1 px-4 py-2 rounded-full backdrop-blur-md border shadow-lg"
            style={{
              backgroundColor: `${colors.cream}F0`,
              borderColor: `${colors.accent}20`,
              boxShadow: '0 4px 12px rgba(30, 42, 69, 0.1)',
            }}
          >
            {sections.map((section, index) => (
              <div key={section.id} className="flex items-center">
                <button
                  onClick={() => handleNavClick(section)}
                  onMouseEnter={() => setHoveredSection(section.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  className="relative px-4 py-2 text-sm font-sans font-medium rounded-full transition-governance"
                  style={{
                    color: activeSection === section.id ? colors.cream : colors.dark,
                  }}
                >
                  {/* Active/hover background */}
                  {(activeSection === section.id || hoveredSection === section.id) && (
                    <motion.div
                      layoutId={activeSection === section.id ? 'activeSection' : undefined}
                      className="absolute inset-0 rounded-full"
                      style={{
                        backgroundColor: activeSection === section.id ? colors.accent : `${colors.accent}20`,
                      }}
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Label */}
                  <span className="relative z-10">{section.label}</span>
                </button>

                {/* Separator */}
                {index < sections.length - 1 && (
                  <div
                    className="w-px h-4 mx-1"
                    style={{ backgroundColor: `${colors.dark}20` }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

// Default sections for STRATRI Home page
export const defaultHomeSections: NavSection[] = [
  { id: 'overview', label: 'Overview', elementId: 'hero-section' },
  { id: 'services', label: 'Services', elementId: 'services-section' },
  { id: 'frameworks', label: 'Frameworks', elementId: 'frameworks-section' },
  { id: 'insights', label: 'Insights', elementId: 'insights-section' },
  { id: 'contact', label: 'Contact', elementId: 'contact-section' },
];
