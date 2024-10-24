class CatalogPage {
    constructor(page) {
        this.page = page;
        this.locators = {
            clothesLink: '.drop-menu__link--catalog >> text="Одежда"',
            dressesLink: '.drop-menu__list--wrap >> .drop-menu__item >> .drop-menu__link >> text="Платья и сарафаны"',
            menu: '.drop-menu__menu--wide',
        };
    }

    async selectClothes() {
        await this.page.locator(this.locators.clothesLink);
    }

    async selectDresses() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.locator(this.locators.dressesLink).click()
        ]);
    }

    async waitForPage() {
        await this.page.waitForSelector(this.locators.menu, { timeout: 5000 });
    }
}

module.exports = CatalogPage;