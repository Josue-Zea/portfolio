import '../styles/globals.css'
import { I18nextProvider } from 'react-i18next'
import i18n from '../lib/i18n'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem("preferredLanguage");
      if (savedLang && savedLang !== i18n.language) {
        i18n.changeLanguage(savedLang).then(() => setReady(true));
      } else {
        setReady(true);
      }
    } else {
      setReady(true);
    }
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  )
}

export default MyApp;
