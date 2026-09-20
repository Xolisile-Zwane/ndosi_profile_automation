import { test, expect } from '../../src/fixtures/testFixtures';
import path from 'path';
import { validUsers } from '../../src/data/test-data';

test.describe('Ndosi Automation - Profile Picture Upload Suite', () => {

  test('UI Test: Upload profile picture successfully', async ({ loginPage, userProfilePage, homePage }) => {
    const { username, password } = validUsers.classUser;

    await test.step('1. Perform full login flow', async () => {
      await loginPage.performFullLogin(username, password);
    });

    await test.step('2. Navigate to User Profile page', async () => {
      await homePage.navigateToUserProfilePage();
    });

    await test.step('3. Enable Profile Editing mode', async () => {
      await userProfilePage.editProfile();
    });

    await test.step('4. Upload profile avatar image', async () => {
      await userProfilePage.uploadProfilePicture('sample-avatar.png');
    });

    await test.step('5. Verify profile picture update', async () => {
      await userProfilePage.verifyProfilePictureUpdated();
    });
  });

});
