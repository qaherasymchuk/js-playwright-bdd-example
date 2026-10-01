---
name: add-scenario
description: >-
  Adds one Gherkin scenario through a thin step and a page-object method.
  Use when adding a scenario, a behavior, or coverage for the todo app.
---

# Add a scenario

Add one behavior. Follow `.github/instructions/writing-gherkin.instructions.md` for the scenario text.

## Steps

1. Add the scenario to `features/todos.feature`, or a new file under `features/` if it is a different feature.
2. Reuse an existing step phrase when the words already exist in `src/steps/`.
3. For a new phrase, add one step in `src/steps/`. Import `Given`, `When`, and `Then` from `src/fixtures/index.js`. Call a page-object method. Put `expect` only in `Then` steps.
4. Put locators and interactions on the page object. Follow `.github/instructions/adding-locators.instructions.md`: `getByTestId` only, never `getByText`. Add a new fixture in `src/fixtures/index.js` only when the scenario needs a new page object.
5. Run `npx bddgen && npx playwright test` and fix the layer that failed.

## Shape

```js
When('the user adds a todo {string}', async ({ todoPage }, text) => {
  await todoPage.addTodo(text);
});
```

```js
async addTodo(text) {
  await this.input.fill(text);
  await this.addButton.click();
}
```
