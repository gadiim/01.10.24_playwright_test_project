const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');

test('Checking the visibility of site blocks.', async ({ page }) => {

    const homePage = new HomePage(page);

    homePage.navigate();
    await homePage.checkVisibility();

    await page.screenshot({ path: 'screenshots/tc003.png' });

});