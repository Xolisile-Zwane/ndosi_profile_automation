import { test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UserProfilePage } from '../pages/UserProfilePage';
import { HomePage } from '../pages/HomePage';

// Define fixture types
type ProjectFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  userProfilePage: UserProfilePage;

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
 
});

export { expect } from '@playwright/test';