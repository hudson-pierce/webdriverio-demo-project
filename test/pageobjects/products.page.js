import BasePage from './base.page.js';

class ProductsPage extends BasePage {
    open() {
        return super.open('inventory.html');
    }
    get productsHeader() {
        return $('//*[text()="Products"]');
    }
    get cartIconNumber() {
        return $('.shopping_cart_badge');
    }
    get removeButtons() {
        return $$('//*[text()="Remove"]')
    }
    async addItemToCart(itemName) {
        const addToCartButton = $(`//*[text()='${itemName}']/../../../div[2]/button`);
        await expect(addToCartButton).toHaveText('Add to cart');
        addToCartButton.click();
        await expect(addToCartButton).toHaveText('Remove');
    }
}

export default new ProductsPage();
