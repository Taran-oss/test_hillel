import { test, expect } from '@playwright/test';
import { SingupPage } from '../e2e/sinup.ts';
import { CasinoPage } from '../e2e/casino.ts';
import { LoginPage } from '../e2e/login.ts';

test("login form", async ({ page }) => {
  const loginPage = new LoginPage(page);

await loginPage.goto();
await loginPage.getlogInBtn.click();
await loginPage.getUserName.pressSequentially("taran.dima464@gmail.com");
await loginPage.getPassword.pressSequentially("pass123");
await loginPage.getClickLogInBtn.click();

});

test("login form no valid", async ({ page }) => {
  const loginPage = new LoginPage(page);

await loginPage.goto();
await loginPage.getlogInBtn.click();
await loginPage.getUserName.pressSequentially("test@gmail.com");
await loginPage.getPassword.pressSequentially("pass123");
await loginPage.getClickLogInBtn.click();
await loginPage.getErrorM.check();

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

test("sing up form no valid", async ({ page }) => {
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


