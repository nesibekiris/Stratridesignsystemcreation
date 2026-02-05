import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { prefersReducedMotion, durations } from '../utils/motion';
import { Button } from './Button';
import { Newsletter } from './Newsletter';

interface CTASectionProps {
  colors: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
  substackUrl?: string;
}

export function CTASection({ colors, substackUrl = 'https://www.techletter.co' }: CTASectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-24"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: prefersReducedMotion() ? 0 : durations.medium / 1000,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="text-center"
        >
          {/* Headline */}
          <h2
            className="font-serif text-4xl lg:text-5xl font-light mb-12 tracking-tight"
            style={{ color: colors.dark, letterSpacing: '-0.05em' }}
          >
            Design the <span className="font-bold italic">junction</span> before it designs you.
          </h2>

          {/* Two CTAs in grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: prefersReducedMotion() ? 0 : durations.medium / 1000,
                delay: prefersReducedMotion() ? 0 : 0.1,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="bg-white border rounded-sm p-8 transition-all duration-200 hover:shadow-md"
              style={{ borderColor: '#E8E4DF' }}
            >
              <div className="mb-4">
                <p
                  className="font-sans text-sm leading-relaxed mb-4"
                  style={{ color: colors.dark }}
                >
                  Whether you are wrestling with AI, broader technology strategy, or shifting regulation, STRATRI helps you align technology, policy, and society instead of choosing between them.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Button href="/connect" className="w-full mb-4">
                  Talk to STRATRI
                </Button>
                <p
                  className="font-sans text-xs text-center"
                  style={{ color: colors.light }}
                >
                  Projects, advisory, workshops, and board briefings.
                </p>
              </div>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: prefersReducedMotion() ? 0 : durations.medium / 1000,
                delay: prefersReducedMotion() ? 0 : 0.2,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="bg-white border rounded-sm p-8 transition-all duration-200 hover:shadow-md"
              style={{ borderColor: '#E8E4DF' }}
            >
              <div className="mb-4">
                <h3
                  className="font-serif text-xl font-medium mb-2"
                  style={{ color: colors.dark }}
                >
                  Stay close to the thinking
                </h3>
                <p
                  className="font-sans text-xs"
                  style={{ color: colors.light }}
                >
                  Grounded perspectives on AI governance, technology policy, and organizational literacy — delivered occasionally, only when we have something useful to say.
                </p>
              </div>
              
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="flex-1 px-4 py-3 border rounded-sm font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#184A5A] focus:border-[#184A5A] transition-all"
                  style={{ borderColor: '#E8E4DF' }}
                />
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    const input = e.currentTarget.parentElement?.querySelector('input[type="email"]') as HTMLInputElement;
                    if (input && input.value) {
                      const form = document.createElement('form');
                      form.method = 'POST';
                      form.action = `${substackUrl}/api/v1/free?nojs=true`;
                      form.target = '_blank';
                      
                      const emailInput = document.createElement('input');
                      emailInput.type = 'email';
                      emailInput.name = 'email';
                      emailInput.value = input.value;
                      
                      form.appendChild(emailInput);
                      document.body.appendChild(form);
                      form.submit();
                      document.body.removeChild(form);
                      
                      input.value = '';
                    }
                  }}
                  className="px-8 py-3 bg-[#184A5A] text-[#FEFBF8] border border-[#135268] rounded-sm font-sans font-medium text-sm shadow-sm hover:bg-[#1a5a6f] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}