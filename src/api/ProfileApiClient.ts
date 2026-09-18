import { APIRequestContext, expect } from '@playwright/test';

export class ProfileApiClient {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async validateEndpoint(endpoint: string, expectedStatus: number = 200) {
    const response = await this.request.get(endpoint);
    expect(response.status()).toBe(expectedStatus);
    return response;
  }
}