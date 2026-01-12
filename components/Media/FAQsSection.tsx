import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Can I attend events from outside my country?',
    answer: 'Yes, virtual events welcome global participants. Physical event participation depends on local rules and visa.',
  },
  {
    question: 'How do I prepare for outdoor volunteering?',
    answer: 'For outdoor volunteering, we recommend wearing comfortable, weather-appropriate clothing and closed-toe shoes. Bring water, sunscreen, and any personal items you may need. We provide all necessary tools and safety equipment.',
  },
  {
    question: 'Will I receive a certificate for volunteering?',
    answer: 'Yes, volunteers who complete a minimum number of hours receive a certificate of participation. This can be used for professional development, academic credit, or personal records.',
  },
];

interface FAQsSectionProps {
  openFaq: number | null;
  onFaqToggle: (index: number) => void;
}

export const FAQsSection: React.FC<FAQsSectionProps> = ({ openFaq, onFaqToggle }) => {
  return (
    <section className="faqs-section py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 bg-white">
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] mobile-small:text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gcbp-primary mb-6 mobile-small:mb-8 xs:mb-10 sm:mb-12">FAQs</h2>
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item faq-item-${index} border-b border-slate-200 ${openFaq === index ? 'active' : ''}`}
            >
              <button
                onClick={() => onFaqToggle(index)}
                className="w-full py-4 mobile-small:py-5 xs:py-6 flex items-center justify-between text-left group"
              >
                <span className="text-sm mobile-small:text-base xs:text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-gcbp-primary transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown className="faq-chevron w-4 mobile-small:w-5 xs:w-6 h-4 mobile-small:h-5 xs:h-6 text-gcbp-primary transition-transform flex-shrink-0" />
              </button>
              <div className="faq-answer overflow-hidden">
                <p className="pb-4 mobile-small:pb-5 xs:pb-6 text-[12px] mobile-small:text-sm xs:text-base sm:text-lg text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
