import { test, expect } from '../../src/fixtures/testFixtures';

test.describe('Ndosi Automation - API Response Code Validation', () => {
  
  test('API Test: Intercept and validate UI endpoints', async ({ page, profileApiClient }) => {
    const interceptedEndpoints: Array<{ url: string; status: number }> = [];

    // Intercept network calls during interaction
    page.on('response', (response) => {
      if (response.url().includes('/api/')) {
        interceptedEndpoints.push({
          url: response.url(),
          status: response.status(),
        });
      }
    });

    // Execute flow
    await page.goto('/login');
    await page.fill('#username', 'testuser');
    await page.fill('#password', 'Password123!');
    await page.click('button[type="submit"]');

    // Assert intercepted HTTP response statuses
    for (const endpoint of interceptedEndpoints) {
      expect(endpoint.status).toBeLessThan(400);
    }
  });
});