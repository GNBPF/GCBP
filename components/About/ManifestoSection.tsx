import React from 'react';

const manifestoLines = [
  'We are a purpose-led collective uniting communities, innovators, and institutions to build a healthier planet.',
  'We believe that real change begins with collective action and responsible stewardship of our shared future.',
  'Every collaboration, every project, and every voice moves us closer to a sustainable, equitable world.',
];

export const ManifestoSection: React.FC = () => {
  return (
    <section className="py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-6 mobile-small:mb-8 xs:mb-10">
          <span className="text-[10px] mobile-small:text-xs xs:text-sm sm:text-base tracking-[0.3em] mobile-small:tracking-[0.4em] text-slate-600 font-semibold uppercase">((ABOUT US))</span>
          <p className="about-paragraph text-[16px] mobile-small:text-lg xs:text-xl sm:text-2xl md:text-3xl leading-relaxed text-slate-700 max-w-5xl mt-4 mobile-small:mt-5 xs:mt-6">
            <span className="gcbp-highlight text-gcbp-primary font-bold">GCBP - GLOBAL COLLECTIVE FOR A BETTER PLANET</span> is a purpose-led initiative bringing together communities, innovators, and institutions to create sustainable, inclusive, and impactful solutions for a healthier planet. We believe that real change begins with collective action and responsible stewardship of our shared future. Every collaboration, every project, and every voice moves us closer to a sustainable, equitable world.
          </p>
        </div>
      </div>
    </section>
  );
};
