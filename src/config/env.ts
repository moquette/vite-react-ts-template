export const env = {
  appName: import.meta.env.VITE_APP_NAME || 'Vite React TS Template',
  appVersion: import.meta.env.VITE_APP_VERSION || '0.0.0',
  appEnv: import.meta.env.VITE_APP_ENV || 'development',

  api: {
    url: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 30000,
  },

  features: {
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    errorTracking: import.meta.env.VITE_ENABLE_ERROR_TRACKING === 'true',
  },

  services: {
    stripePublicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY,
    googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
    sentryDsn: import.meta.env.VITE_SENTRY_DSN,
  },

  isDevelopment: import.meta.env.VITE_APP_ENV === 'development',
  isStaging: import.meta.env.VITE_APP_ENV === 'staging',
  isProduction: import.meta.env.VITE_APP_ENV === 'production',
} as const;
