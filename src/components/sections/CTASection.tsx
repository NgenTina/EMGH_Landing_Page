import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../ui/Button';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">{t.cta.title}</h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          {t.cta.description}
        </p>
        <Button variant="white" className="text-lg px-10 py-4 h-auto shadow-xl hover:shadow-2xl transition-all">
          {t.cta.getStarted}
        </Button>
      </div>
    </section>
  );
}
