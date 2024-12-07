// const { test, expect } = require('@playwright/test');
// const { HomePage } = require('../pages/homePage');

// test('Click all elements in main-menu', async ({ page }) => {

//     const homePage = new HomePage(page);

//     await homePage.navigate();

//     for (let i = 0; i < homePage.menuItems.length; i++) {
//         await homePage.clickMenuItem(i);
//         await page.screenshot({ path: `screenshots/tc004_${i + 1}.png` });
//     }
// });