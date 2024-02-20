import { Page, test as baseTest, chromium as baseChromium, expect as baseExpect } from "@playwright/test";
import { LoginPage } from "../../page-objectJuce/LoginPageJuce";
import { SingupPage } from "../../page-objectJuce/SingUpPageJuce";
import { CasinoPage } from "../../page-objectJuce/CasinoPageJuce";
import { BankingPage } from "../../page-objectJuce/BankingPageJuce";

type BasePage = {
    loginPage: LoginPage,
    singupPage: SingupPage
    casinoPage: CasinoPage
    bankinPage: BankingPage
}

export const test = baseTest.extend<BasePage>({
    loginPage: async ({ page, singupPage, casinoPage, bankinPage }, use) => {
        await page.goto("https://juicebet.ag/")
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    
    singupPage: async ({ page, loginPage }, use) => {
        await page.goto("https://juicebet.ag/")
        const signupPage = new SingupPage(page);
        await use(signupPage);
    },
    casinoPage: async ({ page, loginPage }, use) => {
        await page.goto("https://juicebet.ag/")
        const casinoPage = new CasinoPage(page);
        await use(casinoPage);
    },

    bankinPage: async ({ page, loginPage }, use) => {
        await page.goto("https://juicebet.ag/")
        const bankinPage = new BankingPage(page);
        await use(bankinPage);
    },

});

export const chromium = baseChromium;
export const expect = baseExpect
