import React from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

export const ContactInfoSection: React.FC = () => {
  return (
    <div className="address-section space-y-6 mobile-small:space-y-7 xs:space-y-8">
      <div>
        <h2 className="text-[clamp(1.5rem,4vw,2rem)] mobile-small:text-2xl xs:text-3xl sm:text-4xl font-bold text-slate-900 mb-4 mobile-small:mb-5 xs:mb-6 sm:mb-8">Get In Touch</h2>
        <div className="space-y-4 mobile-small:space-y-5 xs:space-y-6">
          <div className="address-line flex items-start gap-3 mobile-small:gap-4">
            <MapPin className="w-5 mobile-small:w-6 h-5 mobile-small:h-6 text-gcbp-primary mt-0.5 mobile-small:mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-1.5 mobile-small:mb-2 text-sm mobile-small:text-base xs:text-lg">Address</h3>
              <p className="text-[12px] mobile-small:text-sm xs:text-base sm:text-lg text-slate-700 leading-relaxed">
                C - 20, G Block Rd, G Block BKC,<br />
                Bandra Kurla Complex, Bandra East,<br />
                Mumbai, Maharashtra 400051
              </p>
            </div>
          </div>

          <div className="address-line flex items-start gap-3 mobile-small:gap-4">
            <Mail className="w-5 mobile-small:w-6 h-5 mobile-small:h-6 text-gcbp-primary mt-0.5 mobile-small:mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-1.5 mobile-small:mb-2 text-sm mobile-small:text-base xs:text-lg">Email</h3>
              <a href="mailto:connect@gnbp.org" className="text-[12px] mobile-small:text-sm xs:text-base sm:text-lg text-gcbp-primary hover:underline">
                connect@gnbp.org
              </a>
            </div>
          </div>

          <div className="address-line flex items-start gap-3 mobile-small:gap-4">
            <Clock className="w-5 mobile-small:w-6 h-5 mobile-small:h-6 text-gcbp-primary mt-0.5 mobile-small:mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-1.5 mobile-small:mb-2 text-sm mobile-small:text-base xs:text-lg">Availability</h3>
              <p className="text-[12px] mobile-small:text-sm xs:text-base sm:text-lg text-slate-700">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
