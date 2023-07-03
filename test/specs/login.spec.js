import LoginPage from '../pageobjects/login.page.js';
import ProductsPage from '../pageobjects/products.page.js';

describe('Login Page Tests', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('Login with valid username and password', async () => {
        // Log user in with valid credentials
        await LoginPage.login();

        // assert that user is logged in
        await expect(ProductsPage.productsHeader).toHaveText('Products')
    });
});