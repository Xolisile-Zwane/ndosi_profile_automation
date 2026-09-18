import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UserProfilePage } from '../pages/UserProfilePage';
import { ProfileApiClient } from '../api/ProfileApiClient';
import { HomePage } from '../pages/HomePage';

// Define fixture types
type ProjectFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  userProfilePage: UserProfilePage;
  profileApiClient: ProfileApiClient;
};

// Extend the base test with your Page Objects and API client
export const test = base.extend<ProjectFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({page}, use)=> {
    await use(new HomePage(page));
  },
  userProfilePage: async ({ page }, use) => {
    await use(new UserProfilePage(page));
  },
  profileApiClient: async ({ request }, use) => {
    await use(new ProfileApiClient(request));
  },
});

export { expect } from '@playwright/test';