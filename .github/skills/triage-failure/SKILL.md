---
name: triage-failure
description: >-
  Maps a failing Playwright BDD run to the feature line, step definition, or
  page object. Use when a scenario fails, a test is red, or the user pastes
  Playwright output.
---

# Triage a failure

## Steps

1. Run `npx bddgen && npx playwright test`. To rerun one scenario, pass a title: `npx playwright test -g "Adding a todo"`.
2. Read the error from the bottom of the output. Generated specs live in `.features-gen/` and are not the source to edit.
3. Name the layer, then change only that layer:
   - **Feature** — the scenario describes the wrong behavior, or a step phrase has no definition.
   - **Step** — `src/steps/` calls the wrong page method, or a `Then` asserts the wrong thing.
   - **Page object** — `src/pages/` uses a locator or action that does not match `demo-app/public/index.html`.
   - **Demo app** — the page does not implement the behavior the scenario describes.
4. Rerun the failed scenario. Stop when it passes.

Playwright starts `demo-app/server.js` on `http://127.0.0.1:3000`. If the server is already running, the config reuses it outside CI.
