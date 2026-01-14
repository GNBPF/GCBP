import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

export const CTA: React.FC = () => {
  return (
    <Section id="join" className="bg-ngo-green py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-paper-texture opacity-10"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 text-white px-4">
        <motion.h2 
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Be the change the world needs.
        </motion.h2>
        
        <p className="font-sans text-white/90 mb-6 md:mb-8 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
          Your support enables us to protect endangered ecosystems and empower communities on the frontlines of climate change.
        </p>

        <motion.div
           className="flex flex-col sm:flex-row justify-center gap-3"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <button className="bg-ngo-accent text-ngo-navy px-6 sm:px-8 py-2.5 sm:py-3 rounded font-bold uppercase tracking-wide shadow-lg hover:bg-white transition-colors duration-300 text-xs sm:text-sm">
            Donate Monthly
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded font-bold uppercase tracking-wide hover:bg-white hover:text-ngo-green transition-colors duration-300 text-xs sm:text-sm">
            Volunteer
          </button>
        </motion.div>
      </div>
    </Section>
  );
};