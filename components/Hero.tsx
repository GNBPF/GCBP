import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.9, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  
  const smoothY = useSpring(y, { stiffness: 50, damping: 20, mass: 0.5 });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden flex flex-col justify-center min-h-screen pt-16 sm:pt-20 md:pt-24">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 bg-ngo-navy top-16 sm:top-20 md:top-24 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)]"
        style={{ y: smoothY, scale }}
      >
        <motion.img 
          src="/homeBg.webp" 
          alt="Background" 
          className="w-full h-full object-cover"
          style={{ opacity }}
        />
        
        {/* Black Fade Overlay - Reduced opacity */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto container-padding w-full py-8 sm:py-12 md:py-16 lg:py-20"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span 
              className="inline-block py-1 px-2 sm:px-3 border border-white/30 rounded text-white/90 text-[9px] sm:text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest mb-3 sm:mb-4 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            >
              Non-Profit Organization
            </motion.span>
            <motion.h1 
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight mb-3 sm:mb-4 md:mb-5 drop-shadow-md break-words"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Collective action for <br className="hidden sm:block"/>
              <motion.span 
                className="italic text-ngo-accent"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              >
                a resilient earth.
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.p 
            className="font-sans text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed mb-5 sm:mb-6 md:mb-8 max-w-xl drop-shadow-sm break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            We unite communities, policymakers, and scientists to achieve the 17 Sustainable Development Goals. Real impact, measured in lives changed and ecosystems restored.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-2 sm:gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <motion.a 
              href="#mission" 
              className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 bg-ngo-accent text-ngo-navy font-sans font-bold text-xs sm:text-sm md:text-base tracking-wide rounded hover:bg-white transition-colors duration-300 text-center min-h-[44px] flex items-center justify-center"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ scale: 1.05, y: -3, boxShadow: "0 12px 24px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              Our Projects
            </motion.a>
            <motion.a 
              href="#join" 
              className="px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 bg-transparent border border-white text-white font-sans font-bold text-xs sm:text-sm md:text-base tracking-wide rounded hover:bg-white hover:text-ngo-navy transition-colors duration-300 text-center min-h-[44px] flex items-center justify-center"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ scale: 1.05, y: -3, boxShadow: "0 12px 24px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              Join the Collective
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Quick Stat Bar at Bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-ngo-navy/40 backdrop-blur-md py-3 md:py-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto container-padding">
          {/* Mobile: Stacked stats */}
          <div className="md:hidden flex flex-col gap-3 text-white pb-2">
            <div className="flex justify-between items-center">
              <motion.div 
                className="text-center flex-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="block font-serif text-lg font-bold">35+</span>
                <span className="text-[9px] uppercase opacity-70">Active Years</span>
              </motion.div>
              <motion.div 
                className="text-center flex-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.05, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="block font-serif text-lg font-bold">42</span>
                <span className="text-[9px] uppercase opacity-70">Active Countries</span>
              </motion.div>
              <motion.div 
                className="text-center flex-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="block font-serif text-lg font-bold">12</span>
                <span className="text-[9px] uppercase opacity-70">Billion USD Impact</span>
              </motion.div>
            </div>
          </div>
          {/* Desktop: Horizontal layout */}
          <div className="hidden md:flex justify-between text-white">
            <div className="flex gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.9, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="block font-serif text-xl font-bold">35+</span>
                <span className="text-[10px] uppercase opacity-70">Active Years</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.05, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="block font-serif text-xl font-bold">42</span>
                <span className="text-[10px] uppercase opacity-70">Active Countries</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className="block font-serif text-xl font-bold">12</span>
                <span className="text-[10px] uppercase opacity-70">Billion USD Impact</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};