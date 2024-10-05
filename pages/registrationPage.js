class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('input[id="user_login"]');
        this.passwordInput = page.locator('input[id="user_password"]');
        this.passwordConfirmationInput = page.locator('input[id="user_password_confirmation"]');
        this.firstNameInput = page.locator('input[id="user_firstname"]');
        this.lastNameInput = page.locator('input[id="user_lastname"]');
        this.emailInput = page.locator('input[id="user_mail"]');
        this.submitButton = page.locator('input[name="commit"]');
    }

    async navigate() {
        await this.page.goto('https://www.redmine.org/');
        await this.page.locator('a[href="/account/register"]').click();
    }

    async register(username, password, firstName, lastName, email) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.passwordConfirmationInput.fill(password);
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.submitButton.click();
    }
}

module.exports = { RegistrationPage };
