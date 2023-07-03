import BasePage from "./base.page.js";

class LoginPage extends BasePage {
    open() {
        return super.open('')
    }

    get usernameInput() {
        return $('#user-name');
    }
    get passwordInput() {
        return $('#password');
    }
    get submitButton() {
        return $('#login-button')
    }

    async login () {
        // username and password values
        const username = 'standard_user';
        const password = 'secret_sauce';

        // set username
        await this.usernameInput.setValue(username);

        // set password
        await this.passwordInput.setValue(password);

        // click submit button
        await this.submitButton.click();
    }
}

export default new LoginPage();
