import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    // Locators
    private readonly homePageHeading = this.page.getByRole('heading', { name: /Instructor\s*Dashboard/i });
    private readonly menuButton = this.page.locator('xpath=//button//span[text() = "Menu"]');
    private readonly myProfileOption = this.page.locator('xpath=//span[contains(.,"My Profile")]').first();

    // Page Actions & Verifications
    async verifyHomePageIsDisplayed() {
        await this.verifyElementIsVisible(this.homePageHeading);
    }

    async openMenu() {
        await this.clickElement(this.menuButton);
    }

    async navigateToUserProfilePage() {
        await this.openMenu();
        await this.clickElement(this.myProfileOption);
    }
}