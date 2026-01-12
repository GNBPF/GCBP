import React from 'react';

export const SupportSection: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-slate-50">
      <div className="support-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mobile-small:gap-6 xs:gap-7 sm:gap-8 md:gap-10 max-w-6xl mx-auto w-full">
        <div className="support-card bg-white shadow-md p-4 mobile-small:p-5 xs:p-6 sm:p-7 md:p-8 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="h-32 mobile-small:h-36 xs:h-40 sm:h-44 md:h-48 lg:h-52 rounded-md overflow-hidden mb-3 mobile-small:mb-4">
            <img src="/images/img7.jpg" alt="Sustainability" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <h5 className="my-3 mobile-small:my-4 xs:my-5 text-gcbp-primary font-bold text-base mobile-small:text-lg xs:text-xl sm:text-2xl">Sustainability</h5>
          <p className="text-xs mobile-small:text-sm xs:text-base sm:text-lg text-slate-600 leading-relaxed">Projects focused on green energy and reducing carbon footprint in urban areas.</p>
        </div>
        <div className="support-card bg-white shadow-md p-4 mobile-small:p-5 xs:p-6 sm:p-7 md:p-8 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="h-32 mobile-small:h-36 xs:h-40 sm:h-44 md:h-48 lg:h-52 rounded-md overflow-hidden mb-3 mobile-small:mb-4">
            <img src="/images/img8.jpg" alt="Education" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <h5 className="my-3 mobile-small:my-4 xs:my-5 text-gcbp-primary font-bold text-base mobile-small:text-lg xs:text-xl sm:text-2xl">Education</h5>
          <p className="text-xs mobile-small:text-sm xs:text-base sm:text-lg text-slate-600 leading-relaxed">Empowering local leaders through workshops, scholarships, and school building.</p>
        </div>
        <div className="support-card bg-white shadow-md p-4 mobile-small:p-5 xs:p-6 sm:p-7 md:p-8 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl sm:col-span-2 lg:col-span-1">
          <div className="h-32 mobile-small:h-36 xs:h-40 sm:h-44 md:h-48 lg:h-52 rounded-md overflow-hidden mb-3 mobile-small:mb-4">
            <img src="/images/img1.jpg" alt="Health" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <h5 className="my-3 mobile-small:my-4 xs:my-5 text-gcbp-primary font-bold text-base mobile-small:text-lg xs:text-xl sm:text-2xl">Health</h5>
          <p className="text-xs mobile-small:text-sm xs:text-base sm:text-lg text-slate-600 leading-relaxed">Providing clean water access and medical supplies to remote villages.</p>
        </div>
      </div>
    </section>
  );
};
