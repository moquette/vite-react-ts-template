import { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: (error: Error, reset: () => void) => ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);

    // Send error to monitoring service if enabled
    if (import.meta.env.VITE_ENABLE_ERROR_TRACKING === 'true') {
      // This is where you'd send to Sentry, LogRocket, etc.
      // Using console.warn instead of console.log to avoid linting warnings
      console.warn('Would send error to monitoring service:', {
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
      });
    }
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.reset);
      }

      return (
        <div className="flex min-h-screen flex-col items-center justify-center p-4">
          <div className="max-w-md text-center">
            <h1 className="mb-4 text-2xl font-bold">Something went wrong</h1>
            <p className="mb-6 text-zinc-600 dark:text-zinc-400">
              We're sorry, but something unexpected happened. Please try
              reloading the page.
            </p>
            {import.meta.env.DEV && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-zinc-500">
                  Error details (development only)
                </summary>
                <pre className="mt-2 overflow-auto rounded bg-zinc-100 p-2 text-xs dark:bg-zinc-800">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
            <div className="flex justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Reload page
              </button>
              <button
                onClick={this.reset}
                className="rounded border px-4 py-2 hover:bg-gray-50"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
