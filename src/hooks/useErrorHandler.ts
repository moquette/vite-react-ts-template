import { useCallback } from 'react';

export function useErrorHandler() {
  const handleError = useCallback(
    (error: Error, errorInfo?: { componentStack?: string }) => {
      console.error('Error:', error);

      if (import.meta.env.VITE_ENABLE_ERROR_TRACKING === 'true') {
        // This is where you'd integrate with error monitoring services
        // Example: Sentry, LogRocket, Bugsnag, etc.
        // Using console.warn instead of console.log to avoid linting warnings
        console.warn('Sending error to monitoring service:', {
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo?.componentStack,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        });
      }
    },
    [],
  );

  return { handleError };
}
