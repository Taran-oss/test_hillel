import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  readonly getlogInBtn: Locator;
  readonly getUserName: Locator;
  readonly getPassword: Locator;
  readonly getClickLogInBtn: Locator;
  readonly getMenu: Locator;
  readonly getBanking: Locator;
  readonly getCashier: Locator;
  readonly getMessageErrorInvalidemail: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getlogInBtn = page.locator(
      "xpath=//button[@qa-automation='logInBtn']"
    );
    this.getUserName = page.locator("xpath=//input[@qa-automation='UserName']");
    this.getPassword = page.locator("xpath=//input[@qa-automation='Password']");
    this.getMenu = page.locator("xpath=//a[@qa-automation='menu']");
    this.getClickLogInBtn = page.locator(
      "xpath=//button[@qa-automation='btn-login']"
    );
    this.getBanking = page.locator("xpath=//div[text()=' Banking ']");
    this.getCashier = page.locator("xpath=//a[@qa-automation='headerDeposit']");
    this.getMessageErrorInvalidemail = page.locator(
      "xpath=//ngb-toast[@class='toast failure fade show']"
    );
  }

  async goto() {
    await this.page.goto("https://juicebet.ag/");
  }
}
