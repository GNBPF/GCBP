import React, { useEffect, useState } from 'react';
import { Section } from './ui/Section';
import { METRICS } from '../constants';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const Counter: React.FC<{ value: string; suffix: string; delay: number }> = ({ value, suffix, delay }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const increment = numericValue / 50;
      const interval = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(numericValue);
          clearInterval(interval);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [numericValue, delay]);

  return (
    <>
      {displayValue}<span className="text-ngo-accent text-lg sm:text-xl md:text-2xl lg:text-3xl">{suffix}</span>
    </>
  );
};

export const Impact: React.FC = () => {
  return (
    <Section id="impact" className="bg-ngo-navy text-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-8 md:mb-10 lg:mb-12 border-b border-white/10 pb-4 sm:pb-5 md:pb-6">
        <div className="mb-4 sm:mb-5 md:mb-0">
           <span className="text-ngo-accent font-bold uppercase tracking-widest text-[9px] sm:text-[10px] mb-1 sm:mb-2 block">Transparency & Results</span>
           <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Our Impact</h2>
        </div>
        <p className="font-sans text-white/70 max-w-full sm:max-w-sm mt-0 md:mt-0 text-left md:text-right text-[11px] sm:text-xs md:text-sm leading-relaxed">
          We are committed to full financial transparency and rigorous impact assessment for every project.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {METRICS.map((metric, index) => (
          <motion.div 
            key={metric.id}
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.12, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ scale: 1.08, y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
          >
            <div className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
              <Counter value={metric.value} suffix={metric.suffix} delay={0.2 + index * 0.15} />
            </div>
            <p className="font-sans text-white/60 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 sm:mt-10 md:mt-12 text-center">
        <a href="#" className="inline-block text-white text-xs sm:text-sm border-b border-white/30 pb-1 hover:text-ngo-accent hover:border-ngo-accent transition-colors">
          Download 2024 Annual Report &rarr;
        </a>
      </div>
    </Section>
  );
};