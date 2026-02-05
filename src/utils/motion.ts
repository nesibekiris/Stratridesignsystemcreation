/**
 * Motion System for STRATRI
 * Alice.io-inspired animation utilities
 * Governance-grade: calm, professional, accessible
 */

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Animation durations (in ms)
export const durations = {
  fast: 150,        // Hover, small reveals
  medium: 250,      // Section reveals, card animations
  slow: 400,        // Scroll-to-anchor, complex transitions
  counter: 1200,    // Number counter animations
} as const;

// Easing curves
export const easings = {
  out: 'cubic-bezier(0.33, 1, 0.68, 1)',      // Entrances, reveals
  inOut: 'cubic-bezier(0.65, 0, 0.35, 1)',    // Scroll, complex transitions
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Playful (use sparingly)
} as const;

// Spring-based transition (for Motion/Framer Motion)
export const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
  mass: 0.8,
} as const;

// Stagger utilities
export const stagger = {
  // For staggered child animations
  getDelay: (index: number, baseDelay: number = 100): number => {
    if (prefersReducedMotion()) return 0;
    return index * baseDelay;
  },
  
  // Container variants for Motion
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  },
  
  // Item variants for Motion
  item: {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: durations.medium / 1000,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  },
} as const;

// Fade animations
export const fade = {
  in: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { 
      duration: prefersReducedMotion() ? 0 : durations.medium / 1000,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  
  inUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: prefersReducedMotion() ? 0 : durations.medium / 1000,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  
  inDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: prefersReducedMotion() ? 0 : durations.medium / 1000,
      ease: [0.33, 1, 0.68, 1],
    },
  },
} as const;

// Scale animations (for hover states)
export const scale = {
  hover: {
    scale: prefersReducedMotion() ? 1 : 1.02,
    transition: {
      duration: durations.fast / 1000,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  
  tap: {
    scale: prefersReducedMotion() ? 1 : 0.98,
    transition: {
      duration: durations.fast / 1000,
      ease: [0.33, 1, 0.68, 1],
    },
  },
} as const;

// Scroll utilities
export const scroll = {
  // Smooth scroll to element
  toElement: (elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    
    if (prefersReducedMotion()) {
      window.scrollTo(0, targetPosition);
    } else {
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  },
  
  // Check if element is in viewport
  isInViewport: (element: HTMLElement, threshold: number = 0.1): boolean => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    const vertInView = (rect.top <= windowHeight * (1 - threshold)) && ((rect.top + rect.height) >= windowHeight * threshold);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    
    return vertInView && horInView;
  },
};

// Counter animation utility
export const animateCounter = (
  element: HTMLElement,
  start: number,
  end: number,
  duration: number = durations.counter,
  suffix: string = ''
) => {
  if (prefersReducedMotion()) {
    element.textContent = `${end}${suffix}`;
    return;
  }
  
  const startTime = performance.now();
  const range = end - start;
  
  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease-out cubic
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + range * easeOut);
    
    element.textContent = `${current}${suffix}`;
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      element.textContent = `${end}${suffix}`;
    }
  };
  
  requestAnimationFrame(animate);
};

// Intersection Observer utility for scroll-triggered animations
export const createScrollObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options,
  };
  
  return new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, defaultOptions);
};

// CSS class utilities for animations
export const animationClasses = {
  fadeInUp: 'animate-fade-in-up',
  fadeIn: 'animate-fade-in',
  slideInLeft: 'animate-slide-in-left',
  slideInRight: 'animate-slide-in-right',
  scaleIn: 'animate-scale-in',
} as const;

// Generate staggered animation styles
export const getStaggerStyle = (index: number, baseDelay: number = 100): React.CSSProperties => {
  const delay = stagger.getDelay(index, baseDelay);
  return {
    animationDelay: `${delay}ms`,
  };
};
