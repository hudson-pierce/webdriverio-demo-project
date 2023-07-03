import BasePage from './base.page.js';

class ProductsPage extends BasePage {
    get productsHeader() {
        return $('//*[text()="Products"]')
    }
}

export default new ProductsPage();
