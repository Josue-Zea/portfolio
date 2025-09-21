import '../styles/globals.css'
import { I18nextProvider } from 'react-i18next'
import i18n from '../lib/i18n'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // Solo ejecutar en el cliente después de la hidratación
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem("preferredLanguage");
      if (savedLang && savedLang !== i18n.language) {
        // Pequeño delay para evitar problemas de hidratación
        setTimeout(() => {
          i18n.changeLanguage(savedLang);
        }, 100);
      }
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  )
}

export default MyApp
