import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero relative h-[140vh] min-h-[500px] mobile-small:min-h-[550px] xs:min-h-[600px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] 2xl:min-h-[1000px] max-h-[1800px] overflow-hidden pt-16 mobile-small:pt-20 xs:pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 2xl:pt-44">
      {/* Bubble Background - Responsive sizes */}
      <div className="bubble-bg absolute inset-0 w-full h-full opacity-0">
        <div className="absolute top-5 mobile-small:top-8 xs:top-10 left-5 mobile-small:left-8 xs:left-10 w-16 mobile-small:w-20 xs:w-24 sm:w-28 md:w-32 h-16 mobile-small:h-20 xs:h-24 sm:h-28 md:h-32 rounded-full bg-gcbp-primary/10 blur-xl"></div>
        <div className="absolute top-20 mobile-small:top-32 xs:top-40 right-10 mobile-small:right-16 xs:right-20 w-12 mobile-small:w-16 xs:w-20 sm:w-24 h-12 mobile-small:h-16 xs:h-20 sm:h-24 rounded-full bg-gcbp-primary/10 blur-xl"></div>
        <div className="absolute bottom-10 mobile-small:bottom-16 xs:bottom-20 left-1/4 w-20 mobile-small:w-28 xs:w-32 sm:w-36 md:w-40 h-20 mobile-small:h-28 xs:h-32 sm:h-36 md:h-40 rounded-full bg-gcbp-primary/10 blur-xl"></div>
        <div className="absolute bottom-20 mobile-small:bottom-32 xs:bottom-40 right-1/3 w-14 mobile-small:w-20 xs:w-24 sm:w-28 h-14 mobile-small:h-20 xs:h-24 sm:h-28 rounded-full bg-gcbp-primary/10 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-18 mobile-small:w-24 xs:w-28 sm:w-32 md:w-36 h-18 mobile-small:h-24 xs:h-28 sm:h-32 md:h-36 rounded-full bg-gcbp-primary/10 blur-xl"></div>
      </div>
      
      <div className="hero-images-wrap absolute inset-0 w-full h-full">
        {/* Top Row - 4 images with responsive spacing */}
        <div className="image-row row-1 absolute left-1/2 -translate-x-1/2 flex justify-center items-center w-full top-[6%] mobile-small:top-[7%] xs:top-[8%] sm:top-[9%] md:top-[10%] lg:top-[8%]">
          <div className="hero-img-mask w-[80px] h-[100px] mobile-small:w-[100px] mobile-small:h-[125px] xs:w-[120px] xs:h-[150px] sm:w-[140px] sm:h-[175px] md:w-[160px] md:h-[200px] lg:w-[180px] lg:h-[225px] xl:w-[200px] xl:h-[250px] 2xl:w-[220px] 2xl:h-[275px] 3xl:w-[240px] 3xl:h-[300px] rounded-lg overflow-hidden shadow-lg flex-shrink-0">
            <div className="hero-img-inner w-full h-full">
              <img src="/images/img1.jpg" alt="Nature" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="hero-img-mask w-[80px] h-[100px] mobile-small:w-[100px] mobile-small:h-[125px] xs:w-[120px] xs:h-[150px] sm:w-[140px] sm:h-[175px] md:w-[160px] md:h-[200px] lg:w-[180px] lg:h-[225px] xl:w-[200px] xl:h-[250px] 2xl:w-[220px] 2xl:h-[275px] 3xl:w-[240px] 3xl:h-[300px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 ml-3 mobile-small:ml-4 xs:ml-6 sm:ml-8 md:ml-10 lg:ml-12 xl:ml-14 2xl:ml-16 3xl:ml-20">
            <div className="hero-img-inner w-full h-full">
              <img src="/images/img2.jpg" alt="Community" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="hero-img-mask w-[80px] h-[100px] mobile-small:w-[100px] mobile-small:h-[125px] xs:w-[120px] xs:h-[150px] sm:w-[140px] sm:h-[175px] md:w-[160px] md:h-[200px] lg:w-[180px] lg:h-[225px] xl:w-[200px] xl:h-[250px] 2xl:w-[220px] 2xl:h-[275px] 3xl:w-[240px] 3xl:h-[300px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 ml-3 mobile-small:ml-4 xs:ml-6 sm:ml-8 md:ml-10 lg:ml-12 xl:ml-14 2xl:ml-16 3xl:ml-20">
            <div className="hero-img-inner w-full h-full">
              <img src="/images/img3.jpg" alt="Hands" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="hero-img-mask w-[80px] h-[100px] mobile-small:w-[100px] mobile-small:h-[125px] xs:w-[120px] xs:h-[150px] sm:w-[140px] sm:h-[175px] md:w-[160px] md:h-[200px] lg:w-[180px] lg:h-[225px] xl:w-[200px] xl:h-[250px] 2xl:w-[220px] 2xl:h-[275px] 3xl:w-[240px] 3xl:h-[300px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 ml-3 mobile-small:ml-4 xs:ml-6 sm:ml-8 md:ml-10 lg:ml-12 xl:ml-14 2xl:ml-16 3xl:ml-20">
            <div className="hero-img-inner w-full h-full">
              <img src="/images/img4.jpg" alt="Volunteer" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
        {/* Bottom Row - 3 images with responsive positioning */}
        <div className="image-row row-2 absolute left-1/2 -translate-x-1/2 flex justify-center items-center w-full top-[50%] mobile-small:top-[51%] xs:top-[52%] sm:top-[53%] md:top-[54%] lg:top-[53%]">
          <div className="hero-img-mask w-[80px] h-[100px] mobile-small:w-[100px] mobile-small:h-[125px] xs:w-[120px] xs:h-[150px] sm:w-[140px] sm:h-[175px] md:w-[160px] md:h-[200px] lg:w-[180px] lg:h-[225px] xl:w-[200px] xl:h-[250px] 2xl:w-[220px] 2xl:h-[275px] 3xl:w-[240px] 3xl:h-[300px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 translate-x-[60px] mobile-small:translate-x-[70px] xs:translate-x-[80px] sm:translate-x-[90px] md:translate-x-[100px] lg:translate-x-[110px] xl:translate-x-[120px] 2xl:translate-x-[130px] 3xl:translate-x-[140px]">
            <div className="hero-img-inner w-full h-full">
              <img src="/images/img5.jpg" alt="Child" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="hero-img-mask w-[80px] h-[100px] mobile-small:w-[100px] mobile-small:h-[125px] xs:w-[120px] xs:h-[150px] sm:w-[140px] sm:h-[175px] md:w-[160px] md:h-[200px] lg:w-[180px] lg:h-[225px] xl:w-[200px] xl:h-[250px] 2xl:w-[220px] 2xl:h-[275px] 3xl:w-[240px] 3xl:h-[300px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 ml-6 mobile-small:ml-8 xs:ml-10 sm:ml-12 md:ml-14 lg:ml-16 xl:ml-20 2xl:ml-24 3xl:ml-28">
            <div className="hero-img-inner w-full h-full">
              <img src="/images/img6.jpg" alt="Donation" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="hero-img-mask w-[80px] h-[100px] mobile-small:w-[100px] mobile-small:h-[125px] xs:w-[120px] xs:h-[150px] sm:w-[140px] sm:h-[175px] md:w-[160px] md:h-[200px] lg:w-[180px] lg:h-[225px] xl:w-[200px] xl:h-[250px] 2xl:w-[220px] 2xl:h-[275px] 3xl:w-[240px] 3xl:h-[300px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 ml-6 mobile-small:ml-8 xs:ml-10 sm:ml-12 md:ml-14 lg:ml-16 xl:ml-20 2xl:ml-24 3xl:ml-28">
            <div className="hero-img-inner w-full h-full">
              <img src="/images/img7.jpg" alt="Team" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
