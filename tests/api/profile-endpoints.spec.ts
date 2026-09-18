import { test, expect } from '../../src/fixtures/testFixtures';
import { validUsers } from '../../src/fixtures/test-data/test-data';
import path from 'path';
import fs from 'fs';

test.describe('Ndosi API Suite - User Profile Endpoints', () => {
  let bearerToken: string;

  test('Positive login via API - class user', {tag: '@regression'}, async ({request}) => {
        const response = await request.post('https://www.ndosiautomation.co.za/APIDEV/login', {
        //payload
        data: {
            "email": validUsers.classUser.username,
            "password": validUsers.classUser.password
            }
        });
        const body = await response.json();
        console.log (body);
        expect(response.status()).toBe(200); 


    });

  test('2. GET User Profile Details', { tag: '@regression' }, async ({ request }) => {
  const response = await request.get('https://www.ndosiautomation.co.za/APIDEV/profile', {
    headers: {
      Authorization: `Bearer ${validUsers.classUser.token}`,
    },
  });

  const body = await response.json();
  console.log('Profile Response:', body);

  // 1. Assert status code
  expect(response.status()).toBe(200);

  // 2. Assert wrapper response fields
  expect(body.success).toBe(true);
  expect(body.message).toBe('Profile retrieved successfully');

  // 3. Assert profile fields inside 'data'
  expect(body.data.Email).toBe(validUsers.classUser.username);

});

  test('3. PUT Update User Profile with Base64 Avatar', { tag: '@regression' }, async ({ request }) => {
  // 1. Read local sample avatar and convert it to a Base64 string
  const filePath = path.join(process.cwd(), 'src', 'fixtures', 'test-data', 'sample-avatar.png');
  const base64Image = `data:image/png;base64,${fs.readFileSync(filePath, 'base64')}`;

  // 2. Send PUT request with the required JSON payload
  const response = await request.put('https://www.ndosiautomation.co.za/APIDEV/profile', {
    headers: {
      'Authorization': `Bearer ${validUsers.classUser.token}`,
      'Content-Type': 'application/json',
    },
    data: {
      firstName: validUsers.classUser.name,
      lastName: validUsers.classUser.surname,
      profilePicture: base64Image,
      aboutMe: 'Automation engineer testing profile update',
    },
  });

  const body = await response.json();
  console.log('Update Profile Response:', body);

  // 3. Validate status and response structure
  expect(response.status()).toBe(200);
  expect(body.success).toBe(true);
  
});

test('3. POST Profile Picture Upload via API', { tag: '@regression' }, async ({ request }) => {
  const filePath = path.join(process.cwd(), 'src', 'fixtures', 'test-data', 'sample-avatar.png');
  const fileBuffer = fs.readFileSync(filePath);

  const response = await request.post('https://www.ndosiautomation.co.za/APIDEV/profile/upload-avatar', {
    headers: {
      Authorization: `Bearer ${validUsers.classUser.token}`,
    },
    multipart: {
      file: {
        name: 'sample-avatar.png', // FIXED: Pass filename, not full system path
        mimeType: 'image/png',
        buffer: fileBuffer,
      },
    },
  });

  const body = await response.json();
  console.log('Upload Response:', body);

  expect(response.status()).toBe(200);
});
});