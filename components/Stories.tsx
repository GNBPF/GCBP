import React from 'react';
import { Section } from './ui/Section';
import { STORIES } from '../constants';
import { motion } from 'framer-motion';

export const Stories: React.FC = () => {
  return (
    <Section id="stories" className="bg-white">
      <div className="text-center mb-8 md:mb-10">
        <h2 className="font-serif text-2xl sm:text-3xl text-ngo-navy font-bold mb-2">Stories from the Field</h2>
        <div className="w-12 sm:w-16 h-1 bg-ngo-green mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {STORIES.map((story, index) => (
          <motion.article 
            key={story.id}
            className="group cursor-pointer flex flex-col h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="relative overflow-hidden rounded mb-4 shadow-sm aspect-[3/2]">
              <img 
                src={story.imageUrl} 
                alt={story.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-3 left-3 bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-ngo-navy rounded shadow-sm">
                {story.category}
              </div>
            </div>
            
            <h3 className="font-serif text-lg sm:text-xl text-ngo-navy font-bold mb-2 leading-tight group-hover:text-ngo-blue transition-colors">
              {story.title}
            </h3>
            <p className="font-sans text-ngo-gray text-xs sm:text-sm leading-relaxed mb-3 flex-grow">
              {story.excerpt}
            </p>
            <span className="text-ngo-green font-bold text-[10px] sm:text-xs flex items-center gap-1">
              Read Story <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </span>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};