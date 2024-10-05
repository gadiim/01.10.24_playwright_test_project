const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { DataGenerator } = require('../utils/dataGenerator');

test('Verify that an unregistered user cannot log in.', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const userData = DataGenerator.generateUserData();

    await loginPage.navigate();
    await loginPage.login(
        userData.username,
        userData.password
    );

    await page.waitForTimeout(1000);

    const errorMessage = page.locator('#flash_error');
    await expect(errorMessage).toBeVisible();

    await page.screenshot({ path: 'screenshots/tc002.png' });

});
