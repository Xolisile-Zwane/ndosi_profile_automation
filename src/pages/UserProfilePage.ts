import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import path from 'path';

export class UserProfilePage extends BasePage {
    
  private readonly fileUploadInput = this.page.locator('input[type="file"]');
  private readonly profileImage = this.page.locator('img[alt="Profile"], .profile-picture img, img').first();
  private readonly saveChangesButton = this.page.getByRole('button', { name: /Save Changes/i });
  private readonly myProfileHeading = this.page.getByRole('heading', { name: /My Profile/i });
  private readonly editProfileButton = this.page.getByRole('button', { name: 'Edit Profile' });


  async verifyUserProfileIsDisplayed() {
    await this.verifyElementIsVisible(this.myProfileHeading);
  }

  async editProfile() {
    await this.editProfileButton.click();
  }

  async uploadProfilePicture(fileName: string) {
    // const absoluteFilePath = path.resolve(__dirname, filePath);
    // await this.fileUploadInput.setInputFiles(absoluteFilePath);
    // await this.saveChangesButton.click();
    // Dynamically build the exact absolute path from project root
    const absoluteFilePath = path.join(process.cwd(), 'src', 'fixtures', 'test-data', fileName);
    await this.fileUploadInput.setInputFiles(absoluteFilePath);
    await this.saveChangesButton.click();
  }

  async verifyProfilePictureUpdated() {
    await expect(this.profileImage).toBeVisible();
    await this.captureScreenshot('profile-picture-updated');
  }
}