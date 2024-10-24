const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const CatalogPage = require('../pages/catalogPage');
const ProductPage = require('../pages/productPage');
const CartPage = require('../pages/cartPage');

test.setTimeout(120000); // Увеличиваем таймаут теста до 120 секунд

test('Добавление товара в корзину', async ({ page }) => {
    const homePage = new HomePage(page);
    const catalogPage = new CatalogPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    // Открыть сайт
    await page.goto('https://ramonki.by');

    // Перейти в раздел «Каталог»
    await homePage.goToCatalog();
    await catalogPage.selectClothes();
    await catalogPage.waitForPage();
    await catalogPage.selectDresses();

    // Дождаться списка товаров
    await productPage.getProductVisibleCatalog();

    const productName = await productPage.getProductName();
    const productPrice = await productPage.getProductPrice();

    // Кликнуть на иконку корзинки первого товара
    await productPage.addFirstModalToCart();

    const productSize = await productPage.selectElementBySize();

    // Кликнуть на кнопку "Добавить в корзину"
    await productPage.clickAddToCartButton();

    // Проверить, что второе модальное окно появилось и закрывать
    await productPage.addCloseModalToCart();

    // Перейти на страницу «Корзина»
    await page.goto('https://ramonki.by/cart');

    // Проверка параметров товара
    await cartPage.cartWaitPage();
    const cartProductName = await cartPage.getCartProductName();
    const cartProductPrice = await cartPage.getCartProductPrice();
    const cartProductSize = await cartPage.getCartProductSize();

    const actualPrice = cartProductPrice.trim().match(/[\d.]+/)[0];
    const expectedPrice = productPrice.trim().match(/[\d.]+/)[0];

    const actualSize = cartProductSize.trim().match(/[\d.]+/)[0];
    const expectedSize = cartProductSize.trim().match(/[\d.]+/)[0];

    expect(cartProductName).toBe(productName);
    expect(parseFloat(actualPrice)).toBe(parseFloat(expectedPrice));
    expect(actualSize).toBe(expectedSize);
});
