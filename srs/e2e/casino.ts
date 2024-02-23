import { expect, type Locator, type Page } from '@playwright/test';

export class CasinoPage {
  readonly page: Page;

  readonly getCasinoBtn: Locator;
  readonly getGamesSearch: Locator;
  readonly getEmail: Locator;
  readonly getPassword: Locator;
  readonly getConfirmPassword: Locator;
  readonly getBtnNext: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getCasinoBtn = page.locator("xpath=//a[@qa-automation='bets/sports']");
    this.getGamesSearch = page.locator("xpath=//div[@class='OddButton--odd-price-container']");
  }

  async goto() {
    await this.page.goto("https://betwhale.ag/");
  }

}