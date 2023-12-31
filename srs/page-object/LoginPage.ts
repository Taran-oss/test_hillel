import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly getlogInBtn: Locator;
  readonly getUserName: Locator;
  readonly getPassword: Locator;
  readonly getClickLogInBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getlogInBtn = page.locator("xpath=//button[@qa-automation='logInBtn']");
    this.getUserName = page.locator("xpath=//input[@qa-automation='UserName']");
    this.getPassword = page.locator("xpath=//input[@qa-automation='Password']");
    this.getClickLogInBtn = page.locator("xpath=//button[@qa-automation='btn-login']");
  }

  async goto() {
    await this.page.goto("https://betwhale.ag/");
  }

}