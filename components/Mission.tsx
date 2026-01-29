import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { SDG_GOALS } from '../constants';

export const Mission: React.FC = () => {
  return (
    <Section id="mission" className="bg-white min-h-screen flex items-center py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center w-full py-6 sm:py-8 md:py-10 lg:py-12">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
           <h4 className="font-sans text-ngo-blue font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-2 sm:mb-3">Who We Are</h4>
           <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-ngo-navy font-bold leading-tight mb-3 sm:mb-4">
             Bridging the gap between <span className="text-ngo-green italic">policy</span> and <span className="text-ngo-green italic">people.</span>
           </h2>
           <p className="font-sans text-ngo-gray text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4">
             The Global Collective for Better Planet (GCBP) was founded on a simple principle: complex global problems require collaborative local solutions. 
           </p>
           <p className="font-sans text-ngo-gray text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
             We don't just advocate; we implement. From restoring coastal mangroves to funding girls' education in the Global South, our work is tangible, measurable, and rooted in the UN Sustainable Development Goals.
           </p>
           
           <div className="flex items-center gap-4">
             <div className="h-px bg-ngo-gray/20 flex-grow"></div>
             <span className="font-serif text-ngo-navy italic font-medium text-xs sm:text-sm">Est. 1982 | 42 Years</span>
           </div>
        </motion.div>

        <motion.div
           className="relative mt-8 lg:mt-0"
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
             <img 
               src="/img1.jpeg" 
               alt="Community Meeting" 
               className="rounded object-cover h-32 sm:h-40 md:h-48 lg:h-56 w-full" 
             />
             <img 
               src="/img2.jpeg" 
               alt="Reforestation" 
               className="rounded object-cover h-32 sm:h-40 md:h-48 lg:h-56 w-full mt-3 sm:mt-4 md:mt-6 lg:mt-8" 
             />
          </div>
          
          {/* SDG Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 md:p-4 rounded-full shadow-lg text-center border border-gray-100">
             <span className="block font-serif text-lg sm:text-xl md:text-2xl font-bold text-ngo-navy">17</span>
             <span className="block text-[6px] sm:text-[7px] md:text-[8px] uppercase font-bold text-ngo-gray tracking-widest">Goals</span>
          </div>
        </motion.div>
      </div>

      {/* SDG Color Strip with Images */}
      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 pt-4 sm:pt-5 md:pt-6 lg:pt-8 border-t border-ngo-gray/10">
        <p className="text-center font-sans text-[9px] sm:text-[10px] md:text-xs text-ngo-gray mb-2 sm:mb-3 md:mb-4">Aligned with the UN Sustainable Development Goals</p>
        <div className="flex w-full h-6 sm:h-8 md:h-12 lg:h-16 rounded-lg overflow-hidden shadow-md">
          {SDG_GOALS.map((sdg) => (
            <div 
              key={sdg.id} 
              className="flex-1 relative group overflow-hidden"
              style={{ backgroundColor: sdg.color }}
            >
              <img 
                src={sdg.imageUrl} 
                alt={sdg.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Color fade overlay */}
              <div 
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
                style={{ backgroundColor: `${sdg.color}CC` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};