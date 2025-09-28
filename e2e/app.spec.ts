import { test, expect } from '@playwright/test';

test.describe('App', () => {
  test('has title and loads correctly', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring
    await expect(page).toHaveTitle(/Vite \+ React \+ TS/);

    // Check main heading
    await expect(page.locator('h1')).toContainText('Vite + React');
  });

  test('counter functionality works', async ({ page }) => {
    await page.goto('/');

    // Locate the counter button
    const counterButton = page.locator('button', { hasText: 'count is' });

    // Check initial state
    await expect(counterButton).toContainText('count is 0');

    // Click the button and verify count increases
    await counterButton.click();
    await expect(counterButton).toContainText('count is 1');

    // Click multiple times
    await counterButton.click();
    await counterButton.click();
    await expect(counterButton).toContainText('count is 3');
  });

  test('displays logos and links', async ({ page }) => {
    await page.goto('/');

    // Check Vite logo
    const viteLogo = page.locator('img[alt="Vite logo"]');
    await expect(viteLogo).toBeVisible();

    // Check React logo
    const reactLogo = page.locator('img[alt="React logo"]');
    await expect(reactLogo).toBeVisible();

    // Check links are present (but don't navigate to avoid external requests)
    await expect(page.locator('a[href="https://vite.dev"]')).toBeVisible();
    await expect(page.locator('a[href="https://react.dev"]')).toBeVisible();
  });

  test('displays HMR message', async ({ page }) => {
    await page.goto('/');

    // Check HMR instruction text
    await expect(
      page.locator('text=Edit src/App.tsx and save to test HMR'),
    ).toBeVisible();
  });

  test('has proper styling classes', async ({ page }) => {
    await page.goto('/');

    // Check that Tailwind classes are applied (logos should have logo class)
    const viteLogo = page.locator('img[alt="Vite logo"]');
    await expect(viteLogo).toHaveClass(/logo/);

    const reactLogo = page.locator('img[alt="React logo"]');
    await expect(reactLogo).toHaveClass(/logo/);
  });
});
