import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '@/App';

describe('App', () => {
  it('renders the Vite + React heading', () => {
    render(<App />);

    const heading = screen.getByText(/Vite \+ React/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the count button', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /count is/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('count is 0');
  });

  it('renders the Vite and React logos', () => {
    render(<App />);

    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');

    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });
});
