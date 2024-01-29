import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objectJuce/LoginPageJuce";
import { SingupPage } from "../../page-objectJuce/SingUpPageJuce";
import { CasinoPage } from "../../page-objectJuce/CasinoPageJuce";
import { BankingPage } from "../../page-objectJuce/BankingPageJuce";

test("valid logogin form", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.getlogInBtn.click();
  await loginPage.getUserName.pressSequentially("taran.dima464@gmail.com");
  await loginPage.getPassword.pressSequentially("pass123");
  await loginPage.getClickLogInBtn.click();
});

test("invalid Emeil logogin form ", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.getlogInBtn.click();
  await loginPage.getUserName.pressSequentially("taran.dima464@gmai.co");
  await loginPage.getPassword.pressSequentially("pass123");
  await loginPage.getClickLogInBtn.click();
  await expect(loginPage.getMessageErrorInvalidemail).toBeEnabled();
});

test("valid sing up form", async ({ page }) => {
  const singupPageJuce = new SingupPage(page);

  await singupPageJuce.goto();
  await singupPageJuce.getSignUpBtn.click();
  await singupPageJuce.getUserNameSP.pressSequentially("testuserfortest");
  await singupPageJuce.getEmail.pressSequentially("taran.dima464@gmail.com");
  await singupPageJuce.getPassword.pressSequentially("pass123");
  await singupPageJuce.getConfirmPassword.pressSequentially("pass123");
  await singupPageJuce.getBtnNext.click();
});

test("invalid sing up form", async ({ page }) => {
  const singupPageJuce = new SingupPage(page);

  await singupPageJuce.goto();
  await singupPageJuce.getSignUpBtn.click();
  await singupPageJuce.getUserNameSP.pressSequentially("testuserfortest");
  await singupPageJuce.getEmail.pressSequentially("taran.dima464@gmail.com");
  await singupPageJuce.getPassword.pressSequentially("pass123");
  await singupPageJuce.getConfirmPassword.pressSequentially("pass1234");
  await singupPageJuce.getBtnNext.click();
  await expect(singupPageJuce.getErrorManagerInvalidPass).toBeEnabled();
});

test("check casino", async ({ page }) => {
  const casinoPageJuce = new CasinoPage(page);

  await casinoPageJuce.goto();
  await casinoPageJuce.getCasinoBtn.click();
  await casinoPageJuce.getGamesSearch.click();
  await casinoPageJuce.getGamesSearch.pressSequentially("dreamcatcher");
});

test("сheck the launch of the game", async ({ page }) => {
  const casinoPageJuce = new CasinoPage(page);

  await casinoPageJuce.goto();
  await casinoPageJuce.getCasinoBtn.click();
  await casinoPageJuce.getGamesSearch.click();
  await casinoPageJuce.getGamesSearch.pressSequentially("dreamcatcher");
  await casinoPageJuce.getGamesDreamcatcher.click();
});

test("check banking ", async ({ page }) => {
  const loginPageJuce = new LoginPage(page);
  const bankingPageJuce = new BankingPage(page);

  await loginPageJuce.goto();
  await loginPageJuce.getlogInBtn.click();
  await loginPageJuce.getUserName.pressSequentially("taran.dima464@gmail.com");
  await loginPageJuce.getPassword.pressSequentially("pass123");
  await loginPageJuce.getClickLogInBtn.click();
  await loginPageJuce.getMenu.click();
  await loginPageJuce.getBanking.click();
  await expect(bankingPageJuce.getBankingContent).toBeEnabled();
});

test("check cashier ", async ({ page }) => {
  const loginPageJuce = new LoginPage(page);

  await loginPageJuce.goto();
  await loginPageJuce.getlogInBtn.click();
  await loginPageJuce.getUserName.pressSequentially("taran.dima464@gmail.com");
  await loginPageJuce.getPassword.pressSequentially("pass123");
  await loginPageJuce.getClickLogInBtn.click();
  await loginPageJuce.getCashier.click();
});
