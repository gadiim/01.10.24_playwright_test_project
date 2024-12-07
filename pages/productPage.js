const { expect } = require('@playwright/test');

class ProductPage {
    constructor(page) {
        this.page = page;
        this.book1 = page.locator('a[href="https://www.packtpub.com/product/mastering-redmine-second-edition/9781785881305"]').nth(1);
        this.eBookButton = page.locator('body > div.container.product-page > div.product-page-lhs > section.product > div > div > div > section.product-details-types-tab.desktop > a:nth-child(1)');
        // this.addToCartButton = page.locator('#ebook-9781785881305').nth(1);
        this.addToCartButton = page.locator('#ebook-9781785883460').nth(1);
        this.cartIcon = page.locator('body > header > div.rebuild-container.header-wrapper > div.header-actions > div.header-cart > div');
        this.removeFromCart = page.locator('button[id="cart-pop-over-9781785881305"]');
        this.cartCount = page.locator('.header-cart-count');
    }

    async clickBook() {
        await this.book1.click();
    }

    async clickEBookButton() {
        await this.eBookButton.click();
    }

    async addToCart() {
        await this.addToCartButton.waitFor({ state: 'visible' });
        await this.addToCartButton.click();
    }

    async hoverOnCartIcon() {
        await this.cartIcon.hover();
    }

    async clickCartIcon() {
        await this.cartIcon.click();
    }

    async clickToRemoveFromCart() {
        await this.removeFromCart.click();
    }

    async verifyItemAddedToCart() {
        await expect(this.cartIcon).toBeVisible();
        await expect(this.cartCount).toHaveText('1');
    }

    async verifyItemRemovedFromCart() {
        await expect(this.cartCount).toHaveText('0');
    }
}

module.exports = { ProductPage };