class HomePage {
    constructor(page) {
        this.page = page;
        this.locators = {
            buttonCatalog: '.catalog-button >> text="Каталог"'
        };
    }

    async goToCatalog() {
        await this.page.locator(this.locators.buttonCatalog).click();
    }
}

module.exports = HomePage;