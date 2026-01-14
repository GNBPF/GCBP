import React from 'react';
import { Section } from '../ui/Section';
import { SDG_GOALS } from '../../constants';
import { motion } from 'framer-motion';

export const StoryPage: React.FC = () => {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 min-h-screen bg-white font-sans text-ngo-navy">
      
      {/* 1. Hero / Manifesto */}
      <section className="relative px-4 md:px-8 py-12 sm:py-16 md:py-20 lg:py-32 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="block text-ngo-accent font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4">
             Since 1989
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[9rem] leading-[0.85] font-bold text-ngo-navy tracking-tighter mb-6 sm:mb-8 md:mb-10">
            UNSTOPPABLE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ngo-green to-ngo-blue">FORCE.</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mt-10 sm:mt-12 md:mt-16">
             <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-snug">
               We don't just dream of a better world. <br className="hidden sm:block"/>
               <span className="italic text-ngo-gray">We built the infrastructure to make it inevitable.</span>
             </p>
             <p className="font-sans text-ngo-gray text-sm sm:text-base md:text-lg leading-relaxed">
               For over three decades, GCBP has been the silent engine behind some of the world's most transformative social and environmental breakthroughs. We are not just a charity; we are a global institution of change, operating with the precision of a corporation and the heart of a movement. We stand tall, proud of the 12 Billion USD we have deployed directly into the hands of those who need it most.
             </p>
          </div>
        </motion.div>
      </section>

      {/* 2. Visual Breaker */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden relative">
         <img 
            src="/img2.jpeg" 
            alt="Women Leadership" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
         />
         <div className="absolute inset-0 bg-black/20"></div>
         <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-4 sm:left-6 md:left-12 text-white">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">We Empower.</h2>
         </div>
      </div>

      {/* 3. The 17 Goals - Our DNA */}
      <Section className="bg-ngo-sand">
         <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">Our Mandate</h2>
            <p className="font-sans text-ngo-gray max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
               We are the architects of the future, strictly aligning every dollar, every hour, and every resource to the United Nations Sustainable Development Goals. This is not a wishlist. It is our checklist.
            </p>
         </div>

         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            {SDG_GOALS.map((sdg, index) => (
               <motion.div 
                 key={sdg.id}
                 className={`p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl text-white flex flex-col justify-between h-32 sm:h-40 md:h-48 group relative overflow-hidden cursor-default shadow-sm hover:shadow-2xl transition-all duration-300 ${index === 16 ? 'col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-2' : ''}`}
                 style={{ backgroundColor: sdg.color }}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.05 }}
               >
                  {/* Background Image with Overlay */}
                  {sdg.imageUrl && sdg.imageUrl.trim() !== '' && (
                     <>
                        <img 
                           src={sdg.imageUrl} 
                           alt={sdg.title}
                           className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500 scale-100 group-hover:scale-110"
                           onError={(e) => {
                              // Hide image if it fails to load (placeholder not yet available)
                              e.currentTarget.style.display = 'none';
                           }}
                        />
                        {/* Light gradient overlay for text readability and subtle color fade */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        <div className="absolute inset-0" style={{ backgroundColor: `${sdg.color}30` }}></div>
                     </>
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                     <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold opacity-30 group-hover:opacity-100 transition-opacity">
                        {sdg.id}
                     </span>
                     <span className="font-sans font-bold text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight uppercase tracking-wide group-hover:translate-y-[-5px] transition-transform drop-shadow-md">
                        {sdg.title}
                     </span>
                  </div>
                  
                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"></div>
               </motion.div>
            ))}
         </div>
      </Section>

      {/* 4. The Legacy Timeline */}
      <Section className="bg-ngo-navy text-white">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 md:gap-20">
            <div className="lg:sticky lg:top-32 h-fit mb-8 lg:mb-0">
               <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-none mb-4 sm:mb-6">
                  A Legacy <br/>
                  <span className="text-ngo-accent">Written in Stone.</span>
               </h2>
               <p className="font-sans text-white/70 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                  From our humble beginnings in a small Geneva office to operating in 42 nations, our history is a testament to the power of unwavering resolve. We didn't just witness history; we made it.
               </p>
               <a href="#join" className="inline-block border border-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-white hover:text-ngo-navy transition-colors font-bold uppercase tracking-widest text-xs sm:text-sm">
                  Join the Future
               </a>
            </div>

            <div className="border-l border-white/20 pl-4 sm:pl-6 md:pl-8 lg:pl-16 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
               {[
                  { year: '1989', title: 'The Genesis', desc: 'GCBP is founded by Dr. Elena Vasquez with a seed grant to protect indigenous lands in the Amazon.' },
                  { year: '1995', title: 'Global Expansion', desc: 'We expanded operations to Sub-Saharan Africa, launching the first "Water Commons" initiative.' },
                  { year: '2005', title: 'The Billion Dollar Mark', desc: 'We reached $1B in deployed aid, focusing heavily on education infrastructure in SE Asia.' },
                  { year: '2015', title: 'SDG Alignment', desc: 'GCBP became a primary strategic partner for the UN 2030 Agenda, restructuring strictly around the 17 SDGs.' },
                  { year: '2024', title: 'The Digital Era', desc: 'Launching decentralized governance tools to give power back to 150+ local communities directly.' },
               ].map((item, i) => (
                  <motion.div 
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                     <span className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white/10 block -ml-2 sm:-ml-4 md:-ml-8 mb-[-1.5rem] sm:mb-[-2rem]">
                        {item.year}
                     </span>
                     <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ngo-accent mb-2 relative z-10">{item.title}</h3>
                     <p className="font-sans text-white/80 leading-relaxed max-w-md relative z-10 text-sm sm:text-base">
                        {item.desc}
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>
      </Section>

      {/* 5. Proud CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 text-center px-4">
         <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-ngo-navy font-bold mb-4 sm:mb-6 md:mb-8">
               We have done the work. <br/>
               <span className="italic font-light">Now it's your turn.</span>
            </h2>
            <p className="font-sans text-base sm:text-lg md:text-xl text-ngo-gray mb-8 sm:mb-10 md:mb-12">
               We are proud of our past, but we are obsessed with our future. 
               Join the most effective collective on the planet.
            </p>
            <button className="bg-ngo-navy text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest hover:bg-ngo-green transition-colors shadow-2xl hover:scale-105 transform duration-300">
               Become a Patron
            </button>
         </div>
      </section>

    </div>
  );
};