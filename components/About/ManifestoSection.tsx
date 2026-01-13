import React from 'react';

const manifestoLines = [
  'We are a purpose-led collective uniting communities, innovators, and institutions to build a healthier planet.',
  'We believe that real change begins with collective action and responsible stewardship of our shared future.',
  'Every collaboration, every project, and every voice moves us closer to a sustainable, equitable world.',
];

export const ManifestoSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-[#FFFAF0]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8 md:mb-10">
          <span className="text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] text-[#5A5A5F] font-semibold uppercase font-sans">((ABOUT US))</span>
          <p className="about-paragraph text-lg md:text-xl lg:text-2xl leading-relaxed text-[#1F1F22] max-w-5xl mt-6 md:mt-8 font-sans">
            <span className="gcbp-highlight text-[#163FA5] font-bold">GCBP - GLOBAL COLLECTIVE FOR A BETTER PLANET</span> is a purpose-led initiative bringing together communities, innovators, and institutions to create sustainable, inclusive, and impactful solutions for a healthier planet. We believe that real change begins with collective action and responsible stewardship of our shared future. Every collaboration, every project, and every voice moves us closer to a sustainable, equitable world.
          </p>
        </div>
      </div>
    </section>
  );
};
