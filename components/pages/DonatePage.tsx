import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMPACT_TIERS = [
  { amount: 500, label: 'Seed', impact: 'Provides school supplies for 2 children.', icon: '🌱', color: '#4C9F38' },
  { amount: 1000, label: 'Sprout', impact: 'Funds a micro-loan for a female entrepreneur.', icon: '👩‍🌾', color: '#DDA63A' },
  { amount: 2500, label: 'Bloom', impact: 'Plants 150 trees in the Amazon basin.', icon: '🌳', color: '#2E5C38' },
  { amount: 5000, label: 'Harvest', impact: 'Installs a solar pump for a village water well.', icon: '💧', color: '#0A97D9' },
  { amount: 10000, label: 'Ecosystem', impact: 'Sponsors a full year of education for a classroom.', icon: '🎓', color: '#E5243B' },
];

export const DonatePage: React.FC = () => {
  const [amount, setAmount] = useState(2500);
  const [frequency, setFrequency] = useState<'monthly' | 'one-time'>('monthly');

  // Find the closest tier for impact visualization
  const activeTier = IMPACT_TIERS.reduce((prev, curr) => 
    Math.abs(curr.amount - amount) < Math.abs(prev.amount - amount) ? curr : prev
  );

  return (
    <div className="pt-16 sm:pt-20 md:pt-24 min-h-screen bg-ngo-sand font-sans text-ngo-navy">
      
      {/* Hero Section */}
      <section className="text-center py-10 sm:py-12 md:py-16 px-4">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block py-1 px-3 sm:px-4 border border-ngo-navy/20 rounded-full text-ngo-navy text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
            Invest in Humanity
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight sm:leading-none mb-4 sm:mb-6 break-words">
             Your Capital. <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-ngo-green to-ngo-blue">Our Action.</span>
          </h1>
          <p className="font-sans text-ngo-gray max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
             This is not just charity. It is a strategic investment in the planet's portfolio.
             See your ROI in lives changed and ecosystems restored.
          </p>
        </motion.div>
      </section>

      {/* Main Console */}
      <section className="max-w-6xl mx-auto px-4 pb-12 sm:pb-16 md:pb-20">
         <div className="bg-ngo-navy rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl text-white grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-24 overflow-hidden relative">
            
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            {/* Left Column: Input */}
            <div className="relative z-10">
               <div className="flex bg-white/10 p-1 rounded-full mb-6 sm:mb-8 md:mb-10 w-fit">
                  {['monthly', 'one-time'].map((freq) => (
                     <button
                        key={freq}
                        onClick={() => setFrequency(freq as any)}
                        className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${frequency === freq ? 'bg-white text-ngo-navy shadow-lg' : 'text-white/60 hover:text-white'}`}
                     >
                        {freq}
                     </button>
                  ))}
               </div>

               <div className="mb-6 sm:mb-8 md:mb-10">
                  <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-ngo-accent mb-3 sm:mb-4">Select Investment Amount (INR)</label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                     {IMPACT_TIERS.map((tier) => (
                        <motion.button
                           key={tier.amount}
                           onClick={() => setAmount(tier.amount)}
                           whileHover={{ scale: 1.08, y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
                           whileTap={{ scale: 0.96 }}
                           className={`py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 font-bold text-sm sm:text-base md:text-lg transition-all duration-200 ${amount === tier.amount ? 'border-ngo-accent bg-ngo-accent text-ngo-navy shadow-lg' : 'border-white/20 text-white hover:border-white/50'}`}
                        >
                           ₹{tier.amount}
                        </motion.button>
                     ))}
                  </div>
                  
                  {/* Custom Slider / Input */}
                  <div className="bg-white/5 rounded-lg sm:rounded-xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 border border-white/10">
                     <span className="text-xl sm:text-2xl font-serif">₹</span>
                     <input 
                        type="number" 
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="bg-transparent text-2xl sm:text-3xl md:text-4xl font-serif font-bold w-full outline-none border-none focus:ring-0"
                     />
                  </div>
               </div>

               <button className="w-full py-3 sm:py-4 md:py-5 bg-gradient-to-r from-ngo-green to-ngo-blue text-white rounded-lg sm:rounded-xl font-bold uppercase tracking-widest shadow-lg hover:shadow-ngo-green/20 hover:scale-[1.01] transition-all duration-300 flex justify-center items-center gap-2 group text-sm sm:text-base">
                  <span>Complete Transaction</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
               </button>
               
               <p className="mt-3 sm:mt-4 text-center text-[10px] sm:text-xs text-white/40">
                  Secure 256-bit SSL Encrypted Transaction. Tax Deductible.
               </p>
            </div>

            {/* Right Column: Visualization */}
            <div className="relative z-10 flex flex-col justify-center mt-8 lg:mt-0">
               <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/50 mb-4 sm:mb-6">Projected Impact Portfolio</h3>
               
               <AnimatePresence mode="wait">
                  <motion.div 
                     key={activeTier.amount}
                     initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                     animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                     exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                     transition={{ duration: 0.5, type: "spring" }}
                     className="bg-white text-ngo-navy rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
                     whileHover={{ scale: 1.02 }}
                  >
                     <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-ngo-sand rounded-bl-full -mr-6 -mt-6 sm:-mr-10 sm:-mt-10 z-0"></div>
                     
                     <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4 sm:mb-6">
                           <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl shadow-inner" style={{ backgroundColor: activeTier.color + '20' }}>
                              {activeTier.icon}
                           </div>
                           <div className="text-right">
                              <span className="block text-xl sm:text-2xl md:text-3xl font-serif font-bold" style={{ color: activeTier.color }}>{activeTier.label}</span>
                              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-ngo-gray">Tier Level</span>
                           </div>
                        </div>

                        <div className="mb-6 sm:mb-8">
                           <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-2" style={{ color: activeTier.color }}>
                              {amount >= activeTier.amount ? '100%' : Math.round((amount / activeTier.amount) * 100) + '%'}
                           </div>
                           <div className="w-full h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden">
                              <motion.div 
                                 className="h-full rounded-full"
                                 style={{ backgroundColor: activeTier.color }}
                                 initial={{ width: 0 }}
                                 animate={{ width: `${Math.min((amount / activeTier.amount) * 100, 100)}%` }}
                                 transition={{ duration: 1, type: "spring" }}
                              />
                           </div>
                        </div>

                        <h4 className="font-serif text-xl sm:text-2xl font-bold mb-2">Impact Output</h4>
                        <p className="font-sans text-ngo-gray text-sm sm:text-base md:text-lg leading-relaxed">
                           With a contribution of <strong className="text-ngo-navy">₹{amount}</strong>, you will directly support initiatives that:
                        </p>
                        <p className="mt-3 sm:mt-4 font-bold text-base sm:text-lg md:text-xl" style={{ color: activeTier.color }}>
                           {activeTier.impact}
                        </p>
                     </div>
                  </motion.div>
               </AnimatePresence>

               {/* Trust Indicators */}
               <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 opacity-60">
                  <div className="flex -space-x-2 sm:-space-x-3">
                     {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-ngo-navy bg-gray-600"></div>
                     ))}
                     <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-ngo-navy bg-ngo-green flex items-center justify-center text-[9px] sm:text-[10px] font-bold">+12k</div>
                  </div>
                  <div className="text-left sm:text-right">
                     <span className="block font-bold text-xs sm:text-sm">Join 12,402 Investors</span>
                     <span className="text-[10px] sm:text-xs">Worldwide</span>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* FAQ / Info Strip */}
      <section className="bg-white border-t border-gray-200 py-10 sm:py-12 md:py-16">
         <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
               <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-ngo-sand rounded-full flex items-center justify-center text-ngo-navy mb-3 sm:mb-4 font-serif font-bold text-lg sm:text-xl">1</div>
               <h4 className="font-bold text-ngo-navy mb-2 text-sm sm:text-base">Transparency</h4>
               <p className="text-xs sm:text-sm text-ngo-gray">100% of public donations fund our programs. Private donors cover our operating costs.</p>
            </div>
            <div>
               <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-ngo-sand rounded-full flex items-center justify-center text-ngo-navy mb-3 sm:mb-4 font-serif font-bold text-lg sm:text-xl">2</div>
               <h4 className="font-bold text-ngo-navy mb-2 text-sm sm:text-base">Tax Deductible</h4>
               <p className="text-xs sm:text-sm text-ngo-gray">GCBP is a registered 501(c)(3). You will receive an immediate tax receipt.</p>
            </div>
            <div>
               <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-ngo-sand rounded-full flex items-center justify-center text-ngo-navy mb-3 sm:mb-4 font-serif font-bold text-lg sm:text-xl">3</div>
               <h4 className="font-bold text-ngo-navy mb-2 text-sm sm:text-base">Cancel Anytime</h4>
               <p className="text-xs sm:text-sm text-ngo-gray">Monthly investments can be paused, modified, or cancelled instantly online.</p>
            </div>
         </div>
      </section>

    </div>
  );
};