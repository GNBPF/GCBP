import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

export const CTA: React.FC = () => {
  return (
    <Section id="join" className="bg-ngo-green py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-paper-texture opacity-10"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 text-white px-4 sm:px-6">
        <motion.h2 
          className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Be the change the world needs.
        </motion.h2>
        
        <p className="font-sans text-white/90 mb-5 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
          Your support enables us to protect endangered ecosystems and empower communities on the frontlines of climate change.
        </p>

        <motion.div
           className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <button className="bg-ngo-accent text-ngo-navy px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded font-bold uppercase tracking-wide shadow-lg hover:bg-white transition-colors duration-300 text-[11px] sm:text-xs md:text-sm">
            Donate Monthly
          </button>
          <button className="bg-transparent border-2 border-white text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded font-bold uppercase tracking-wide hover:bg-white hover:text-ngo-green transition-colors duration-300 text-[11px] sm:text-xs md:text-sm">
            Volunteer
          </button>
        </motion.div>
      </div>
    </Section>
  );
};