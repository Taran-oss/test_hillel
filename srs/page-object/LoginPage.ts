import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly getlogInBtn: Locator;
  readonly getUserName: Locator;
  readonly getPassword: Locator;
  readonly getClickLogInBtn: Locator;
  readonly getuserDropdownMenu: Locator;
  readonly getBanking: Locator;
  readonly getCashier: Locator;


  constructor(page: Page) {
    this.page = page;
    this.getlogInBtn = page.locator("xpath=//button[@qa-automation='logInBtn']");
    this.getUserName = page.locator("xpath=//input[@qa-automation='UserName']");
    this.getPassword = page.locator("xpath=//input[@qa-automation='Password']");
    this.getuserDropdownMenu = page.locator("xpath=//button[@qa-automation='userDropdownMenu']");
    this.getClickLogInBtn = page.locator("xpath=//button[@qa-automation='btn-login']");
    this.getBanking = page.locator("xpath=//a[text()=' Banking ']");
    this.getCashier = page.locator("xpath=//a[text()=' Cashier ']");

  }

  async goto() {
    await this.page.goto("https://betwhale.ag/");
  }

}