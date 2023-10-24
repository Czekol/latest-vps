module.exports = [
  {
    name: 'strapi::errors',
    config: {
      // Konfiguracja błędów
    },
  },
  {
    name: 'strapi::security',
    config: {
      // Konfiguracja zabezpieczeń
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: process.env.CORS_ORIGIN, // Pobieranie dozwolonych domen z zmiennych środowiskowych
    },
  },
  {
    name: 'strapi::poweredBy',
    config: {
      // Konfiguracja wyświetlania "Powered by Strapi"
    },
  },
  {
    name: 'strapi::logger',
    config: {
      // Konfiguracja loggera
    },
  },
  {
    name: 'strapi::query',
    config: {
      // Konfiguracja zapytań
    },
  },
  {
    name: 'strapi::body',
    config: {
      // Konfiguracja przetwarzania ciała zapytania
    },
  },
  {
    name: 'strapi::session',
    config: {
      // Konfiguracja sesji
    },
  },
  {
    name: 'strapi::favicon',
    config: {
      // Konfiguracja favicon
    },
  },
  {
    name: 'strapi::public',
    config: {
      // Konfiguracja plików publicznych
    },
  },
  // Dodaj inne wpisy middleware w miarę potrzeb
];
