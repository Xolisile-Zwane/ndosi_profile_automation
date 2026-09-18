import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import path from 'path';

export class UserProfilePage extends BasePage {
    
  private readonly fileUploadInput = this.page.locator('input[type="file"]');
  private readonly profileImageLocator = this.page.locator('img.profile-avatar');
  private readonly saveChangesButton = this.page.getByRole('button', { name: /Save Changes/i });
  private readonly myProfileHeading = this.page.getByRole('heading', { name: /My Profile/i });
  private readonly editProfileButton = this.page.getByRole('button', { name: 'Edit Profile' });


  async verifyUserProfileIsDisplayed() {
    await this.verifyElementIsVisible(this.myProfileHeading);
  }

  async editProfile() {
    await this.editProfileButton.click();
  }

  async uploadProfilePicture(filePath: string) {
    // const absoluteFilePath = path.resolve(__dirname, filePath);
    // await this.fileUploadInput.setInputFiles(absoluteFilePath);
    // await this.saveChangesButton.click();
    const absoluteFilePath = path.resolve(process.cwd(), filePath);
    await this.fileUploadInput.setInputFiles(absoluteFilePath);
    await this.saveChangesButton.click();
  }

  async verifyProfilePictureUpdated() {
    await expect(this.profileImageLocator).toBeVisible();
    await this.captureScreenshot('profile-picture-updated');
  }
}