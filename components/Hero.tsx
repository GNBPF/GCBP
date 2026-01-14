import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center">
      {/* Background Video - Abstract Ocean */}
      <div className="absolute inset-0 z-0 bg-ngo-navy">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover blur-[3px] scale-110 opacity-90"
        >
          {/* Abstract underwater currents and light caustics */}
          <source src="https://videos.pexels.com/video-files/5502693/5502693-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        
        {/* Atmospheric Overlay */}
        <div className="absolute inset-0 bg-ngo-navy/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-ngo-navy/90 via-ngo-navy/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ngo-navy/90 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding w-full pt-20 sm:pt-24 md:pt-28 lg:pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-2 sm:px-3 border border-white/30 rounded text-white/90 text-[9px] sm:text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest mb-3 sm:mb-4 backdrop-blur-sm">
              Non-Profit Organization
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight mb-3 sm:mb-4 md:mb-5 drop-shadow-md">
              Collective action for <br className="hidden sm:block"/>
              <span className="italic text-ngo-accent">a resilient earth.</span>
            </h1>
          </motion.div>

          <motion.p 
            className="font-sans text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed mb-5 sm:mb-6 md:mb-8 max-w-xl drop-shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We unite communities, policymakers, and scientists to achieve the 17 Sustainable Development Goals. Real impact, measured in lives changed and ecosystems restored.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-2 sm:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#mission" className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-ngo-accent text-ngo-navy font-sans font-bold text-[11px] sm:text-xs md:text-sm tracking-wide rounded hover:bg-white transition-colors duration-300 text-center">
              Our Projects
            </a>
            <a href="#join" className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-transparent border border-white text-white font-sans font-bold text-[11px] sm:text-xs md:text-sm tracking-wide rounded hover:bg-white hover:text-ngo-navy transition-colors duration-300 text-center">
              Join the Collective
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Quick Stat Bar at Bottom */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-ngo-navy/40 backdrop-blur-md py-3 md:py-4">
        <div className="max-w-7xl mx-auto container-padding">
          {/* Mobile: Stacked stats */}
          <div className="md:hidden flex flex-col gap-3 text-white pb-2">
            <div className="flex justify-between items-center">
              <div className="text-center flex-1">
                <span className="block font-serif text-lg font-bold">35+</span>
                <span className="text-[9px] uppercase opacity-70">Years Active</span>
              </div>
              <div className="text-center flex-1">
                <span className="block font-serif text-lg font-bold">120</span>
                <span className="text-[9px] uppercase opacity-70">Countries</span>
              </div>
              <div className="text-center flex-1">
                <span className="block font-serif text-lg font-bold">17</span>
                <span className="text-[9px] uppercase opacity-70">SDGs Targeted</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-[10px] font-bold">
              <span>Scroll to Explore</span>
              <svg className="w-3 h-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </div>
          </div>
          {/* Desktop: Horizontal layout */}
          <div className="hidden md:flex justify-between text-white">
            <div className="flex gap-8 lg:gap-12">
              <div>
                <span className="block font-serif text-xl font-bold">35+</span>
                <span className="text-[10px] uppercase opacity-70">Years Active</span>
              </div>
              <div>
                <span className="block font-serif text-xl font-bold">120</span>
                <span className="text-[10px] uppercase opacity-70">Countries</span>
              </div>
              <div>
                <span className="block font-serif text-xl font-bold">17</span>
                <span className="text-[10px] uppercase opacity-70">SDGs Targeted</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold">
              <span>Scroll to Explore</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};