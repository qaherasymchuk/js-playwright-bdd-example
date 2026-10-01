import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures/index.js';

Given('I open the todo app', async ({ todoPage }) => {
  await todoPage.open();
});

When('I add a todo {string}', async ({ todoPage }, text) => {
  await todoPage.addTodo(text);
});

When('I complete the todo {string}', async ({ todoPage }, text) => {
  await todoPage.complete(text);
});

Then('I see the todo {string}', async ({ todoPage }, text) => {
  await expect(todoPage.item(text)).toBeVisible();
});

Then('the todo {string} is completed', async ({ todoPage }, text) => {
  await expect(todoPage.item(text)).toHaveClass(/done/);
});

Then('I see no todos', async ({ todoPage }) => {
  await expect(todoPage.emptyMessage).toBeVisible();
  await expect(todoPage.items).toHaveCount(0);
});
