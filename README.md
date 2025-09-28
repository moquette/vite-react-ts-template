# Vite React TypeScript Template

An enterprise-ready React template with modern tooling, best practices, and Yarn Plug'n'Play for zero-installs.

## Features

### Core Stack

- **React 19** with TypeScript
- **Vite** for fast development and builds
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations

### Development Tools

- **ESLint** flat config with TypeScript + React rules
- **Prettier** with Tailwind class sorting
- **Pre-commit hooks** with Husky + lint-staged
- **Path aliases** (`@/` imports)

### Testing & Quality

- **Vitest** with React Testing Library for unit testing
- **Playwright** for cross-browser E2E testing
- **Bundle analysis** with interactive visualization
- **Strict TypeScript** configuration
- **Error boundaries** with monitoring hooks
- **Environment variables** with TypeScript types

### CI/CD

- **GitHub Actions** for CI/CD
- **Automated testing** and building
- **GitHub Pages** deployment ready

### Yarn PnP (Plug'n'Play)

- **Zero-installs** - No need to run `npm install` or `yarn install`
- **Faster dependency resolution** - No `node_modules` folder
- **Better security** - Strict dependency resolution
- **Smaller repository size** - Dependencies stored efficiently

## Getting Started

1. **Install dependencies:**

   ```bash
   yarn install
   ```

2. **Copy environment variables:**

   ```bash
   cp .env.example .env.local
   ```

3. **Start development server:**
   ```bash
   yarn dev
   ```

## Available Scripts

### Development

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn analyze` - Build and generate bundle analysis visualization

### Code Quality

- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint issues
- `yarn format` - Format code with Prettier
- `yarn typecheck` - Run TypeScript type checking

### Testing

- `yarn test` - Run unit tests with Vitest
- `yarn test:ui` - Run unit tests with UI
- `yarn test:coverage` - Run unit tests with coverage
- `yarn test:e2e` - Run E2E tests with Playwright
- `yarn test:e2e:ui` - Run E2E tests with interactive UI
- `yarn test:e2e:report` - View E2E test results report

## Project Structure

```
src/
├── components/          # Reusable components
├── config/             # Configuration files
├── hooks/              # Custom hooks
└── test/               # Test setup and utilities
e2e/                    # End-to-end tests
├── app.spec.ts         # Main application E2E tests
playwright.config.ts    # Playwright configuration
```

## Environment Configuration

This project supports environment-based configuration through Vite's built-in environment variable system.

### Quick Start

1. Copy the example environment file:

   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` with your specific configuration:

   ```bash
   # Customize application branding
   VITE_APP_NAME="My Enterprise App"

   # Point to your backend API
   VITE_API_URL=http://localhost:3001/api

   # Enable features as needed
   VITE_ENABLE_ANALYTICS=true
   VITE_ENABLE_ERROR_TRACKING=true
   ```

### Configuration Categories

**Application Settings:**

- `VITE_APP_NAME` - Display name (default: "Vite React TS Template")
- `VITE_APP_VERSION` - Version string (default: "0.0.0")
- `VITE_APP_ENV` - Environment mode (development|staging|production)

**API Configuration:**

- `VITE_API_URL` - Backend API base URL (default: "http://localhost:3000")
- `VITE_API_TIMEOUT` - Request timeout in ms (default: 30000)

**Feature Flags:**

- `VITE_ENABLE_ANALYTICS` - Google Analytics tracking (default: false)
- `VITE_ENABLE_ERROR_TRACKING` - Error monitoring with Sentry (default: false)

**Third-party Services:**

- `VITE_STRIPE_PUBLIC_KEY` - Stripe payment processing
- `VITE_GOOGLE_ANALYTICS_ID` - Analytics measurement ID
- `VITE_SENTRY_DSN` - Error tracking endpoint

### Usage in Code

Environment variables are accessed through the type-safe configuration:

```typescript
import { env } from '@/config/env';

// Type-safe access with defaults
const apiUrl = env.api.url;
const isAnalyticsEnabled = env.features.analytics;
const appName = env.appName;
```

### Environment File Priority

1. `.env.[mode].local` (highest priority - e.g., `.env.development.local`)
2. `.env.local` (local overrides, never commit)
3. `.env.[mode]` (mode-specific defaults)
4. `.env` (global defaults, lowest priority)

### Security Notes

⚠️ **Important:** All `VITE_` prefixed variables are bundled into the client code and are publicly accessible. Never store sensitive data like API secrets in these variables. Use server-side environment variables or secrets management for sensitive configuration.

## Path Aliases

Use `@/` for clean imports:

```typescript
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { env } from '@/config/env';
```

## Testing

### Unit Tests

Unit tests are powered by **Vitest** and **React Testing Library**:

```bash
# Run all unit tests
yarn test

# Run tests in watch mode during development
yarn test --watch

# Run tests with coverage report
yarn test:coverage

# Run tests with interactive UI
yarn test:ui
```

### End-to-End Tests

E2E tests use **Playwright** for cross-browser testing:

```bash
# Run E2E tests across all configured browsers
yarn test:e2e

# Run E2E tests with interactive UI
yarn test:e2e:ui

# View test results report
yarn test:e2e:report
```

**Browser Coverage:**

- Desktop: Chromium, Firefox, WebKit
- Mobile: Chrome (Pixel 5), Safari (iPhone 12)

Tests automatically start the development server and run against `http://localhost:3000`.

## Bundle Analysis

Analyze your production bundle size and composition:

```bash
# Generate bundle analysis
yarn analyze
```

This creates an interactive treemap visualization at `dist/stats.html` showing:

- Bundle size breakdown by modules
- Dependency relationships
- Code splitting effectiveness
- Optimization opportunities

Open the generated file in your browser to explore the interactive visualization.
œ
