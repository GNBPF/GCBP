import React from 'react';
import { Section } from './ui/Section';
import { PARTNERS } from '../constants';
import { motion } from 'framer-motion';

export const Partners: React.FC = () => {
  return (
    <Section id="partners" className="bg-ngo-sand border-y border-ngo-gray/10 py-12 md:py-16">
      <div className="text-center mb-8">
        <h3 className="font-sans text-xs font-bold text-ngo-gray uppercase tracking-widest">
          In Coalition With
        </h3>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 opacity-70">
        {PARTNERS.map((partner, index) => (
          <motion.div 
            key={partner.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="font-serif text-sm sm:text-base md:text-lg text-ngo-navy font-bold grayscale hover:grayscale-0 transition-all duration-300"
          >
            {partner.name}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};