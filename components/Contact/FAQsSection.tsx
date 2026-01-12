import React from 'react';
import { ChevronDown } from 'lucide-react';

const contactFaqs = [
  {
    question: 'Will I receive a certificate for volunteering?',
    answer: 'Yes, all volunteers who complete their commitment receive a certificate of participation. This recognizes your valuable contribution to our programs and can be used for professional development or personal records.',
  },
  {
    question: 'How long does it take to get a response?',
    answer: 'We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please call our direct line at +91 999-888-7777.',
  },
  {
    question: 'Can I schedule a meeting with the team?',
    answer: 'Absolutely! You can request a meeting through the contact form or by emailing us at hello@gcbp.org. We welcome the opportunity to discuss how you can get involved.',
  },
  {
    question: 'What information should I include in my message?',
    answer: 'Please include your name, contact information, and a brief description of how you would like to get involved or what questions you have. The more details you provide, the better we can assist you.',
  },
];

interface FAQsSectionProps {
  openFaq: number | null;
  onFaqToggle: (index: number) => void;
}

export const FAQsSection: React.FC<FAQsSectionProps> = ({ openFaq, onFaqToggle }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-8 mobile-small:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 px-4 mobile-small:px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] mobile-small:text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center text-slate-900 mb-6 mobile-small:mb-8 xs:mb-10 sm:mb-12">Frequently Asked Questions</h2>
        <div className="space-y-0">
          {contactFaqs.map((faq, index) => (
            <div
              key={index}
              className={`contact-faq-item contact-faq-item-${index} border-b border-slate-200`}
            >
              <button
                onClick={() => onFaqToggle(index)}
                className="w-full py-4 mobile-small:py-5 xs:py-6 flex items-center justify-between text-left group"
              >
                <span className="text-sm mobile-small:text-base xs:text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-gcbp-primary transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown className="contact-faq-chevron w-4 mobile-small:w-5 xs:w-6 h-4 mobile-small:h-5 xs:h-6 text-gcbp-primary transition-transform flex-shrink-0" />
              </button>
              <div className="contact-faq-answer overflow-hidden">
                <p className="pb-4 mobile-small:pb-5 xs:pb-6 text-[12px] mobile-small:text-sm xs:text-base sm:text-lg text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
