
module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: ['process.env.CORS_ORIGIN'], 
    },
  },
  default: [
    'strapi::errors',
    'strapi::security',
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ],
});

