import { expect, type Locator, type Page } from '@playwright/test';

export class SingupPage {
  readonly page: Page;

  readonly getSignUpBtn: Locator;
  readonly getUserNameSP: Locator;
  readonly getEmail: Locator;
  readonly getPassword: Locator;
  readonly getConfirmPassword: Locator;
  readonly getBtnNext: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getSignUpBtn = page.locator("xpath=//button[@qa-automation='SignUpBtn']");
    this.getUserNameSP = page.locator("xpath=//input[@qa-automation='Username']")
    this.getEmail = page.locator("xpath=//input[@qa-automation='Email']");
    this.getPassword = page.locator("xpath=//input[@qa-automation='Password']")
    this.getConfirmPassword = page.locator("xpath=//input[@qa-automation='ConfirmPassword']")
    this.getBtnNext = page.locator("xpath=//button[@qa-automation='btn-next']")
  }

  async goto() {
    await this.page.goto("https://betwhale.ag/");
  }

}