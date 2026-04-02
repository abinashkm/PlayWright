// Import Playwright test functions
import { test, expect } from '@playwright/test';

// First test case
test('has title', async ({ page }) => {

  // Open the website
  await page.goto('https://playwright.dev/');

  // Check if the page title contains the word "Playwright"
  // (like checking page name on browser tab)
  await expect(page).toHaveTitle(/Playwright/);
});


// Second test case
test('get started link', async ({ page }) => {

  // Open the website again
  await page.goto('https://playwright.dev/');

  // Find the link which has text "Get started" and click it
  await page.getByRole('link', { name: 'Get started' }).click();

  // After clicking, check if a heading "Installation" is visible
  // (means page loaded correctly)
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});