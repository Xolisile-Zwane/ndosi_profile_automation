# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/user-profile.spec.ts >> Ndosi Automation - Profile Picture Upload Suite >> UI Test: Upload profile picture successfully
- Location: tests/e2e/user-profile.spec.ts:7:7

# Error details

```
Error: ENOENT: no such file or directory, stat '/home/xzwane/Desktop/ndosi_profile_automation/src/data/test-data/sample-avatar.png'
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - img "NTA Logo" [ref=e7] [cursor=pointer]
      - generic [ref=e8]:
        - button "🏠 Home" [ref=e9] [cursor=pointer]:
          - generic [ref=e10]: 🏠
          - generic [ref=e11]: Home
        - button "📖 About Us" [ref=e12] [cursor=pointer]:
          - generic [ref=e13]: 📖
          - generic [ref=e14]: About Us
        - button "⭐ Testimonials" [ref=e15] [cursor=pointer]:
          - generic [ref=e16]: ⭐
          - generic [ref=e17]: Testimonials
        - button "👨‍🏫 Mentors" [ref=e18] [cursor=pointer]:
          - generic [ref=e19]: 👨‍🏫
          - generic [ref=e20]: Mentors
        - button "🎓 Graduates" [ref=e21] [cursor=pointer]:
          - generic [ref=e22]: 🎓
          - generic [ref=e23]: Graduates
        - button "📞 Contact Us" [ref=e24] [cursor=pointer]:
          - generic [ref=e25]: 📞
          - generic [ref=e26]: Contact Us
        - button "📚 Learn ▼" [ref=e28] [cursor=pointer]:
          - generic [ref=e29]: 📚
          - generic [ref=e30]: Learn
          - generic [ref=e31]: ▼
        - button "🔗 Connect ▼" [ref=e33] [cursor=pointer]:
          - generic [ref=e34]: 🔗
          - generic [ref=e35]: Connect
          - generic [ref=e36]: ▼
        - button "🎯 My Learning ▼" [ref=e38] [cursor=pointer]:
          - generic [ref=e39]: 🎯
          - generic [ref=e40]: My Learning
          - generic [ref=e41]: ▼
      - button "Menu ▼" [ref=e44] [cursor=pointer]:
        - generic [ref=e46]: Menu
        - generic [ref=e47]: ▼
  - main [ref=e48]:
    - generic [ref=e49]:
      - heading "👤 My Profile" [level=2] [ref=e50]
      - generic [ref=e51]:
        - generic [ref=e52]:
          - generic [ref=e55]:
            - heading "Xolisile Zwane" [level=3] [ref=e56]
            - paragraph [ref=e57]: xoli1234@gmail.com
          - generic [ref=e58]:
            - generic [ref=e59]:
              - generic [ref=e60]: First Name
              - textbox [ref=e61]: Xolisile
            - generic [ref=e62]:
              - generic [ref=e63]: Last Name
              - textbox [ref=e64]: Zwane
            - generic [ref=e65]:
              - generic [ref=e66]: Email
              - textbox [ref=e67]: xoli1234@gmail.com
            - generic [ref=e68]:
              - heading "📞 Contact Details (Optional)" [level=4] [ref=e69]
              - generic [ref=e70]:
                - generic [ref=e71]: Phone Number
                - textbox "e.g., +27 123 456 7890" [ref=e72]
              - generic [ref=e73]:
                - generic [ref=e74]: GitHub Username
                - textbox "e.g., octocat" [ref=e75]
              - generic [ref=e76]:
                - generic [ref=e77]: LinkedIn Profile
                - textbox "e.g., linkedin.com/in/yourprofile" [ref=e78]
            - generic [ref=e79]:
              - heading "🆘 Next of Kin (Optional)" [level=4] [ref=e80]
              - generic [ref=e81]:
                - generic [ref=e82]: Phone Number
                - textbox "e.g., +27 123 456 7890" [ref=e83]
            - generic [ref=e84]:
              - heading "🧪 Testing Experience" [level=4] [ref=e85]
              - generic [ref=e86]:
                - generic [ref=e87]: Years of Experience in Testing
                - combobox [ref=e88]:
                  - option "Select experience level" [selected]
                  - option "1 year of experience"
                  - option "2 years of experience"
                  - option "3 years of experience"
                  - option "4 years of experience"
                  - option "5 years of experience"
                  - option "6 years of experience"
                  - option "7 years of experience"
                  - option "8 years of experience"
                  - option "9 years of experience"
                  - option "10 years of experience"
                  - option "11 years of experience"
                  - option "12 years of experience"
                  - option "13 years of experience"
                  - option "14 years of experience"
                  - option "15 years of experience"
                  - option "16 years of experience"
                  - option "17 years of experience"
                  - option "18 years of experience"
                  - option "19 years of experience"
                  - option "20 years of experience"
              - generic [ref=e89]:
                - generic [ref=e90]: About Me
                - textbox "Tell students a little about your teaching style and experience" [ref=e91]: Automation engineer testing profile update
                - generic [ref=e92]: 42/1000
            - generic [ref=e93]:
              - generic [ref=e94]: Profile Picture
              - generic [ref=e97]:
                - generic [ref=e98] [cursor=pointer]: 📷 Choose Photo
                - paragraph [ref=e99]: JPEG, PNG, GIF, or WEBP. Images are compressed below 3MB before upload.
            - generic [ref=e100]:
              - button "💾 Save Changes" [ref=e101] [cursor=pointer]
              - button "Cancel" [ref=e102] [cursor=pointer]
        - generic [ref=e103]:
          - generic [ref=e104]:
            - heading "⭐ My Testimonials" [level=3] [ref=e105]
            - button "+ Add Review" [ref=e106] [cursor=pointer]
          - generic [ref=e107]:
            - paragraph [ref=e108]: You haven't submitted any testimonials yet.
            - paragraph [ref=e109]: Share your experience with others!
  - button "🧪 Test" [ref=e110] [cursor=pointer]
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | import { BasePage } from './BasePage';
  3  | import path from 'path';
  4  | 
  5  | export class UserProfilePage extends BasePage {
  6  |     
  7  |   private readonly fileUploadInput = this.page.locator('input[type="file"]');
  8  |   private readonly profileImage = this.page.locator('img[alt="Profile"], .profile-picture img, img').first();
  9  |   private readonly saveChangesButton = this.page.getByRole('button', { name: /Save Changes/i });
  10 |   private readonly myProfileHeading = this.page.getByRole('heading', { name: /My Profile/i });
  11 |   private readonly editProfileButton = this.page.getByRole('button', { name: 'Edit Profile' });
  12 | 
  13 | 
  14 |   async verifyUserProfileIsDisplayed() {
  15 |     await this.verifyElementIsVisible(this.myProfileHeading);
  16 |   }
  17 | 
  18 |   async editProfile() {
  19 |     await this.editProfileButton.click();
  20 |   }
  21 | 
  22 |   async uploadProfilePicture(fileName: string) {
  23 |     // const absoluteFilePath = path.resolve(__dirname, filePath);
  24 |     // await this.fileUploadInput.setInputFiles(absoluteFilePath);
  25 |     // await this.saveChangesButton.click();
  26 |     // Dynamically build the exact absolute path from project root
  27 |     const absoluteFilePath = path.join(process.cwd(), 'src', 'data', 'test-data', fileName);
> 28 |     await this.fileUploadInput.setInputFiles(absoluteFilePath);
     |     ^ Error: ENOENT: no such file or directory, stat '/home/xzwane/Desktop/ndosi_profile_automation/src/data/test-data/sample-avatar.png'
  29 |     await this.saveChangesButton.click();
  30 |   }
  31 | 
  32 |   async verifyProfilePictureUpdated() {
  33 |     await expect(this.profileImage).toBeVisible();
  34 |     await this.captureScreenshot('profile-picture-updated');
  35 |   }
  36 | }
```