const { test } = require('@playwright/test');
const { HomePage } = require('../pages/homePage');
const { ProductPage } = require('../pages/productPage');

test('Add book to cart and verify', async ({ page }) => {

    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const redmineBooks = page.locator('h2:has-text("Redmine books")');

    await homePage.navigate();
 z
    await redmineBooks.scrollIntoViewIfNeeded();

    await productPage.clickBook();
ї
    await productPage.addToCart();

    await productPage.verifyItemAddedToCart();
    await page.screenshot({ path: 'screenshots/tc005_cart_contains.png' });

    await productPage.hoverOnCartIcon();
    await productPage.clickCartIcon();

    await productPage.clickToRemoveFromCart();

    await productPage.verifyItemRemovedFromCart();
    await page.screenshot({ path: 'screenshots/tc005_cart_empty.png' });
});