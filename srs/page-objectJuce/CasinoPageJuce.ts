import { expect, type Locator, type Page } from "@playwright/test";

export class CasinoPage {
  readonly page: Page;

  readonly getCasinoBtn: Locator;
  readonly getGamesSearch: Locator;
  readonly getGamesDreamcatcher: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getCasinoBtn = page.locator("xpath=//a[@qa-automation='casino']");
    this.getGamesSearch = page.locator("xpath=//div[@class='games-search']");
    this.getGamesDreamcatcher = page.locator(
      "xpath=//div[@class='game-item__bg']"
    );
  }

  async goto() {
    await this.page.goto("https://juicebet.ag/");
  }
}
