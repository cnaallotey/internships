import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface LuxuryButtonProps {
  children: ReactNode;
  variant?: 'filled' | 'ghost';
  className?: string;
  onClick?: () => void;
}

export default function LuxuryButton({ 
  children, 
  variant = 'filled', 
  className = '', 
  onClick 
}: LuxuryButtonProps) {
  const baseClasses = variant === 'filled' ? 'cta-filled' : 'cta-ghost';
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
