import { expect, type Locator, type Page } from '@playwright/test';

export class ManagementsystemPage{
  readonly page: Page;

  readonly getEmeilorUserName: Locator;
  readonly getPassword: Locator;
  readonly getNameAdminManagementSystem: Locator;


  constructor(page: Page) {
    this.page = page;
    this.getEmeilorUserName = (page.getByPlaceholder('Email Or User Name'));
    this.getPassword =(page.getByPlaceholder('Password'));
  }

  async goto() {
    await this.page.goto('https://managementsystem.k8sino.dev.clover.tech/#/login');
  }

  async Authorization(text) {
    await this.getEmeilorUserName.pressSequentially("DmytroTaran");
    await this.getPassword.pressSequentially("Asdfghjkl1993!");

  }
}