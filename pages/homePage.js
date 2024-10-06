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

        this.menuItems = [
            '#main-menu > ul > li:nth-child(1)',
            '#main-menu > ul > li:nth-child(2)',
            '#main-menu > ul > li:nth-child(3)',
            '#main-menu > ul > li:nth-child(4)',
            '#main-menu > ul > li:nth-child(5)',
            '#main-menu > ul > li:nth-child(6)',
            '#main-menu > ul > li:nth-child(7)',
            '#main-menu > ul > li:nth-child(8)',
            '#main-menu > ul > li:nth-child(9)'
        ];
        this.expectedUrls = [
            'https://www.redmine.org/projects/redmine',
            'https://www.redmine.org/projects/redmine/wiki/Download',
            'https://www.redmine.org/projects/redmine/activity',
            'https://www.redmine.org/projects/redmine/roadmap',
            'https://www.redmine.org/projects/redmine/issues',
            'https://www.redmine.org/projects/redmine/news',
            'https://www.redmine.org/projects/redmine/wiki',
            'https://www.redmine.org/projects/redmine/boards',
            'https://www.redmine.org/projects/redmine/repository'
        ];
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

    async clickMenuItem(index) {
        await this.page.locator(this.menuItems[index]).click();
        await expect(this.page).toHaveURL(this.expectedUrls[index]);
    }
}

module.exports = { HomePage };