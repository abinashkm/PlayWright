// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

/**
 * 1. Open the page
 * 2. Click at Get started
 * 3. Mouse hover the language dropdown
 * 4. Click at  Java
 * 5. Check the URL 
 * 6. Check the text "Installing Playwright" is not being displayed
 * 7. Check the text below is displayed
 * 
 * Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.
 * 
 */
test('check the Java installation page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  
  // Mouse hover the language dropdown and click at Java
  await page.getByRole('button', { name: 'Node.js' }).hover();
  // if you write the page.getByRole('link', { name: 'Java' }) then it will not work because the Java is a link but it's not visible or exposed. So we have to write page.getByText('Java', { exact: true }) to click at Java.
  await page.getByText('Java', { exact: true }).click();

  // Check the URL
  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
  
  // Check the text "Installing Playwright" is not being displayed
  await expect(page.getByRole('heading', { name: 'Installing Playwright' })).not.toBeVisible();
  // Check the text below is displayed
  const expectedText = 'Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project\'s pom.xml as described below. If you\'re not familiar with Maven please refer to its documentation.';
  await expect(page.getByText(expectedText)).toBeVisible();
});