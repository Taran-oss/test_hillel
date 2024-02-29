import { expect, type Locator, type Page } from "@playwright/test";

export class BankingPage {
  readonly page: Page;

  readonly getDepositOptions: Locator;
  readonly getBankingContent: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getDepositOptions = page.locator(
      "xpath=//div[@class='banking-page--block-item banking-page--block-item--text']"
    );
    this.getBankingContent = page.locator(
      "xpath=//div[@class='banking-page--container']"
    );
  }

  async goto() {
    await this.page.goto("https://juicebet.ag/");
  }
}
