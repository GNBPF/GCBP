import React from 'react';

export const SupportSection: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-4 mobile-small:px-6 xs:px-8 sm:px-[6%] md:px-[8%] lg:px-[10%] xl:px-[12%] bg-slate-50">
      <div className="support-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mobile-small:gap-5 xs:gap-6 sm:gap-7 md:gap-8 max-w-6xl mx-auto w-full">
        <div className="support-card bg-white shadow-md p-4 mobile-small:p-5 xs:p-6 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="h-32 mobile-small:h-36 xs:h-40 sm:h-44 md:h-48 rounded-md overflow-hidden mb-3 mobile-small:mb-4">
            <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80" alt="Sustainability" className="w-full h-full object-cover" />
          </div>
          <h5 className="my-3 mobile-small:my-4 text-gcbp-primary font-bold text-base mobile-small:text-lg sm:text-xl">Sustainability</h5>
          <p className="text-xs mobile-small:text-sm sm:text-base text-slate-600">Projects focused on green energy and reducing carbon footprint in urban areas.</p>
        </div>
        <div className="support-card bg-white shadow-md p-4 mobile-small:p-5 xs:p-6 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="h-32 mobile-small:h-36 xs:h-40 sm:h-44 md:h-48 rounded-md overflow-hidden mb-3 mobile-small:mb-4">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80" alt="Education" className="w-full h-full object-cover" />
          </div>
          <h5 className="my-3 mobile-small:my-4 text-gcbp-primary font-bold text-base mobile-small:text-lg sm:text-xl">Education</h5>
          <p className="text-xs mobile-small:text-sm sm:text-base text-slate-600">Empowering local leaders through workshops, scholarships, and school building.</p>
        </div>
        <div className="support-card bg-white shadow-md p-4 mobile-small:p-5 xs:p-6 rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl sm:col-span-2 md:col-span-1">
          <div className="h-32 mobile-small:h-36 xs:h-40 sm:h-44 md:h-48 rounded-md overflow-hidden mb-3 mobile-small:mb-4">
            <img src="https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?auto=format&fit=crop&w=600&q=80" alt="Health" className="w-full h-full object-cover" />
          </div>
          <h5 className="my-3 mobile-small:my-4 text-gcbp-primary font-bold text-base mobile-small:text-lg sm:text-xl">Health</h5>
          <p className="text-xs mobile-small:text-sm sm:text-base text-slate-600">Providing clean water access and medical supplies to remote villages.</p>
        </div>
      </div>
    </section>
  );
};
