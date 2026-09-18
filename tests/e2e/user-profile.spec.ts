import { test, expect } from '../../src/fixtures/testFixtures';
import path from 'path';
import { validUsers } from '../../src/fixtures/test-data/test-data';



test.describe('Ndosi Automation - Profile Picture Upload Suite', () => {
  
  test('UI Test: Upload profile picture successfully', async ({ loginPage, userProfilePage, homePage }) => {
    const { username, password } = validUsers.classUser;
    
    // 1. Perform full login flow
    await loginPage.performFullLogin(username, password);

    // 2. Navigate to Profile
    await homePage.navigateToUserProfilePage();

    // 3. Edit Profile
    await userProfilePage.editProfile();

    // 4. Resolve path and upload picture
    const imagePath = path.resolve(__dirname, '../../fixtures/test-data/sample-avatar.jpg');
    await userProfilePage.uploadProfilePicture(imagePath);

    // 5. Assert update and capture screenshot
    await userProfilePage.verifyProfilePictureUpdated();
  });
});
