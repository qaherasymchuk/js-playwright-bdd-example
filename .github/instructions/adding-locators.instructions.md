---
name: adding-locators
description: Add Playwright locators with getByTestId. Do not use getByText.
applyTo: 'src/pages/**/*.js,src/steps/**/*.js,demo-app/**/*.html'
---

# Adding locators

Locate an element with `getByTestId`. Add `data-testid` on that element in `demo-app/public/index.html`. Use a kebab-case name for the element, not its current copy. The empty-state message is `data-testid="empty-message"` and `page.getByTestId('empty-message')`.

Do not use `getByText`. Replacing the sentence "No todos yet" must leave the locator working. Assert that the message element is visible, and assert that the list is empty by counting its rows.

Define the locator on the page object. Steps call page-object methods and do not query the page.

Do not use a CSS selector or an XPath. An id such as `#empty` belongs to the page script.

When the scenario names a value the user entered, such as "Buy milk", filter the `getByTestId` locator by that value.
