class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('input[id="username"]');
        this.passwordInput = page.locator('input[id="password"]');
        this.submitButton = page.locator('input[id="login-submit"]');
    }

    async navigate() {
        await this.page.goto('https://www.redmine.org/');
        await this.page.locator('a[href="/login"]').click();
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}

module.exports = { LoginPage };