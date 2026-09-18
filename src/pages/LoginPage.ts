import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    private readonly loginNavButton = this.page.getByRole('button', { name: 'Login' });
    private readonly emailInput = this.page.locator('#login-email');
    private readonly passwordInput = this.page.locator('#login-password');
    private readonly submitButton = this.page.locator('xpath=//button[contains(.,"Login")]');

    async openNdosiPage() {
        await this.pageGoToUrl('/');

    }

    async navigateToLoginPage() {
        await this.clickElement(this.loginNavButton);
        await this.verifyElementIsVisible(this.emailInput);
    }

    async fillCredentials(username: string, password: string) {
        await this.enterText(this.emailInput, username);
        await this.enterText(this.passwordInput, password);
        await this.clickElement(this.submitButton);
    }

    async performFullLogin(username: string, password: string) {
        await this.openNdosiPage();
        await this.navigateToLoginPage();
        await this.fillCredentials(username, password);
    }
}