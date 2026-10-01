Feature: Todos

  Scenario: Adding a todo shows it in the list
    Given I open the todo app
    When I add a todo "Buy milk"
    Then I see the todo "Buy milk"

  Scenario: Completing a todo marks it done
    Given I open the todo app
    And I add a todo "Walk the dog"
    When I complete the todo "Walk the dog"
    Then the todo "Walk the dog" is completed

  Scenario: The list starts empty
    Given I open the todo app
    Then I see no todos
