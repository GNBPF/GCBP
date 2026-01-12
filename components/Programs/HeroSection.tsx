import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gcbp-primary h-[50vh] mobile-small:h-[55vh] min-h-[400px] mobile-small:min-h-[450px] xs:min-h-[500px] sm:min-h-[550px] max-h-[700px] flex items-center justify-center overflow-hidden pt-20 mobile-small:pt-24 xs:pt-28 sm:pt-32">
      {/* Background Bubble Pattern */}
      <div className="absolute inset-0 pointer-events-none bubble-pattern">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06)_0%,transparent_50%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.06)_0%,transparent_50%)]"></div>
      </div>

      {/* Hero Title */}
      <h1 className="hero-title relative z-10 text-[clamp(2.5rem,8vw,6rem)] mobile-small:text-[clamp(3rem,10vw,8rem)] sm:text-[clamp(4rem,12vw,10rem)] font-black text-white text-center leading-none px-4 mobile-small:px-6">
        OUR PROGRAMS
      </h1>
    </section>
  );
};
