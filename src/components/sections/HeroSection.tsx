import { motion } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import Button from "../ui/Button";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image1.jpeg"
          alt="Modern House"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="flex flex-col items-center text-center text-white mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 leading-tight"
          >
            {t.hero.title}
            <br />
            <span className="italic font-light">{t.hero.subtitle}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mb-8"
          >
            {t.hero.description}
          </motion.p>

          {/* Floating Property Card (Hero Decoration) */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block absolute right-5 top-12 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl max-w-xs text-left"
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white">Sunrise Suite</h4>
                <p className="text-xs text-white/70">
                  123 Hospitality Lane, Charming Town
                </p>
              </div>
            </div>
            <button className="w-full mt-2 bg-white text-slate-900 text-xs font-bold py-2 rounded-lg hover:bg-white/90 transition-colors">
              {t.services.learnMore}
            </button>
          </motion.div> */}
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-4xl p-2 shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-2"
        >
          <div className="flex-1 w-full md:w-auto px-6 py-3 border-b md:border-b-0 md:border-r border-slate-100">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {t.hero.rentBuy}
            </label>
            <div className="flex items-center justify-between cursor-pointer">
              <span className="font-medium text-slate-900">{t.hero.rent}</span>
              <ChevronDown size={16} className="text-slate-400" />
            </div>
          </div>
          <div className="flex-1 w-full md:w-auto px-6 py-3 border-b md:border-b-0 md:border-r border-slate-100">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {t.hero.type}
            </label>
            <div className="flex items-center justify-between cursor-pointer">
              <span className="font-medium text-slate-900">{t.hero.house}</span>
              <ChevronDown size={16} className="text-slate-400" />
            </div>
          </div>
          <div className="flex-2 w-full md:w-auto px-6 py-3">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {t.hero.location}
            </label>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-slate-400" />
              <span className="font-medium text-slate-900">
                {t.hero.placeLocation}
              </span>
            </div>
          </div>
          <Button
            onClick={() => (window.location.href = "tel:+855977979220")}
            className="w-full md:w-auto rounded-full px-8 bg-slate-900 hover:bg-slate-800 text-white shadow-lg"
          >
            {t.hero.findProperty}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
