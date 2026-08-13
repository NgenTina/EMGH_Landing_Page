import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, ChevronDown } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import type { Language } from "../../i18n";
import { cn } from "../../lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "default" | "mobile";
}

export default function LanguageSwitcher({
  className,
  variant = "default",
}: LanguageSwitcherProps) {
  const { language, switchLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "kh", label: "KH" },
  ];

  const isMobile = variant === "mobile";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-1 px-3 py-2 rounded-full hover:bg-white transition-colors",
          isMobile &&
            "w-full justify-center bg-slate-50 border border-slate-200",
          !isScrolled && "bg-white/80 backdrop-blur-md border-slate-200",
        )}
        aria-label="Switch language"
      >
        <Languages size={18} />
        <span className="text-sm font-medium">
          {languages.find((l) => l.code === language)?.label}
        </span>
        <ChevronDown
          size={14}
          className={cn("transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {/* dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              "absolute bg-white rounded-lg shadow-lg border border-slate-200 py-1 min-w-25",
              isMobile
                ? "left-1/2 -translate-x-1/2 bottom-full mb-2"
                : "right-0 top-full mt-2",
            )}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  switchLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full px-4 py-2 text-left text-sm hover:bg-slate-50 transition-colors",
                  language === lang.code ? "bg-slate-100 font-semibold" : "",
                )}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
