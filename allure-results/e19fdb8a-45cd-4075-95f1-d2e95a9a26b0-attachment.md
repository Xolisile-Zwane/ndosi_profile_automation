# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/profile-endpoints.spec.ts >> Ndosi API Suite - User Profile Endpoints >> 3. POST Profile Picture Upload via API
- Location: tests/api/profile-endpoints.spec.ts:75:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | import { test, expect } from '../../src/fixtures/testFixtures';
  2  | import { validUsers } from '../../src/data/test-data';
  3  | import path from 'path';
  4  | import fs from 'fs';
  5  | 
  6  | test.describe.configure({ mode: 'serial' });
  7  | test.describe('Ndosi API Suite - User Profile Endpoints', () => {
  8  |   let bearerToken: string;
  9  | 
  10 |   test('Positive login via API - class user', {tag: '@regression'}, async ({request}) => {
  11 |         const response = await request.post('https://www.ndosiautomation.co.za/APIDEV/login', {
  12 |         //payload
  13 |         data: {
  14 |             "email": validUsers.classUser.username,
  15 |             "password": validUsers.classUser.password
  16 |             }
  17 |         });
  18 |         const body = await response.json();
  19 |         console.log (body);
  20 |         expect(response.status()).toBe(200); 
  21 |         bearerToken = body.data.token;
  22 | 
  23 |     });
  24 | 
  25 |   test('2. GET User Profile Details', { tag: '@regression' }, async ({ request }) => {
  26 |   const response = await request.get('https://www.ndosiautomation.co.za/APIDEV/profile', {
  27 |     headers: {
  28 |       Authorization: `Bearer ${bearerToken}`,
  29 |     },
  30 |   });
  31 | 
  32 |   const body = await response.json();
  33 |   console.log('Profile Response:', body);
  34 | 
  35 |   // 1. Assert status code
  36 |   expect(response.status()).toBe(200);
  37 | 
  38 |   // 2. Assert wrapper response fields
  39 |   expect(body.success).toBe(true);
  40 |   expect(body.message).toBe('Profile retrieved successfully');
  41 | 
  42 |   // 3. Assert profile fields inside 'data'
  43 |   expect(body.data.Email).toBe(validUsers.classUser.username);
  44 | 
  45 | });
  46 | 
  47 |   test('3. PUT Update User Profile with Base64 Avatar', { tag: '@regression' }, async ({ request }) => {
  48 |   // 1. Read local sample avatar and convert it to a Base64 string
  49 |   const filePath = path.join(process.cwd(), 'src', 'data', 'sample-avatar.png');
  50 |   const base64Image = `data:image/png;base64,${fs.readFileSync(filePath, 'base64')}`;
  51 | 
  52 |   // 2. Send PUT request with the required JSON payload
  53 |   const response = await request.put('https://www.ndosiautomation.co.za/APIDEV/profile', {
  54 |     headers: {
  55 |       'Authorization': `Bearer ${bearerToken}`,
  56 |       'Content-Type': 'application/json',
  57 |     },
  58 |     data: {
  59 |       firstName: validUsers.classUser.name,
  60 |       lastName: validUsers.classUser.surname,
  61 |       profilePicture: base64Image,
  62 |       aboutMe: 'Automation engineer testing profile update',
  63 |     },
  64 |   });
  65 | 
  66 |   const body = await response.json();
  67 |   console.log('Update Profile Response:', body);
  68 | 
  69 |   // 3. Validate status and response structure
  70 |   expect(response.status()).toBe(200);
  71 |   expect(body.success).toBe(true);
  72 |   
  73 | });
  74 | 
  75 | test('3. POST Profile Picture Upload via API', { tag: '@regression' }, async ({ request }) => {
  76 |   const filePath = path.join(process.cwd(), 'src', 'data', 'sample-avatar.png');
  77 |   const fileBuffer = fs.readFileSync(filePath);
  78 | 
  79 |   const response = await request.post('https://www.ndosiautomation.co.za/APIDEV/profile/image', {
  80 |     headers: {
  81 |       Authorization: `Bearer ${bearerToken}`,
  82 |     },
  83 |     multipart: {
  84 |       profileImage: {
  85 |         name: 'sample-avatar.png',
  86 |         mimeType: 'image/png',
  87 |         buffer: fileBuffer,
  88 |       },
  89 |     },
  90 |   });
  91 | 
  92 |   const body = await response.json();
  93 |   console.log('Upload Response:', body);
  94 | 
> 95 |   expect(response.status()).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  96 | });
  97 | });
```