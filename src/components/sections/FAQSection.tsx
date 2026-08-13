import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import FAQItem from '../ui/FAQItem';

export default function FAQSection() {
  const { t } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative h-[500px] rounded-3xl overflow-hidden hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop"
              alt="House Exterior"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-medium mb-8">{t.faq.title}</h2>
            <div className="space-y-0">
              {faqs.map((faq, idx) => (
                <FAQItem
                  key={idx}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFaqIndex === idx}
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
