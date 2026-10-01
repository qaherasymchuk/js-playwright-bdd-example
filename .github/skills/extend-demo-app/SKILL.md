---
name: extend-demo-app
description: >-
  Adds a behavior to the bundled todo demo app and covers it with a feature,
  page object, and steps. Use when the demo app, its page, or its server needs
  a new behavior.
---

# Extend the demo app

Keep the suite runnable with no external site. Playwright starts `node demo-app/server.js` from `playwright.config.js`.

## Steps

1. Change `demo-app/public/index.html`. Use a visible label, button name, or text that a page object can find with `getByRole`, `getByLabel`, or `getByText`.
2. Serve only `/` from `demo-app/server.js` unless the new behavior needs another route.
3. Add the behavior with the `add-scenario` skill: scenario, thin step, page-object method.
4. Run `npx bddgen && npx playwright test`.

Check the new behavior in the browser at `http://127.0.0.1:3000` with `npm run demo` when the UI change is more than a locator.
