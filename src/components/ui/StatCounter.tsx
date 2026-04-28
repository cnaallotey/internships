import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface StatCounterProps {
  end: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({ end, suffix = '', label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-serif font-bold mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="font-mono text-xs uppercase tracking-widest opacity-70">
        {label}
      </div>
    </div>
  );
}
