import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-20 mobile-small:pt-24 xs:pt-28 sm:pt-32 md:pt-36 pb-12 mobile-small:pb-16 xs:pb-18 sm:pb-20 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="contact-hero-title text-[clamp(2rem,5vw,3rem)] mobile-small:text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-4 mobile-small:mb-5 xs:mb-6 sm:mb-8">
          Contact Us
        </h1>
        <p className="contact-hero-text text-[clamp(0.875rem,2.5vw,1.125rem)] mobile-small:text-base xs:text-lg sm:text-xl md:text-2xl text-slate-700 leading-relaxed max-w-3xl px-2">
          We'd love to hear from you. Whether you have questions about our programs, want to get involved, or simply want to learn more, our team is here to help.
        </p>
      </div>
    </section>
  );
};
