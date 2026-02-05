import { motion } from 'motion/react';
import { TechnologyIcon, StrategyIcon, PolicyIcon, SocietyIcon } from './Icons';

export function HeroVisualization() {
  return (
    <div className="relative w-full h-full min-h-[440px] flex items-center justify-center">
      {/* Container with vertical alignment showing leverage */}
      <div className="relative w-[300px] h-[420px]">
        
        {/* Top: Technology Icon (being lifted/leveraged upward) */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28"
          initial={{ y: 20, opacity: 0.6 }}
          animate={{
            y: [0, -6, 0],
            opacity: 1,
          }}
          transition={{
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: {
              duration: 1,
            }
          }}
        >
          <TechnologyIcon className="w-full h-full" />
        </motion.div>

        {/* Visual elements showing leverage force */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 300 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bottom layer: Policy and Society converge into Strategy */}
          {/* Left: Policy to Strategy */}
          <motion.path
            d="M 75 370 L 150 240"
            stroke="#1E2A45"
            strokeWidth="2"
            opacity="0.35"
            strokeLinecap="round"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
          
          {/* Right: Society to Strategy */}
          <motion.path
            d="M 225 370 L 150 240"
            stroke="#184A5A"
            strokeWidth="2"
            opacity="0.35"
            strokeLinecap="round"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.2
            }}
          />
          
          {/* Upward force beams: Strategy pushing Technology up */}
          {/* Central strong beam */}
          <motion.path
            d="M 150 200 L 150 90"
            stroke="#184A5A"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1],
              opacity: [0, 0.5, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              repeatDelay: 1.5
            }}
          />
          
          {/* Left support beam */}
          <motion.path
            d="M 130 210 L 130 95"
            stroke="#9FB7C8"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1],
              opacity: [0, 0.4, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              repeatDelay: 1.5,
              delay: 0.15
            }}
          />
          
          {/* Right support beam */}
          <motion.path
            d="M 170 210 L 170 95"
            stroke="#9FB7C8"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1],
              opacity: [0, 0.4, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              repeatDelay: 1.5,
              delay: 0.3
            }}
          />

          {/* Upward arrow hints at top of beams */}
          <motion.path
            d="M 145 95 L 150 85 L 155 95"
            stroke="#184A5A"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1.5,
              delay: 0.8
            }}
          />
        </svg>

        {/* Middle: Strategy Icon (the leverage point) */}
        <div className="absolute top-[180px] left-1/2 -translate-x-1/2 w-28 h-28">
          <StrategyIcon className="w-full h-full" />
        </div>

        {/* Bottom row: Policy and Society (the foundation) */}
        {/* Left: Policy Icon */}
        <div className="absolute bottom-0 left-[35px] w-22 h-22">
          <PolicyIcon className="w-full h-full" />
        </div>

        {/* Right: Society Icon */}
        <div className="absolute bottom-0 right-[35px] w-22 h-22">
          <SocietyIcon className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}