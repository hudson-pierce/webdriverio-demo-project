import LoginPage from '../pageobjects/login.page.js';
import ProductsPage from '../pageobjects/products.page.js';

describe('Login Page Tests', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('Login with valid username and password', async () => {
        // username and password values
        const username = 'standard_user';
        const password = 'secret_sauce';

        // set username
        const test = LoginPage.usernameInput;
        await test.setValue(username);

        // set password
        await LoginPage.passwordInput.setValue(password);

        // click submit button
        await LoginPage.submitButton.click();

        // assert that user is logged in
        await expect(ProductsPage.productsHeader).toHaveText('Products')
    });
});