import React from 'react';
import { Section } from './ui/Section';
import { STORIES } from '../constants';
import { motion } from 'framer-motion';

export const Stories: React.FC = () => {
  return (
    <Section id="stories" className="bg-white">
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-ngo-navy font-bold mb-2 sm:mb-3">Stories from the Field</h2>
        <div className="w-10 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-ngo-green mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {STORIES.map((story, index) => (
          <motion.article 
            key={story.id}
            className="group cursor-pointer flex flex-col h-full"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.12, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ y: -12, transition: { duration: 0.25, ease: "easeOut" } }}
          >
            <motion.div 
              className="relative overflow-hidden rounded mb-3 sm:mb-4 shadow-sm aspect-[3/2]"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transition: { duration: 0.3 } }}
            >
              <motion.img 
                src={story.imageUrl} 
                alt={story.title}
                className="object-cover w-full h-full"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-wide text-ngo-navy rounded shadow-sm">
                {story.category}
              </div>
            </motion.div>
            
            <h3 className="font-serif text-base sm:text-lg md:text-xl text-ngo-navy font-bold mb-1 sm:mb-2 leading-tight group-hover:text-ngo-blue transition-colors">
              {story.title}
            </h3>
            <p className="font-sans text-ngo-gray text-[11px] sm:text-xs md:text-sm leading-relaxed mb-2 sm:mb-3 flex-grow">
              {story.excerpt}
            </p>
            <span className="text-ngo-green font-bold text-[9px] sm:text-[10px] md:text-xs flex items-center gap-1">
              Read Story <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </span>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};