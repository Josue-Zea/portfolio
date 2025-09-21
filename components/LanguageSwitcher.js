import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState('es');

  useEffect(() => {
    setMounted(true);
    setCurrentLang(i18n.language);
    
    // Escuchar cambios de idioma
    const handleLanguageChange = (lang) => {
      setCurrentLang(lang);
    };
    
    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const changeLanguage = (newLocale) => {
    // Cambio inmediato en memoria
    i18n.changeLanguage(newLocale);
    
    // Guardar preferencia en localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', newLocale);
    }
  };

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <div className="px-3 py-1 rounded text-sm font-medium bg-gray-200 animate-pulse">ES</div>
        <div className="px-3 py-1 rounded text-sm font-medium bg-gray-200 animate-pulse">EN</div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage("es")}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${currentLang === "es"
            ? "bg-colorboton text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
      >
        ES
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${currentLang === "en"
            ? "bg-colorboton text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
