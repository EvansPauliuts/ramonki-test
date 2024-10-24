class CartPage {
    constructor(page) {
        this.page = page;
        this.locators = {
            cartItem: '.cart-item',
            productName: 'div.cart-item__info > a.cart-item__text',
            productPrice: 'li.cart-item > p.cart-item__price',
            productSize: 'div.cart-item__info > p.cart-item__text:nth-of-type(2)',
        };
    }

    async cartWaitPage() {
        await this.page.waitForSelector(this.locators.cartItem, { timeout: 120000 });
    }

    async getCartProductName() {
        const name = await this.page.locator(this.locators.productName);
        return name.textContent();
    }

    async getCartProductPrice() {
        const name = await this.page.locator(this.locators.productPrice);
        return name.textContent();
    }

    async getCartProductSize() {
        const name = await this.page.locator(this.locators.productSize);
        return name.textContent();
    }
}

module.exports = CartPage;