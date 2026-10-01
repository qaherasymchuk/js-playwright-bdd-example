import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures/index.js';

Given('the todo app is open', async ({ todoPage }) => {
  await todoPage.open();
});

Given('the todo {string} is in the list', async ({ todoPage }, text) => {
  await todoPage.open();
  await todoPage.addTodo(text);
});

When('the user opens the todo app', async ({ todoPage }) => {
  await todoPage.open();
});

When('the user adds a todo {string}', async ({ todoPage }, text) => {
  await todoPage.addTodo(text);
});

When('the user completes the todo {string}', async ({ todoPage }, text) => {
  await todoPage.complete(text);
});

Then('the todo {string} is shown', async ({ todoPage }, text) => {
  await expect(todoPage.item(text)).toBeVisible();
});

Then('the todo {string} is completed', async ({ todoPage }, text) => {
  await expect(todoPage.item(text)).toHaveClass(/done/);
});

Then('no todos are shown', async ({ todoPage }) => {
  await expect(todoPage.emptyMessage).toBeVisible();
  await expect(todoPage.items).toHaveCount(0);
});
