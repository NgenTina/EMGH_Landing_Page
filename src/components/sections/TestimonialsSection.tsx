import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    name: "John Miller",
    role: "Austin",
    textKey: 't1Text',
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Sarah Smith",
    role: "Buyer",
    textKey: 't2Text',
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "David Chen",
    role: "Investor",
    textKey: 't3Text',
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
  }
];

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle={t.testimonials.subtitle}
          title={t.testimonials.title}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
            >
              <div className="text-4xl text-slate-200 font-serif absolute top-6 left-6">"</div>
              <p className="text-slate-600 mb-8 relative z-10 pt-4">{t.testimonials[testimonial.textKey as keyof typeof t.testimonials]}</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
