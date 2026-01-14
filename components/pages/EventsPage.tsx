import React from 'react';
import { EVENTS } from '../../constants';
import { motion } from 'framer-motion';

export const EventsPage: React.FC = () => {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 min-h-screen bg-[#E5E7EB] text-[#1A1A1A] font-sans">
      
      <div className="max-w-7xl mx-auto container-padding">
        
        {/* Top Breadcrumb/Nav Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 sm:py-4 border-b border-gray-300 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 gap-2 sm:gap-0">
           <div className="flex flex-wrap gap-1 sm:gap-2">
             <span>News</span> <span className="text-gray-300">/</span>
             <span className="text-orange-500">Events</span> <span className="text-gray-300">/</span>
             <span>Press</span> <span className="text-gray-300">/</span>
             <span>Gallery</span>
           </div>
           <div className="flex items-center gap-2 sm:gap-4">
              <span className="hidden sm:inline">GCBP</span>
              <span className="text-orange-500 flex items-center gap-1 cursor-pointer hover:text-orange-600 text-[9px] sm:text-[10px] md:text-xs">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                Subscribe
              </span>
           </div>
        </div>

        {/* Header Title */}
        <header className="py-10 sm:py-12 md:py-16 lg:py-20">
           <motion.h1 
             className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl leading-[0.85] tracking-tight uppercase"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             All <span className="italic font-light">Events</span>
           </motion.h1>
           <div className="flex justify-end mt-3 sm:mt-4">
              <p className="font-sans text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wide max-w-xs text-right">
                This is a good thing that will happen. <br className="hidden sm:block"/>
                <span className="text-gray-500 font-normal normal-case">Joining forces for the 17 SDGs.</span>
              </p>
           </div>
        </header>

        {/* Search Bar */}
        <div className="mb-10 sm:mb-12 md:mb-16 relative">
           <div className="absolute inset-y-0 left-0 pl-0 flex items-center pointer-events-none">
             <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
             </svg>
           </div>
           <input 
             type="text" 
             placeholder="SEARCH FOR EVENT" 
             className="w-full bg-transparent border-b border-gray-400 py-3 sm:py-4 pl-6 sm:pl-8 text-sm sm:text-base md:text-lg font-sans uppercase tracking-widest placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
           />
        </div>

        {/* Event List */}
        <div className="pb-12 sm:pb-16 md:pb-20">
           {EVENTS.map((monthGroup) => (
             <div key={monthGroup.month} className="mb-10 sm:mb-12 md:mb-16">
               <div className="bg-[#1A1A1A] text-white inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2">
                 {monthGroup.month}
               </div>
               <div className="border-t border-black"></div>
               
               {monthGroup.items.map((event, index) => (
                 <motion.div 
                    key={event.id}
                    className="group border-b border-gray-300 py-6 sm:py-8 md:py-10 grid grid-cols-12 gap-3 sm:gap-4 items-start hover:bg-white/50 transition-colors duration-300 px-2 -mx-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                 >
                    {/* Date Column */}
                    <div className="col-span-12 sm:col-span-2 md:col-span-1 text-left sm:text-center md:text-left mb-2 sm:mb-0">
                       <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">{event.weekday}</span>
                       <span className="block font-serif text-3xl sm:text-4xl md:text-5xl leading-none">{event.day}</span>
                    </div>

                    {/* Image & Content */}
                    <div className="col-span-12 sm:col-span-10 md:col-span-11 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-12 items-start">
                       {/* Thumbnail */}
                       <div className="w-full md:w-48 h-40 sm:h-32 flex-shrink-0 overflow-hidden relative">
                          <img 
                            src={event.imageUrl} 
                            alt={event.title} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                          <div className="absolute inset-y-0 left-0 w-1 bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
                       </div>
                       
                       {/* Details */}
                       <div className="flex-grow">
                          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl uppercase leading-tight mb-2 group-hover:text-orange-600 transition-colors">
                            {event.title}
                          </h3>
                          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-sans mb-2 sm:mb-3 text-gray-600">
                             <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                             {event.location}
                          </div>
                          <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed max-w-2xl mb-3 sm:mb-4">
                             {event.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                             {event.tags.map(tag => (
                               <span key={tag} className="border border-gray-400 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-600 hover:bg-black hover:text-white transition-colors cursor-default">
                                  {tag}
                               </span>
                             ))}
                          </div>
                       </div>

                       {/* Arrow Icon */}
                       <div className="hidden md:block self-start text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                       </div>
                    </div>
                 </motion.div>
               ))}
             </div>
           ))}
        </div>

      </div>

      {/* Subscribe Footer Section */}
      <section className="bg-[#E5E7EB] border-t border-gray-300">
         <div className="max-w-7xl mx-auto container-padding py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
               {/* Text Side */}
               <div className="py-12 sm:py-16 md:py-20 pr-0 lg:pr-20">
                  <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl uppercase leading-[0.8] mb-6 sm:mb-8 md:mb-10 tracking-tighter">
                     Subscribe <br/> Now
                  </h2>
                  <div className="relative mb-8 sm:mb-12 md:mb-16">
                     <input 
                       type="email" 
                       placeholder="E-MAIL ADDRESS" 
                       className="w-full bg-transparent border-b border-black py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest placeholder-gray-500 focus:outline-none"
                     />
                     <button className="absolute right-0 bottom-1 sm:bottom-2 bg-orange-500 text-white text-[10px] sm:text-xs font-bold px-4 sm:px-6 py-2 sm:py-3 uppercase tracking-widest hover:bg-black transition-colors">
                        Subscribe
                     </button>
                  </div>
                  <div className="mt-8 sm:mt-12 md:mt-16 flex flex-wrap gap-6 sm:gap-8 md:gap-12 font-sans text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-500">
                     <div className="flex flex-col gap-2">
                        <span className="text-black">Menu</span>
                        <a href="#" className="hover:text-orange-500">Fashion</a>
                        <a href="#" className="hover:text-orange-500">Celebrity</a>
                        <a href="#" className="hover:text-orange-500">Lifestyle</a>
                        <a href="#" className="hover:text-orange-500">Events</a>
                        <a href="#" className="hover:text-orange-500">Gallery</a>
                     </div>
                     <div className="flex flex-col gap-2">
                        <span className="text-black">About</span>
                        <a href="#" className="hover:text-orange-500">Privacy Policy</a>
                        <a href="#" className="hover:text-orange-500">FAQ</a>
                     </div>
                     <div className="flex flex-col gap-2">
                        <span className="text-black">Contact</span>
                        <div className="normal-case font-normal text-gray-600 text-[9px] sm:text-[10px]">
                           Unit 3, 42-90 Scrutton Street<br/>
                           London EC244 RQ, UK<br/>
                           (239) 555-0108<br/>
                           info@gcbp.org
                        </div>
                     </div>
                  </div>
               </div>

               {/* Image Side */}
               <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto bg-orange-700 overflow-hidden">
                  <img 
                    src="/img5.jpeg" 
                    alt="Subscribe Model" 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
                  />
                  <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 right-6 sm:right-8 md:right-10 text-white text-right">
                     <span className="block font-serif text-2xl sm:text-3xl">GCBP</span>
                     <span className="text-[10px] sm:text-xs uppercase tracking-widest opacity-70">Collective Action</span>
                  </div>
               </div>
            </div>
         </div>
         {/* Footer Bottom Strip */}
         <div className="bg-[#D1D5DB] py-3 sm:py-4 px-4 text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-gray-500 flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 max-w-7xl mx-auto">
            <span>© Designed by GCBP Creative.</span>
            <div className="flex gap-3 sm:gap-4">
               <span>Privacy</span>
               <span>Terms</span>
            </div>
         </div>
      </section>

    </div>
  );
};