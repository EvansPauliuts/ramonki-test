# Тесты для сайта Ramonki

## Описание

Этот проект содержит автоматизированные тесты для веб-сайта [ramonki.by](https://ramonki.by) с использованием фреймворка [Playwright](https://playwright.dev/). Тесты написаны с применением паттерна Page Object Model (POM) для улучшения структуры и поддержки.

## Структура проекта
```bash
ramonki-test/
├── tests/                   # Каталог с тестами
│   └── add-to-cart.test.js  # Тест для добавления товара в корзину
├── pages/                   # Каталог с классами страниц
│   ├── homePage.js          # Класс для главной страницы
│   ├── catalogPage.js       # Класс для страницы каталога
│   ├── productPage.js       # Класс для страницы товара
│   └── cartPage.js          # Класс для страницы корзины
├── README.md                # Документация проекта
├── package.json             # Файл конфигурации npm
└── playwright.config.js      # Конфигурация Playwright
```

### Требования

- Node.js (версия 14 и выше)
- npm или yarn

### Установка
   ```bash
   git clone <ваш-репозиторий>
   cd ramonki-test
   ```

### Установите зависимости:
   ```bash
   npm install
   ```

### Установите Playwright:
   ```bash
   npx playwright install
   ```

## Запуск тестов

Перед запуском тестов, необходимо отключить cookies.

 ```bash
   npx playwright test --ui
   ```
