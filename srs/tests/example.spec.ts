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

test("navigation google page", async ({ page }) => {
await page.goto("https://google.com");
await expect(page.getByRole('button', { name: 'Accept all' })).toBeVisible;
await expect(page.getByRole('button', { name: 'Reject all' })).toBeVisible;
await expect(page.getByText('More options', { exact: true })).toBeVisible;
await expect(page.getByText('More options', { exact: true })).toBeVisible;
await expect(page.getByText('More options', { exact: true })).toBeVisible;

})