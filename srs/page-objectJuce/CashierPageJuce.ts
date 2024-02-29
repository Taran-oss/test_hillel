import { expect, type Locator, type Page } from "@playwright/test";

export class CahierPage {
  readonly page: Page;

  readonly getDepositPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getDepositPage = page.locator("xpath=//div[@class='container']");
  }

  async goto() {
    await this.page.goto("https://juicebet.ag/");
  }
}
