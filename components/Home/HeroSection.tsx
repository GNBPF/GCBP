import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero relative h-[140vh] min-h-[600px] max-h-[1800px] overflow-hidden pt-20 mobile-small:pt-24 xs:pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 2xl:pt-48">
      {/* Bubble Background */}
      <div className="bubble-bg absolute inset-0 w-full h-full opacity-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gcbp-primary/10 blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gcbp-primary/10 blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-gcbp-primary/10 blur-xl"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 rounded-full bg-gcbp-primary/10 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 rounded-full bg-gcbp-primary/10 blur-xl"></div>
      </div>
      
      <div className="hero-images-wrap absolute inset-0 w-full h-full">
        {/* Top Row - 4 images with gaps sized to fit 3 bottom images */}
        <div className="image-row row-1 absolute left-1/2 -translate-x-1/2 flex justify-center items-center w-full top-[8%] mobile-small:top-[9%] sm:top-[10%]">
          <div className="hero-img-mask w-[120px] h-[150px] mobile-small:w-[140px] mobile-small:h-[170px] xs:w-[160px] xs:h-[190px] sm:w-[180px] sm:h-[220px] md:w-[200px] md:h-[240px] lg:w-[220px] lg:h-[260px] xl:w-[240px] xl:h-[280px] 2xl:w-[260px] 2xl:h-[300px] rounded-lg overflow-hidden shadow-lg flex-shrink-0">
            <div className="hero-img-inner w-full h-full">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&w=300&q=80" alt="Nature" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="hero-img-mask w-[120px] h-[150px] mobile-small:w-[140px] mobile-small:h-[170px] xs:w-[160px] xs:h-[190px] sm:w-[180px] sm:h-[220px] md:w-[200px] md:h-[240px] lg:w-[220px] lg:h-[260px] xl:w-[240px] xl:h-[280px] 2xl:w-[260px] 2xl:h-[300px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 ml-[120px] mobile-small:ml-[140px] xs:ml-[160px] sm:ml-[180px] md:ml-[200px] lg:ml-[220px] xl:ml-[240px] 2xl:ml-[260px]">
            <div className="hero-img-inner w-full h-full">
              <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=300&q=80" alt="Community" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="hero-img-mask w-[120px] h-[150px] mobile-small:w-[140px] mobile-small:h-[170px] xs:w-[160px] xs:h-[190px] sm:w-[180px] sm:h-[220px] md:w-[200px] md:h-[240px] lg:w-[220px] lg:h-[260px] xl:w-[240px] xl:h-[280px] 2xl:w-[260px] 2xl:h-[300px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 ml-[120px] mobile-small:ml-[140px] xs:ml-[160px] sm:ml-[180px] md:ml-[200px] lg:ml-[220px] xl:ml-[240px] 2xl:ml-[260px]">
            <div className="hero-img-inner w-full h-full">
              <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=300&q=80" alt="Hands" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="hero-img-mask w-[120px] h-[150px] mobile-small:w-[140px] mobile-small:h-[170px] xs:w-[160px] xs:h-[190px] sm:w-[180px] sm:h-[220px] md:w-[200px] md:h-[240px] lg:w-[220px] lg:h-[260px] xl:w-[240px] xl:h-[280px] 2xl:w-[260px] 2xl:h-[300px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 ml-[120px] mobile-small:ml-[140px] xs:ml-[160px] sm:ml-[180px] md:ml-[200px] lg:ml-[220px] xl:ml-[240px] 2xl:ml-[260px]">
            <div className="hero-img-inner w-full h-full">
              <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=300&q=80" alt="Volunteer" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        {/* Bottom Row - 3 images positioned to fit in the 3 gaps between top 4 images */}
        <div className="image-row row-2 absolute left-1/2 -translate-x-1/2 flex justify-center items-center w-full top-[53%] mobile-small:top-[54%] sm:top-[55%]">
          <div className="hero-img-mask w-[120px] h-[150px] mobile-small:w-[140px] mobile-small:h-[170px] xs:w-[160px] xs:h-[190px] sm:w-[180px] sm:h-[220px] md:w-[200px] md:h-[240px] lg:w-[220px] lg:h-[260px] xl:w-[240px] xl:h-[280px] 2xl:w-[260px] 2xl:h-[300px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 translate-x-[180px] mobile-small:translate-x-[210px] xs:translate-x-[240px] sm:translate-x-[270px] md:translate-x-[300px] lg:translate-x-[330px] xl:translate-x-[360px] 2xl:translate-x-[390px]">
            <div className="hero-img-inner w-full h-full">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=300&q=80" alt="Child" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="hero-img-mask w-[120px] h-[150px] mobile-small:w-[140px] mobile-small:h-[170px] xs:w-[160px] xs:h-[190px] sm:w-[180px] sm:h-[220px] md:w-[200px] md:h-[240px] lg:w-[220px] lg:h-[260px] xl:w-[240px] xl:h-[280px] 2xl:w-[260px] 2xl:h-[300px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 ml-[240px] mobile-small:ml-[280px] xs:ml-[320px] sm:ml-[360px] md:ml-[400px] lg:ml-[440px] xl:ml-[480px] 2xl:ml-[520px]">
            <div className="hero-img-inner w-full h-full">
              <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=300&q=80" alt="Donation" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="hero-img-mask w-[120px] h-[150px] mobile-small:w-[140px] mobile-small:h-[170px] xs:w-[160px] xs:h-[190px] sm:w-[180px] sm:h-[220px] md:w-[200px] md:h-[240px] lg:w-[220px] lg:h-[260px] xl:w-[240px] xl:h-[280px] 2xl:w-[260px] 2xl:h-[300px] rounded-lg overflow-hidden shadow-lg flex-shrink-0 ml-[240px] mobile-small:ml-[280px] xs:ml-[320px] sm:ml-[360px] md:ml-[400px] lg:ml-[440px] xl:ml-[480px] 2xl:ml-[520px]">
            <div className="hero-img-inner w-full h-full">
              <img src="https://images.unsplash.com/photo-1518398046578-8cca57782e39?auto=format&fit=crop&w=300&q=80" alt="Team" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
