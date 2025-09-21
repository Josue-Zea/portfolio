import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import commonES from '../public/locales/es/common.json'
import commonEN from '../public/locales/en/common.json'

// Siempre inicializar en español en el servidor para evitar hydration mismatch
const initialLanguage = 'es'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            es: {
                common: commonES,
            },
            en: {
                common: commonEN,
            },
        },
        lng: initialLanguage, // Siempre español inicialmente
        fallbackLng: 'es',
        debug: false,

        defaultNS: 'common',
        ns: ['common'],

        interpolation: {
            escapeValue: false,
        },

        react: {
            useSuspense: false,
        },
        
        // Configuración para evitar errores de hidratación
        load: 'languageOnly',
        cleanCode: true,
    })

export default i18n