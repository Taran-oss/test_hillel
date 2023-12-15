import { test, expect } from '@playwright/test';
import { ManagementsystemPage } from '../page-object/managementsystemPage';


test("navigation google page", async ({ page }) => {
const managementsystemPage = new ManagementsystemPage {page};

await page.goto("https://managementsystem.k8sino.dev.clover.tech/#/login");
await expect(page.getByPlaceholder('Email Or User Name')).toBeVisible;
await expect(page.getByPlaceholder('Password')).toBeVisible;
await expect(page.getByText('Login to your account')).toBeVisible;

});

test("login", async ({ page }) => {
  await page.goto("https://managementsystem.k8sino.dev.clover.tech/#/login");
  await expect(page.getByPlaceholder('Email Or User Name')).toBeVisible;
  await page.getByPlaceholder('Email Or User Name').pressSequentially("DmytroTaran");
  await page.getByPlaceholder('Password').pressSequentially("Asdfghjkl1993!");
  await page.getByPlaceholder('Password').press('Enter');
  await expect(page.getByText('Dmytro Taran (DmytroTaran)')).toBeVisible;
  await expect(page).toHaveURL(/.*managementsystem*/);

});