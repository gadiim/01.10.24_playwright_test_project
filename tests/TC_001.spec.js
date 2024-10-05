const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../pages/registrationPage');
const { DataGenerator } = require('../utils/dataGenerator');

test('Verify that a new user can successfully register on the site.', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);
    const userData = DataGenerator.generateUserData();

    await registrationPage.navigate();
    await registrationPage.register(
        userData.username,
        userData.password,
        userData.firstName,
        userData.lastName,
        userData.email
    );

    await page.waitForTimeout(1000);

    await expect(page).toHaveURL('https://www.redmine.org/login');

    await page.screenshot({ path: 'screenshots/tc001.png' });
    
});
