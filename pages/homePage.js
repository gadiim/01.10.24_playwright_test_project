const { expect } = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;
        this.topMenuBlock = page.locator('#top-menu');
        this.headerBlock = page.locator('#header');
        this.mainBlock = page.locator('#main');
        this.sidebarBlock = page.locator('#sidebar');
        this.contentBlock = page.locator('#content');
        this.footerBlock = page.locator('#footer');
    }

    async navigate() {
        await this.page.goto('https://www.redmine.org/');
        await this.page.locator('a[class="home"]').click();
    }

    async checkVisibility() {
        await expect(this.topMenuBlock).toBeVisible();
        await expect(this.headerBlock).toBeVisible();
        await expect(this.mainBlock).toBeVisible();
        await expect(this.sidebarBlock).toBeVisible();
        await expect(this.contentBlock).toBeVisible();
        await expect(this.footerBlock).toBeVisible();
    }
}

module.exports = { HomePage };