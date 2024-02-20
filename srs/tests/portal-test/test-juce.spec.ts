import { test, chromium ,expect} from "./fixture";
import { LoginPage } from "../../page-objectJuce/LoginPageJuce";
import { SingupPage } from "../../page-objectJuce/SingUpPageJuce";
import { CasinoPage } from "../../page-objectJuce/CasinoPageJuce";
import { BankingPage } from "../../page-objectJuce/BankingPageJuce";

test("valid logogin form", async ({ loginPage }) => {
  await loginPage.getlogInBtn.click();
  await loginPage.getUserName.pressSequentially("taran.dima464@gmail.com");
  await loginPage.getPassword.pressSequentially("pass123");
  await loginPage.getClickLogInBtn.click();
});

test("invalid Emeil logogin form ", async ({ loginPage }) => {

  await loginPage.getlogInBtn.click();
  await loginPage.getUserName.pressSequentially("taran.dima464@gmai.co");
  await loginPage.getPassword.pressSequentially("pass123");
  await loginPage.getClickLogInBtn.click();
  await expect(loginPage.getMessageErrorInvalidemail).toBeEnabled();
});

test("valid sing up form", async ({ loginPage, singupPage }) => {

  await singupPage.getSignUpBtn.click();
  await singupPage.getUserNameSP.pressSequentially("testuserfortest");
  await singupPage.getEmail.pressSequentially("taran.dima464@gmail.com");
  await singupPage.getPassword.pressSequentially("pass123");
  await singupPage.getConfirmPassword.pressSequentially("pass123");
  await singupPage.getBtnNext.click();
});

test("invalid sing up form", async ({ singupPage }) => {

  await singupPage.getSignUpBtn.click();
  await singupPage.getUserNameSP.pressSequentially("testuserfortest");
  await singupPage.getEmail.pressSequentially("taran.dima464@gmail.com");
  await singupPage.getPassword.pressSequentially("pass123");
  await singupPage.getConfirmPassword.pressSequentially("pass1234");
  await singupPage.getBtnNext.click();
  await expect(singupPage.getErrorManagerInvalidPass).toBeEnabled();
});

test("check casino", async ({ casinoPage }) => {

  await casinoPage.getCasinoBtn.click();
  await casinoPage.getGamesSearch.click();
  await casinoPage.getGamesSearch.pressSequentially("dreamcatcher");
});

test("сheck the launch of the game", async ({ casinoPage }) => {

  await casinoPage.getCasinoBtn.click();
  await casinoPage.getGamesSearch.click();
  await casinoPage.getGamesSearch.pressSequentially("dreamcatcher");
  await casinoPage.getGamesDreamcatcher.click();
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
