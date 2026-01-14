import React from 'react';
import { Section } from './ui/Section';
import { PILLARS } from '../constants';
import { motion } from 'framer-motion';

export const Pillars: React.FC = () => {
  return (
    <Section id="pillars" className="bg-ngo-sand">
       <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ngo-navy font-bold mb-3">Our Key Areas of Work</h2>
          <p className="font-sans text-ngo-gray text-sm sm:text-base">
            We focus our resources where they can have the most significant impact on both human welfare and environmental stability.
          </p>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
         {PILLARS.map((pillar, index) => (
           <motion.div 
            key={pillar.id}
            className="bg-white p-4 sm:p-6 rounded shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-ngo-green"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
           >
             <div className="w-8 h-8 sm:w-10 sm:h-10 bg-ngo-sand rounded-full flex items-center justify-center mb-3 sm:mb-4 text-ngo-green">
               {/* Simple Icons based on index */}
               <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
                 {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                 {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />}
                 {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
               </svg>
             </div>
             
             <h3 className="font-serif text-base sm:text-lg text-ngo-navy font-bold mb-2">
               {pillar.title}
             </h3>
             <p className="font-sans text-ngo-gray text-xs leading-relaxed mb-3">
               {pillar.description}
             </p>
             <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-ngo-blue">
               {pillar.supportingLine}
             </span>
           </motion.div>
         ))}
       </div>
    </Section>
  );
};