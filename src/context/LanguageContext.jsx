import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'juan-david-portfolio-language';

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === 'undefined') return null;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'en' || saved === 'es' ? saved : null;
  });

  useEffect(() => {
    const activeLanguage = language ?? 'en';
    const activeTranslations = translations[activeLanguage];

    if (language) {
      window.localStorage.setItem(STORAGE_KEY, language);
    }

    document.documentElement.lang = activeLanguage;
    document.title = `${activeTranslations.authorName} | ${activeTranslations.meta.title}`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        `${activeTranslations.authorName} — ${activeTranslations.meta.description}`,
      );
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      hasLanguage: Boolean(language),
      setLanguage: setLanguageState,
      t: language ? translations[language] : translations.en,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
