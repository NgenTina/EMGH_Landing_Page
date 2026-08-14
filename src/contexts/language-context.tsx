import { createContext, useContext, useCallback, type ReactNode } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { translations, type Language } from '../i18n';
import type { Translation } from '../i18n/en';

interface LanguageContextType {
  language: Language;
  t: Translation;
  switchLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: Language }>();
  
  const currentLang: Language = (lang && translations[lang]) ? lang : 'en';
  const t = translations[currentLang];

  const switchLanguage = useCallback((language: Language) => {
    const currentPath = window.location.pathname;
    // Remove current language prefix
    const pathWithoutLang = currentPath.replace(/^\/(en|kh)/, '');
    // Add new language prefix
    const newPath = `/${language}${pathWithoutLang}`;
    navigate(newPath);
  }, [navigate]);

  return (
    <LanguageContext.Provider value={{ language: currentLang, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
