const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    timeout: 120000,
    testDir: './tests',
    use: {
        headless: false,
        browserName: 'chromium',
        ignoreDefaultArgs: ['--disable-extensions'],
    },
    reporter: [['list'], ['html', { outputFile: 'test-results.html' }]],
});
