class ProductPage {
    constructor(page) {
        this.page = page;
        this.locators = {
            productName: '.product-card-description__title > .product-card-description__title-name',
            productPrice: '.product-card-description__price > .product-card-description__price-current',
            clickSize: '.options-selector__list > .options-selector__item',
            productSize: '.options-selector > .options-selector__list > .options-selector__item--active',
            buyButton: '.product-card-description__buy > i.icon',
            openModal: '.v-modal',
            loadDesktop: '.v-modal__desktop',
            closeModal: '.v-modal__close',
            sizeSelector: '.options-selector__list > .options-selector__item',
            addToCartButton: '.options-selector-modal__buttons > .button',
            productVisibleCatalog: '.catalog__products'
        };
    }

    async getProductName() {
        const name = await this.page.locator(this.locators.productName).first();
        return await name.textContent();
    }

    async getProductPrice() {
        const name = await this.page.locator(this.locators.productPrice).first();
        return await name.textContent();
    }

    async addFirstModalToCart() {
        await this.page.locator(this.locators.buyButton).first().click();
        await this.page.waitForSelector(this.locators.openModal, { timeout: 5000 });
    }

    async addCloseModalToCart() {
        await this.page.waitForSelector(this.locators.loadDesktop, { timeout: 5000 });
        await this.page.locator(this.locators.closeModal).click();
    }

    async selectElementBySize() {
        await this.page.locator(this.locators.clickSize).first().click();

        const activeLiElement = await this.page.locator(this.locators.productSize).first();
        const isVisible = await activeLiElement.isVisible();

        if (isVisible) {
            return await activeLiElement.textContent();
        }

    }

    async clickAddToCartButton() {
        await this.page.locator(this.locators.addToCartButton).last().click();
    }

    async getProductVisibleCatalog() {
        await this.page.waitForSelector(this.locators.productVisibleCatalog, { timeout: 120000 });
    }
}

module.exports = ProductPage;