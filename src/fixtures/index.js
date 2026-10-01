import { test as base, createBdd } from 'playwright-bdd';
import { TodoPage } from '../pages/TodoPage.js';

export const test = base.extend({
  todoPage: async ({ page }, use) => {
    await use(new TodoPage(page));
  },
});

export const { Given, When, Then } = createBdd(test);
