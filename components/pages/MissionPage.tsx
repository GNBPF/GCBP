import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { METRICS, TEAM, TESTIMONIALS } from '../../constants';

export const MissionPage: React.FC = () => {
  return (
    <div className="pt-16 sm:pt-20 bg-ngo-sand min-h-screen">
      
      {/* 1. Header Section: Title Left, Images Right (Reference: "Crafting Excellence Together") */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
           >
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                 <span className="h-[1px] w-6 sm:w-8 bg-ngo-green"></span>
                 <span className="text-ngo-green font-bold text-[10px] sm:text-xs uppercase tracking-widest">Our Purpose</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ngo-navy font-bold leading-[1.1] mb-4 md:mb-6">
                United for a <br/>
                <span className="italic text-ngo-green">Sustainable Future</span>
              </h1>
              <p className="font-sans text-ngo-gray text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                We believe in the power of collective action. By bridging the gap between local communities and global policy, we create solutions that stand the test of time.
              </p>
           </motion.div>
           
           <motion.div 
             className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full mt-8 lg:mt-0"
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
           >
              {/* Main Image */}
              <img 
                src="/img3.jpeg"
                alt="Volunteers"
                className="absolute right-0 top-0 w-4/5 h-4/5 object-cover rounded-tr-[40px] sm:rounded-tr-[60px] md:rounded-tr-[80px] rounded-bl-[40px] sm:rounded-bl-[60px] md:rounded-bl-[80px] shadow-xl z-10"
              />
              {/* Secondary Image overlapping */}
              <img 
                src="/img4.jpeg"
                alt="Technology"
                className="absolute left-0 bottom-0 w-3/5 h-3/5 object-cover rounded-tl-[30px] sm:rounded-tl-[45px] md:rounded-tl-[60px] rounded-br-[30px] sm:rounded-br-[45px] md:rounded-br-[60px] border-2 sm:border-4 border-white shadow-lg z-20"
              />
              {/* Circular Badge */}
              <div className="absolute top-[60%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center z-30 shadow-md">
                 <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border border-dashed border-ngo-navy rounded-full flex items-center justify-center">
                    <span className="font-serif font-bold text-ngo-navy text-sm sm:text-base md:text-xl">17+</span>
                 </div>
              </div>
           </motion.div>
        </div>
      </Section>

      {/* 2. Intro Text Block (Reference: "At Renovex we are committed...") */}
      <section className="py-12 sm:py-16 md:py-20 px-4 max-w-4xl mx-auto text-center">
         <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-ngo-navy leading-relaxed">
           At GCBP we are committed to revolutionizing the non-profit sector with <span className="text-ngo-green italic">innovative</span>, <span className="text-ngo-green italic">sustainable</span>, and <span className="text-ngo-green italic">data-driven</span> solutions. With a proven track record, we combine state-of-the-art research, skilled expertise, and community-centric approaches.
         </h3>
      </section>

      {/* 3. Stats Strip (Reference: 150+ Projects...) */}
      <section className="pb-12 sm:pb-16 md:pb-20 px-4 max-w-6xl mx-auto">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {METRICS.map((metric) => (
              <div key={metric.id} className="text-center">
                 <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ngo-navy mb-2">
                   {metric.value}<span className="text-ngo-accent text-2xl sm:text-3xl">{metric.suffix}</span>
                 </h4>
                 <p className="font-sans text-ngo-gray text-[10px] sm:text-xs font-bold uppercase tracking-widest">{metric.label}</p>
              </div>
            ))}
         </div>
      </section>

      {/* 4. Our Mission (Zig-Zag: Images Left, Text Right) */}
      <Section className="bg-white rounded-2xl sm:rounded-3xl mx-2 sm:mx-4 md:mx-8 mb-6 sm:mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
           <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-ngo-sand rounded-tr-[50px] sm:rounded-tr-[80px] md:rounded-tr-[100px] rounded-bl-[50px] sm:rounded-bl-[80px] md:rounded-bl-[100px] z-0 top-2 left-2 sm:top-4 sm:left-4"></div>
              <img 
                src="/img5.jpeg" 
                alt="Mission planning"
                className="relative z-10 w-full h-full object-cover rounded-tr-[50px] sm:rounded-tr-[80px] md:rounded-tr-[100px] rounded-bl-[50px] sm:rounded-bl-[80px] md:rounded-bl-[100px] shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 bg-white p-2 sm:p-4 rounded-lg shadow-xl z-20 max-w-[150px] sm:max-w-[200px] hidden sm:block">
                 <img src="/img6.jpeg" className="w-full h-24 sm:h-32 object-cover rounded mb-2" alt="Inset" />
              </div>
           </div>
           
           <div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ngo-navy font-bold mb-4 sm:mb-6">Our Mission</h2>
              <p className="font-sans text-ngo-gray mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                To provide exceptional development services that exceed community expectations through innovation, quality stewardship, and a commitment to sustainability. We aim to build lasting relationships and create spaces that enhance human dignity.
              </p>
              <ul className="space-y-4">
                {[
                  'Fostering Sustainable Growth and Green Development',
                  'Innovating for a Resilient Future',
                  'Community-Centric Approach',
                  'Building Stronger Institutions'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-sans text-ngo-navy font-medium">
                    <span className="w-5 h-5 rounded-full bg-ngo-green/20 flex items-center justify-center text-ngo-green text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
           </div>
        </div>
      </Section>

      {/* 5. Our Vision (Zig-Zag: Text Left, Images Right) */}
      <Section className="bg-ngo-sand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
           <div className="order-2 lg:order-1">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ngo-navy font-bold mb-4 sm:mb-6">Our Vision</h2>
              <p className="font-sans text-ngo-gray mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                At GCBP, our vision is to redefine the future of conservation through innovation, sustainability, and excellence. We aim to create structures that not only inspire but also contribute to the well-being of communities and the environment.
              </p>
              <ul className="space-y-4">
                {[
                  'Inspiring Modern Policy Architecture',
                  'Pioneering Sustainable Systems',
                  'Empowering Communities Through Innovation',
                  'Leading the Future of Building Solutions'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-sans text-ngo-navy font-medium">
                     <span className="w-5 h-5 rounded-full bg-ngo-green/20 flex items-center justify-center text-ngo-green text-xs">✓</span>
                     {item}
                  </li>
                ))}
              </ul>
           </div>

           <div className="order-1 lg:order-2 flex gap-2 sm:gap-4 h-[300px] sm:h-[400px] md:h-[500px]">
              <img 
                 src="/img7.jpeg" 
                 className="w-1/2 h-full object-cover rounded-tl-[40px] sm:rounded-tl-[60px] md:rounded-tl-[80px] rounded-br-[10px] sm:rounded-br-[15px] md:rounded-br-[20px] shadow-lg mt-4 sm:mt-6 md:mt-8"
                 alt="Vision 1"
              />
              <img 
                 src="/img8.jpeg" 
                 className="w-1/2 h-full object-cover rounded-tr-[10px] sm:rounded-tr-[15px] md:rounded-tr-[20px] rounded-bl-[40px] sm:rounded-bl-[60px] md:rounded-bl-[80px] shadow-lg mb-4 sm:mb-6 md:mb-8"
                 alt="Vision 2"
              />
           </div>
        </div>
      </Section>

      {/* 6. Our History (Zig-Zag: Images Left, Text Right) */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
           <div className="relative">
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                 <img src="/img9.jpeg" className="rounded-lg h-48 sm:h-56 md:h-64 w-full object-cover" alt="History 1" />
                 <img src="/img10.jpeg" className="rounded-lg h-48 sm:h-56 md:h-64 w-full object-cover mt-6 sm:mt-8 md:mt-12" alt="History 2" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ngo-navy text-white p-4 sm:p-6 rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center text-center shadow-xl border-2 sm:border-4 border-white">
                 <span className="font-serif font-bold text-sm sm:text-base md:text-xl leading-tight">Since <br/> 1989</span>
              </div>
           </div>
           
           <div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ngo-navy font-bold mb-4 sm:mb-6">Our History</h2>
              <p className="font-sans text-ngo-gray mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Founded on a commitment to quality and innovation, GCBP began as a small team with a big vision. Over the years, we have grown into a trusted name in the NGO sector, delivering exceptional projects that stand the test of time.
              </p>
              <ul className="space-y-4">
                {[
                  'Humble Beginnings in Geneva',
                  'Milestones and Global Achievements',
                  'Building a Legacy of Trust',
                  'Shaping the Future, Rooted in the Past'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-sans text-ngo-navy font-medium">
                    <span className="w-5 h-5 rounded-full bg-ngo-green/20 flex items-center justify-center text-ngo-green text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
           </div>
        </div>
      </Section>

      {/* 7. How We Do Work (Video Section) */}
      <section className="py-12 sm:py-16 md:py-20 bg-ngo-sand text-center px-4">
         <div className="max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ngo-navy font-bold mb-3 sm:mb-4">How We Work</h2>
            <p className="font-sans text-ngo-gray text-sm sm:text-base">
              We follow a collaborative and transparent process, ensuring clear communication and expert execution at every stage of the project.
            </p>
         </div>
         <div className="relative w-full max-w-6xl mx-auto h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] overflow-hidden group cursor-pointer shadow-2xl">
            <img 
               src="/img1.jpeg" 
               alt="Video Thumbnail"
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
               <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-ngo-accent rounded-full flex items-center justify-center text-ngo-navy shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
               </div>
            </div>
         </div>
      </section>

      {/* 8. Team Section (Reference: "Crafting Excellence as a Team") */}
      <Section className="bg-white">
         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 md:mb-12 gap-4">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ngo-navy font-bold max-w-md">Crafting Excellence as a Team</h2>
            <button className="bg-ngo-accent text-ngo-navy px-4 sm:px-6 py-2 rounded font-bold text-xs sm:text-sm hover:bg-ngo-navy hover:text-white transition-colors">
               See All Members
            </button>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TEAM.map((member) => (
               <div key={member.id} className="group">
                  <div className="overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-4 h-64 sm:h-72 md:h-80 relative">
                     <img 
                        src={member.imageUrl} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                     <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center text-ngo-navy cursor-pointer hover:bg-ngo-accent text-xs sm:text-sm">in</div>
                     </div>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-ngo-navy">{member.name}</h3>
                  <p className="font-sans text-[10px] sm:text-xs text-ngo-gray uppercase tracking-widest">{member.role}</p>
               </div>
            ))}
         </div>
      </Section>

      {/* 9. Testimonials (Reference: "Why Say Our Customers") */}
      <Section className="bg-ngo-sand">
         <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ngo-navy font-bold mb-3 sm:mb-4">Why Say Our Partners</h2>
            <p className="font-sans text-ngo-gray max-w-2xl mx-auto text-sm sm:text-base">
               Our partners trust us for our reliability, attention to detail, and dedication to delivering projects on time and within budget.
            </p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t) => (
               <div key={t.id} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                     <img src={t.imageUrl} alt={t.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />
                     <div>
                        <h4 className="font-serif font-bold text-ngo-navy text-sm sm:text-base">{t.name}</h4>
                        <p className="text-[9px] sm:text-[10px] uppercase text-ngo-gray tracking-widest">{t.role}</p>
                     </div>
                  </div>
                  <div className="flex text-ngo-accent mb-3 sm:mb-4 text-sm sm:text-base">
                     {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                  <p className="font-sans text-ngo-gray italic leading-relaxed text-xs sm:text-sm">"{t.quote}"</p>
               </div>
            ))}
         </div>
      </Section>

      {/* 10. Bottom Banner (Reference: "Let's Create Your Ideal Space") */}
      <section className="bg-[#111] py-12 sm:py-16 md:py-20 px-4 text-center">
         <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-3 sm:mb-4">Let's Create Your Ideal Future</h2>
         <p className="font-sans text-white/60 mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto text-sm sm:text-base">
            Together, we'll design and build a space that perfectly matches your vision, needs, and lifestyle. From concept to completion, we're here.
         </p>
         <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-md mx-auto bg-white/10 p-2 rounded-full backdrop-blur-sm">
            <input type="email" placeholder="Enter your Email" className="bg-transparent border-none text-white px-4 sm:px-6 py-2 w-full focus:outline-none placeholder:text-white/40 text-sm sm:text-base" />
            <button className="bg-ngo-accent text-ngo-navy font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-white transition-colors w-full sm:w-auto whitespace-nowrap text-sm sm:text-base">
               Subscribe
            </button>
         </div>
      </section>

    </div>
  );
};