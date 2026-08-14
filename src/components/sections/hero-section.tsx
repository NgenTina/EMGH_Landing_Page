import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import { useLanguage } from "../../contexts/language-context";
import Button from "../ui/button";

export default function HeroSection() {
  const { t } = useLanguage();
  const [selectedRoomIndex, setSelectedRoomIndex] = useState<number>(0);
  const [selectedGuestIndex, setSelectedGuestIndex] = useState<number>(0);
  const [openDropdown, setOpenDropdown] = useState<"room" | "guest" | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const roomTypes = t.hero.roomTypes || ["Single Room", "Deluxe Suite", "Family Room", "VIP Suite"];
  const guestTypes = Array.isArray(t.hero.house)
    ? t.hero.house
    : ["Private Room", "Shared Room"];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        </div>

        {/* Search Bar */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl md:rounded-full p-2 shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-2 relative z-20"
        >
          {/* Room Type Dropdown */}
          <div className="relative flex-1 w-full md:w-auto px-6 py-3 border-b md:border-b-0 md:border-r border-slate-100">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {t.hero.rentBuy}
            </label>
            <div
              onClick={() => setOpenDropdown(openDropdown === "room" ? null : "room")}
              className="flex items-center justify-between cursor-pointer select-none"
            >
              <span className="font-medium text-slate-900">
                {roomTypes[selectedRoomIndex] || roomTypes[0]}
              </span>
              <ChevronDown
                size={16}
                className={`text-slate-400 transition-transform ${openDropdown === "room" ? "rotate-180" : ""}`}
              />
            </div>

            <AnimatePresence>
              {openDropdown === "room" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-30 max-h-48 overflow-y-auto"
                >
                  {roomTypes.map((type, idx) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSelectedRoomIndex(idx);
                        setOpenDropdown(null);
                      }}
                      className={`w-full px-6 py-2 text-left text-sm transition-colors hover:bg-slate-50 ${
                        selectedRoomIndex === idx
                          ? "font-bold text-slate-900 bg-slate-50"
                          : "text-slate-600"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Guest / House Type Dropdown */}
          <div className="relative flex-1 w-full md:w-auto px-6 py-3 border-b md:border-b-0 md:border-r border-slate-100">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {t.hero.type}
            </label>
            <div
              onClick={() => setOpenDropdown(openDropdown === "guest" ? null : "guest")}
              className="flex items-center justify-between cursor-pointer select-none"
            >
              <span className="font-medium text-slate-900">
                {guestTypes[selectedGuestIndex] || guestTypes[0]}
              </span>
              <ChevronDown
                size={16}
                className={`text-slate-400 transition-transform ${openDropdown === "guest" ? "rotate-180" : ""}`}
              />
            </div>

            <AnimatePresence>
              {openDropdown === "guest" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-30"
                >
                  {guestTypes.map((gt, idx) => (
                    <button
                      key={gt}
                      onClick={() => {
                        setSelectedGuestIndex(idx);
                        setOpenDropdown(null);
                      }}
                      className={`w-full px-6 py-2 text-left text-sm transition-colors hover:bg-slate-50 ${
                        selectedGuestIndex === idx
                          ? "font-bold text-slate-900 bg-slate-50"
                          : "text-slate-600"
                      }`}
                    >
                      {gt}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Location */}
          <div className="flex-2 w-full md:w-auto px-6 py-3">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              {t.hero.location}
            </label>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-slate-400 shrink-0" />
              <span className="font-medium text-slate-900 truncate">
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
