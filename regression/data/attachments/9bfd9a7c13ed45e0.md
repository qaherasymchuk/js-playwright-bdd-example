# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/todos.feature.spec.js >> Todos >> A missing todo shows failure evidence
- Location: .features-gen/features/todos.feature.spec.js:23:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('listitem').filter({ hasText: 'This todo was never added' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('listitem').filter({ hasText: 'This todo was never added' }) with timeout 5000ms
  - waiting for getByRole('listitem').filter({ hasText: 'This todo was never added' })

```

```yaml
- heading "Todos" [level=1]
- text: New todo
- textbox "New todo"
- button "Add"
- status: No todos yet
- list
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | import { Given, When, Then } from '../fixtures/index.js';
  3  | 
  4  | Given('the todo app is open', async ({ todoPage }) => {
  5  |   await todoPage.open();
  6  | });
  7  | 
  8  | Given('the todo {string} is in the list', async ({ todoPage }, text) => {
  9  |   await todoPage.open();
  10 |   await todoPage.addTodo(text);
  11 | });
  12 | 
  13 | When('the user opens the todo app', async ({ todoPage }) => {
  14 |   await todoPage.open();
  15 | });
  16 | 
  17 | When('the scenario log is written', async ({ todoPage }) => {
  18 |   const body = [
  19 |     `url: ${todoPage.page.url()}`,
  20 |     `todo rows: ${await todoPage.items.count()}`,
  21 |     'expected a todo that was never added',
  22 |   ].join('\n');
  23 |   console.log(body);
  24 |   await test.info().attach('scenario.log', {
  25 |     body,
  26 |     contentType: 'text/plain',
  27 |   });
  28 | });
  29 | 
  30 | When('the user adds a todo {string}', async ({ todoPage }, text) => {
  31 |   await todoPage.addTodo(text);
  32 | });
  33 | 
  34 | When('the user completes the todo {string}', async ({ todoPage }, text) => {
  35 |   await todoPage.complete(text);
  36 | });
  37 | 
  38 | Then('the todo {string} is shown', async ({ todoPage }, text) => {
> 39 |   await expect(todoPage.item(text)).toBeVisible();
     |                                     ^ Error: expect(locator).toBeVisible() failed
  40 | });
  41 | 
  42 | Then('the todo {string} is completed', async ({ todoPage }, text) => {
  43 |   await expect(todoPage.item(text)).toHaveClass(/done/);
  44 | });
  45 | 
  46 | Then('no todos are shown', async ({ todoPage }) => {
  47 |   await expect(todoPage.items).toHaveCount(0);
  48 |   await expect(todoPage.emptyMessage).toBeVisible();
  49 | });
  50 | 
```