import ProductsPage from '../pageobjects/products.page.js';
import LoginPage from '../pageobjects/login.page.js';

describe('Products Page Tests', () => {
    beforeEach(async () => {
        await LoginPage.open()
        await LoginPage.login();
        await ProductsPage.open();
    });

    afterEach(async () => {
        for (const removeButton of await ProductsPage.removeButtons) {
            await removeButton.click();
        }
    });

    it('Test adding 2 items to the cart', async () => {
        // add items to cart (by title)
        ProductsPage.addItemToCart("Sauce Labs Backpack");
        ProductsPage.addItemToCart("Sauce Labs Fleece Jacket");

        // check number of items in cart icon is correct
        await expect(ProductsPage.cartIconNumber).toHaveText("2");
    });

    it ("Test that the cart is empty", async () => {
        const cartNumberIconExists = await ProductsPage.cartIconNumber.isExisting();
        await expect(cartNumberIconExists).toBe(false);
    });
});