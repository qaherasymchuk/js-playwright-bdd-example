# js-playwright-bdd-example

JavaScript BDD tests with [Playwright](https://playwright.dev) and [playwright-bdd](https://github.com/vitalets/playwright-bdd). Gherkin features call step definitions, which drive a page object injected through a Playwright fixture. Playwright starts the bundled demo app, so the suite does not depend on an external site.

## Layout

- `features/` — Gherkin scenarios
- `src/pages/` — page objects
- `src/fixtures/` — custom Playwright fixtures
- `src/steps/` — step definitions
- `demo-app/` — static todo app and its server
- `playwright.config.js` — BDD generation and the Playwright runner

## Run

```bash
npm install
npx playwright install chromium
npm test
```

`npm run demo` serves the app at http://127.0.0.1:3000. `npm run test:ui` opens Playwright UI mode, and `npm run report` opens the HTML report.

`npm run allure:report` builds a local Allure report from `allure-results`. That command needs Java.

## Reports

GitHub Actions publishes Allure to [GitHub Pages](https://qaherasymchuk.github.io/js-playwright-bdd-example/). Each suite keeps its own history, so later runs show the trend.

- [Smoke](https://qaherasymchuk.github.io/js-playwright-bdd-example/smoke/) — pull requests
- [Regression](https://qaherasymchuk.github.io/js-playwright-bdd-example/regression/) — nightly at 01:00 UTC
