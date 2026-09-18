import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  
  constructor(protected page: Page) {}

  async pageGoToUrl(url: string) {
        await this.page.goto(url);
    }

  async captureScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }

  async clickElement(locator: Locator) {
    await locator.click();
  }

  async enterText(locator: Locator, text: string) {
    await locator.fill(text); 
  }

  async getTextValue(locator: Locator): Promise<string> {
    return await locator.inputValue();
  }

  async verifyElementIsVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }
}