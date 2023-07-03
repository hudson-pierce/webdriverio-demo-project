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
}

export default new LoginPage();
