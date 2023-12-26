import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-object/LoginPage';
import { SingupPage } from '../../page-object/SingupPage';
import { CasinoPage } from '../../page-object/CasinoPage';

test("login form", async ({ page }) => {
  const loginPage = new LoginPage(page);

await loginPage.goto();
await loginPage.getlogInBtn.click();
await loginPage.getUserName.pressSequentially("taran.dima464@gmail.com");
await loginPage.getPassword.pressSequentially("pass123");
await loginPage.getClickLogInBtn.click();

});

test("sing up form", async ({ page }) => {
  const singupPage = new SingupPage(page); 

  await singupPage.goto();
  await singupPage.getSignUpBtn.click();
  await singupPage.getUserNameSP.pressSequentially("testuserfortest");
  await singupPage.getEmail.pressSequentially("taran.dima464@gmail.com");
  await singupPage.getPassword.pressSequentially("pass123");
  await singupPage.getConfirmPassword.pressSequentially("pass123");
  await singupPage.getBtnNext.click();
});

test("check casino", async ({ page }) => {
  const casinoPage = new CasinoPage(page); 

  await casinoPage.goto();
  await casinoPage.getCasinoBtn.click();
  await casinoPage.getGamesSearch.click();
  await casinoPage.getGamesSearch.pressSequentially("dreamcatcher");
});