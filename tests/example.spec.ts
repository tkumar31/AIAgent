import { test, expect } from '@playwright/test';

test.describe('Example Tests', () => {
  test('should navigate to homepage', async ({ page }) => {
    // Update the URL to your target website
    await page.goto('https://example.com');
    
    // Check if page title contains 'Example'
    await expect(page).toHaveTitle(/Example/);
  });

  test('should find an element', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Find and verify the h1 element
    const heading = page.locator('h1');
    await expect(heading).toContainText('Example Domain');
  });

  test('should perform a click action', async ({ page }) => {
    await page.goto('https://example.com');
    
    // Interact with elements
    const elements = await page.locator('a').count();
    expect(elements).toBeGreaterThan(0);
  });
});