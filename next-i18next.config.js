module.exports = {
  // Configuración para funcionar solo con localStorage
  fallbackLng: 'es',
  lng: 'es', // idioma por defecto
  debug: false,
  
  // Configuración para cargar los archivos de traducción
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  
  // Configuración del cliente
  react: {
    useSuspense: false,
  },
}