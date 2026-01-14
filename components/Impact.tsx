import React from 'react';
import { Section } from './ui/Section';
import { METRICS } from '../constants';
import { motion } from 'framer-motion';

export const Impact: React.FC = () => {
  return (
    <Section id="impact" className="bg-ngo-navy text-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 border-b border-white/10 pb-4 md:pb-6">
        <div className="mb-4 md:mb-0">
           <span className="text-ngo-accent font-bold uppercase tracking-widest text-[10px] mb-1 block">Transparency & Results</span>
           <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">Our Impact</h2>
        </div>
        <p className="font-sans text-white/70 max-w-sm mt-0 md:mt-0 text-left md:text-right text-xs sm:text-sm">
          We are committed to full financial transparency and rigorous impact assessment for every project.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {METRICS.map((metric, index) => (
          <motion.div 
            key={metric.id}
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
              {metric.value}<span className="text-ngo-accent text-xl sm:text-2xl">{metric.suffix}</span>
            </div>
            <p className="font-sans text-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <a href="#" className="inline-block text-white text-sm border-b border-white/30 pb-1 hover:text-ngo-accent hover:border-ngo-accent transition-colors">
          Download 2024 Annual Report &rarr;
        </a>
      </div>
    </Section>
  );
};