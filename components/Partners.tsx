import React from 'react';
import { Section } from './ui/Section';
import { PARTNERS } from '../constants';
import { motion } from 'framer-motion';

export const Partners: React.FC = () => {
  return (
    <Section id="partners" className="bg-ngo-sand border-y border-ngo-gray/10 py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="font-sans text-[10px] sm:text-xs md:text-sm font-bold text-ngo-gray uppercase tracking-widest">
          In Coalition With
        </h3>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-16 opacity-70">
        {PARTNERS.map((partner, index) => (
          <motion.div 
            key={partner.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="font-serif text-xs sm:text-sm md:text-base lg:text-lg text-ngo-navy font-bold grayscale hover:grayscale-0 transition-all duration-300 px-2"
          >
            {partner.name}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};