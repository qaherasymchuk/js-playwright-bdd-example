---
name: writing-gherkin
description: Gherkin rules for one behavior per scenario, in Given-When-Then order.
applyTo: "**/*.feature,src/steps/**/*.js"
---

# Writing good Gherkin

Follow [BDD 101: Writing Good Gherkin](https://automationpanda.com/2017/01/30/bdd-101-writing-good-gherkin/).

## Step types

- **Given** sets the starting state. Write it as a state, in the present tense.
- **When** is the action under test.
- **Then** checks the outcome, in the present tense.
- **And** and **But** continue the previous keyword. They do not change the step type.

Keep the order Given, then When, then Then. One scenario covers one behavior. Do not put a second When-Then pair in the same scenario.

Do not write Given followed only by Then. If there is no prior state and the action is the behavior, start with When.

## Phrasing

- Write in the third person.
- Use the present tense for every step type.
- Give every step a subject and a predicate.
- Keep articles such as "a" and "the". Use ordinary grammar.
- Do not end a step with a period or a comma.
- Write declarative steps. Leave clicks, typing, and navigation in the step definition.

## Example

```gherkin
Feature: Todos

  Scenario: Adding a todo shows it in the list
    Given the todo app is open
    When the user adds a todo "Buy milk"
    Then the todo "Buy milk" is shown


  Scenario: The list starts empty
    When the user opens the todo app
    Then no todos are shown
```

The empty-list scenario starts with When because opening the app is the behavior. "The todo app is open" is a state, so it is a Given. "The user opens the todo app" is an action, so it is a When.
