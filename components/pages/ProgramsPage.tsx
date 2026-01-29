import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { PROGRAM_STORIES } from '../../constants';

export const ProgramsPage: React.FC = () => {
  const [donationFrequency, setDonationFrequency] = useState<'one-time' | 'monthly'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState('50');

  return (
    <div className="pt-16 sm:pt-20 md:pt-24 bg-ngo-sand min-h-screen">
      
      {/* 1. Hero with Masked Typography (Reference: "VOICES UNITED" big text) */}
      <section className="relative pt-8 sm:pt-10 pb-12 sm:pb-16 md:pb-20 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
             <motion.h1 
               className="font-serif text-[10vw] sm:text-[12vw] md:text-[15vw] leading-[0.85] sm:leading-[0.8] font-bold text-center tracking-tighter break-words"
               initial={{ y: 60 }}
               animate={{ y: 0 }}
               transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
             >
                {/* Masked Text Effect */}
                <span className="block bg-[url('/img3.jpeg')] bg-cover bg-clip-text text-transparent bg-center">
                  GLOBAL
                </span>
                <span className="block text-ngo-navy">
                  ACTION
                </span>
             </motion.h1>
          </motion.div>
          
          <motion.p 
            className="mt-6 sm:mt-8 font-sans text-ngo-gray text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Real voices from the front lines of change. These are the people shaping their communities — and the future.
          </motion.p>
        </div>
      </section>

      {/* 2. Impact Stats & Intro (Reference: "IMPACT IN ACTION") */}
      <Section className="bg-white rounded-t-[2rem] sm:rounded-t-[3rem] mt-4 sm:mt-8 pb-16 sm:pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.8 }}
           >
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ngo-navy font-bold mb-4 sm:mb-6">
                 IMPACT <span className="text-ngo-accent">IN ACTION</span>
              </h2>
              <p className="font-sans text-ngo-gray leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                 Crafting excellence as a team. GCBP supports grassroots leaders, educators, and advocates who fight for equity, dignity, and justice. We focus on scalable solutions that empower local communities to manage their own resources.
              </p>
              <motion.div 
                className="flex flex-wrap gap-2 sm:gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                 <motion.span 
                   className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 border border-ngo-navy rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-ngo-navy"
                   initial={{ scale: 0, rotate: -180 }}
                   whileInView={{ scale: 1, rotate: 0 }}
                   viewport={{ once: true, amount: 0.3 }}
                   transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200, damping: 12 }}
                   whileHover={{ scale: 1.15, borderColor: "#4C9F38", transition: { duration: 0.2 } }}
                 >
                   Equal Rights
                 </motion.span>
                 <motion.span 
                   className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 border border-ngo-navy rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-ngo-navy"
                   initial={{ scale: 0, rotate: -180 }}
                   whileInView={{ scale: 1, rotate: 0 }}
                   viewport={{ once: true, amount: 0.3 }}
                   transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 200, damping: 12 }}
                   whileHover={{ scale: 1.15, borderColor: "#4C9F38", transition: { duration: 0.2 } }}
                 >
                   Protection
                 </motion.span>
                 <motion.span 
                   className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 border border-ngo-navy rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-ngo-navy"
                   initial={{ scale: 0, rotate: -180 }}
                   whileInView={{ scale: 1, rotate: 0 }}
                   viewport={{ once: true, amount: 0.3 }}
                   transition={{ delay: 0.6, duration: 0.6, type: "spring", stiffness: 200, damping: 12 }}
                   whileHover={{ scale: 1.15, borderColor: "#4C9F38", transition: { duration: 0.2 } }}
                 >
                   Planet
                 </motion.span>
              </motion.div>
           </motion.div>
           
           <motion.div 
             className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.6 }}
           >
              <motion.div 
                className="bg-ngo-sand p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between h-48 sm:h-56 md:h-64"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ y: -10, scale: 1.03, boxShadow: "0 25px 50px rgba(0,0,0,0.2)", transition: { duration: 0.25, ease: "easeOut" } }}
              >
                 <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-ngo-gray">Programs Funded</span>
                 <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-ngo-navy">70<span className="text-ngo-accent">+</span></div>
                 <p className="text-[9px] sm:text-xs text-ngo-gray mt-2">Local solutions that change lives, from climate to girls' education.</p>
              </motion.div>
              <motion.div 
                className="bg-white border border-gray-100 shadow-xl p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl flex flex-col justify-between h-48 sm:h-56 md:h-64"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ y: -10, scale: 1.03, boxShadow: "0 25px 50px rgba(0,0,0,0.2)", transition: { duration: 0.25, ease: "easeOut" } }}
              >
                 <span className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-ngo-gray">Children's Safety</span>
                 <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-ngo-navy">3.2k<span className="text-ngo-accent">+</span></div>
                 <p className="text-[9px] sm:text-xs text-ngo-gray mt-2">Supported shelters and trained community leaders to protect children.</p>
              </motion.div>
           </motion.div>
        </div>
      </Section>

      {/* 3. Donation & Stories Overlap Section */}
      <section className="relative bg-ngo-navy text-white pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 md:pb-32">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 opacity-20">
             <img src="/img4.jpeg" className="w-full h-full object-cover grayscale" alt="Background" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
              
              {/* Left: Donation Widget (Reference: "Choose Donate" Modal) */}
              <div className="bg-white text-ngo-text p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl max-w-md w-full mx-auto lg:mx-0 lg:-mt-32 xl:-mt-48 relative">
                 <h3 className="font-serif text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Choose Donation</h3>
                 
                 {/* Frequency Toggle */}
                 <div className="flex bg-ngo-sand p-1 rounded-full mb-6 sm:mb-8">
                    <button 
                      onClick={() => setDonationFrequency('one-time')}
                      className={`flex-1 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all ${donationFrequency === 'one-time' ? 'bg-white shadow text-ngo-navy' : 'text-ngo-gray hover:text-ngo-navy'}`}
                    >
                       One-Time
                    </button>
                    <button 
                      onClick={() => setDonationFrequency('monthly')}
                      className={`flex-1 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all ${donationFrequency === 'monthly' ? 'bg-white shadow text-ngo-navy' : 'text-ngo-gray hover:text-ngo-navy'}`}
                    >
                       Monthly
                    </button>
                 </div>

                 {/* Amount Grid */}
                 <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {['10', '15', '25', '50', '100', '500'].map((amt) => (
                       <button
                         key={amt}
                         onClick={() => setSelectedAmount(amt)}
                         className={`py-3 sm:py-4 rounded-lg sm:rounded-xl border transition-all duration-200 font-sans font-bold text-xs sm:text-sm ${selectedAmount === amt ? 'border-ngo-accent bg-ngo-accent/10 text-ngo-navy' : 'border-gray-200 text-ngo-gray hover:border-ngo-navy'}`}
                       >
                          ${amt}
                       </button>
                    ))}
                 </div>
                 
                 <div className="flex justify-between items-center bg-ngo-sand rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 mb-4 sm:mb-6">
                    <span className="text-xs sm:text-sm font-bold text-ngo-gray">$ Other</span>
                    <span className="text-[10px] sm:text-xs text-ngo-gray uppercase">USD</span>
                 </div>

                 <div className="flex items-start gap-2 sm:gap-3 mb-6 sm:mb-8">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded border border-gray-300 flex-shrink-0 mt-0.5"></div>
                    <p className="text-[10px] sm:text-xs text-ngo-gray leading-tight">
                       Yes, I generously add $0.75 each month to cover the transaction fees so 100% of my donation goes to the cause.
                    </p>
                 </div>

                 <a href="/donate" className="block w-full py-3 sm:py-4 bg-[#FF6B4A] text-white rounded-full font-bold uppercase tracking-wide shadow-lg hover:bg-[#E55A3B] transition-colors text-xs sm:text-sm text-center">
                    Donate Now
                 </a>
              </div>

              {/* Right: Text Context */}
              <div className="pt-6 sm:pt-10">
                 <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Help Voices Be Heard</h2>
                 <p className="font-sans text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                    We need your help to keep telling stories that matter. GCBP runs on community support — even $10 a month makes a real difference in providing clean water, legal aid, and educational resources.
                 </p>
                 <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center">
                       <svg className="w-5 h-5 sm:w-6 sm:h-6 text-ngo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                    </div>
                    <div>
                       <span className="block font-bold text-white text-sm sm:text-base">Trusted by 120k+ donors</span>
                       <span className="text-[10px] sm:text-xs text-white/60">100% Secure Transaction</span>
                    </div>
                 </div>
              </div>
          </div>
      </section>

      {/* 4. Stories Carousel (Reference: "HERE OUR STORIES" - Vertical pills) */}
      <section className="bg-ngo-sand py-12 sm:py-16 md:py-20 overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 sm:mb-10 md:mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
             <div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ngo-navy font-bold">
                   Here Our <span className="text-[#FF6B4A]">Stories</span>
                </h2>
                <p className="font-sans text-ngo-gray text-xs sm:text-sm mt-2">Real voices. Real impact.</p>
             </div>
             <div className="hidden md:flex gap-2">
                <button className="w-10 h-10 rounded-full border border-ngo-navy flex items-center justify-center hover:bg-ngo-navy hover:text-white transition-colors">&larr;</button>
                <button className="w-10 h-10 rounded-full border border-ngo-navy flex items-center justify-center hover:bg-ngo-navy hover:text-white transition-colors">&rarr;</button>
             </div>
         </div>

         {/* Scroll Container */}
         <div className="flex overflow-x-auto gap-4 sm:gap-6 px-4 md:px-8 pb-6 sm:pb-10 scrollbar-hide snap-x">
            {PROGRAM_STORIES.map((story, index) => (
               <motion.div 
                 key={story.id}
                 className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] h-[400px] sm:h-[450px] md:h-[500px] relative rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden group cursor-pointer snap-center"
                 initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                 whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                 viewport={{ once: true, amount: 0.3 }}
                 transition={{ delay: index * 0.1, duration: 0.6 }}
                 whileHover={{ y: -15, scale: 1.02 }}
               >
                  <motion.img 
                    src={story.imageUrl} 
                    alt={story.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8 text-white">
                     <span className="inline-block px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-2 sm:mb-3 border border-white/30">
                        Story
                     </span>
                     <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold leading-tight mb-2">{story.title}</h3>
                     <p className="font-sans text-[10px] sm:text-xs font-bold text-ngo-accent uppercase tracking-widest mb-2 sm:mb-3">{story.subtitle}</p>
                     <p className="font-sans text-xs sm:text-sm text-white/80 line-clamp-3">
                        {story.description}
                     </p>
                  </div>
               </motion.div>
            ))}
            
            {/* "See All" Card */}
            <a href="/programs" className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] h-[400px] sm:h-[450px] md:h-[500px] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] border-2 border-dashed border-ngo-navy/20 flex flex-col items-center justify-center text-ngo-navy hover:bg-white transition-colors cursor-pointer snap-center">
               <span className="font-serif text-lg sm:text-xl font-bold mb-2">See All Stories</span>
               <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-ngo-navy text-white flex items-center justify-center text-sm sm:text-base">&rarr;</div>
            </a>
         </div>
         
         <div className="text-center mt-6 sm:mt-8">
            <a href="/programs" className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-[#FF6B4A] text-white rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-ngo-navy transition-colors">
               Tell My Story
            </a>
         </div>
      </section>

    </div>
  );
};