import { motion } from 'framer-motion';
import { Home, DollarSign, Key, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import SectionHeading from '../ui/SectionHeading';

const services = [
  {
    icon: Home,
    titleKey: 'buyTitle',
    descKey: 'buyDesc'
  },
  {
    icon: DollarSign,
    titleKey: 'sellTitle',
    descKey: 'sellDesc'
  },
  {
    icon: Key,
    titleKey: 'rentTitle',
    descKey: 'rentDesc'
  }
];

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.services.title} />

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 group bg-white"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors duration-300">
                <service.icon size={28} className="text-slate-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-4">{t.services[service.titleKey as keyof typeof t.services]}</h3>
              <p className="text-slate-500 leading-relaxed mb-6 text-sm">
                {t.services[service.descKey as keyof typeof t.services]}
              </p>
              <button className="text-sm font-bold text-slate-900 flex items-center gap-2 group-hover:gap-3 transition-all">
                {t.services.learnMore} <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
