# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/profile-endpoints.spec.ts >> Ndosi API Suite - User Profile Endpoints >> 3. PUT Update User Profile with Base64 Avatar
- Location: tests/api/profile-endpoints.spec.ts:58:7

# Error details

```
Error: ENOENT: no such file or directory, open '/home/xzwane/Desktop/ndosi_profile_automation/src/fixtures/test-data/sample-avatar.png'
```

# Test source

```ts
  1   | import { test, expect } from '../../src/fixtures/testFixtures';
  2   | import { validUsers } from '../../src/data/test-data';
  3   | import path from 'path';
  4   | import fs from 'fs';
  5   | 
  6   | test.describe.configure({ mode: 'serial' });
  7   | test.describe('Ndosi API Suite - User Profile Endpoints', () => {
  8   |   let bearerToken: string;
  9   | 
  10  |   // test.beforeAll(async ({ request }) => {
  11  |   //   const response = await request.post('https://www.ndosiautomation.co.za/APIDEV/login', {
  12  |   //     data: {
  13  |   //       email: validUsers.classUser.username,
  14  |   //       password: validUsers.classUser.password
  15  |   //     }
  16  |   //   });
  17  |   //   const body = await response.json();
  18  |   //   bearerToken = body.data.token;
  19  |   // });
  20  | 
  21  |   test('Positive login via API - class user', {tag: '@regression'}, async ({request}) => {
  22  |         const response = await request.post('https://www.ndosiautomation.co.za/APIDEV/login', {
  23  |         //payload
  24  |         data: {
  25  |             "email": validUsers.classUser.username,
  26  |             "password": validUsers.classUser.password
  27  |             }
  28  |         });
  29  |         const body = await response.json();
  30  |         console.log (body);
  31  |         expect(response.status()).toBe(200); 
  32  |         bearerToken = body.data.token;
  33  | 
  34  |     });
  35  | 
  36  |   test('2. GET User Profile Details', { tag: '@regression' }, async ({ request }) => {
  37  |   const response = await request.get('https://www.ndosiautomation.co.za/APIDEV/profile', {
  38  |     headers: {
  39  |       Authorization: `Bearer ${bearerToken}`,
  40  |     },
  41  |   });
  42  | 
  43  |   const body = await response.json();
  44  |   console.log('Profile Response:', body);
  45  | 
  46  |   // 1. Assert status code
  47  |   expect(response.status()).toBe(200);
  48  | 
  49  |   // 2. Assert wrapper response fields
  50  |   expect(body.success).toBe(true);
  51  |   expect(body.message).toBe('Profile retrieved successfully');
  52  | 
  53  |   // 3. Assert profile fields inside 'data'
  54  |   expect(body.data.Email).toBe(validUsers.classUser.username);
  55  | 
  56  | });
  57  | 
  58  |   test('3. PUT Update User Profile with Base64 Avatar', { tag: '@regression' }, async ({ request }) => {
  59  |   // 1. Read local sample avatar and convert it to a Base64 string
  60  |   const filePath = path.join(process.cwd(), 'src', 'fixtures', 'test-data', 'sample-avatar.png');
> 61  |   const base64Image = `data:image/png;base64,${fs.readFileSync(filePath, 'base64')}`;
      |                                                   ^ Error: ENOENT: no such file or directory, open '/home/xzwane/Desktop/ndosi_profile_automation/src/fixtures/test-data/sample-avatar.png'
  62  | 
  63  |   // 2. Send PUT request with the required JSON payload
  64  |   const response = await request.put('https://www.ndosiautomation.co.za/APIDEV/profile', {
  65  |     headers: {
  66  |       'Authorization': `Bearer ${validUsers.classUser.token}`,
  67  |       'Content-Type': 'application/json',
  68  |     },
  69  |     data: {
  70  |       firstName: validUsers.classUser.name,
  71  |       lastName: validUsers.classUser.surname,
  72  |       profilePicture: base64Image,
  73  |       aboutMe: 'Automation engineer testing profile update',
  74  |     },
  75  |   });
  76  | 
  77  |   const body = await response.json();
  78  |   console.log('Update Profile Response:', body);
  79  | 
  80  |   // 3. Validate status and response structure
  81  |   expect(response.status()).toBe(200);
  82  |   expect(body.success).toBe(true);
  83  |   
  84  | });
  85  | 
  86  | test('3. POST Profile Picture Upload via API', { tag: '@regression' }, async ({ request }) => {
  87  |   const filePath = path.join(process.cwd(), 'src', 'fixtures', 'test-data', 'sample-avatar.png');
  88  |   const fileBuffer = fs.readFileSync(filePath);
  89  | 
  90  |   const response = await request.post('https://www.ndosiautomation.co.za/APIDEV/profile/upload-avatar', {
  91  |     headers: {
  92  |       Authorization: `Bearer ${validUsers.classUser.token}`,
  93  |     },
  94  |     multipart: {
  95  |       file: {
  96  |         name: 'sample-avatar.png', // FIXED: Pass filename, not full system path
  97  |         mimeType: 'image/png',
  98  |         buffer: fileBuffer,
  99  |       },
  100 |     },
  101 |   });
  102 | 
  103 |   const body = await response.json();
  104 |   console.log('Upload Response:', body);
  105 | 
  106 |   expect(response.status()).toBe(200);
  107 | });
  108 | });
```