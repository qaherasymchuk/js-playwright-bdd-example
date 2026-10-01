Feature: Todos

  @smoke
  Scenario: Adding a todo shows it in the list
    Given the todo app is open
    When the user adds a todo "Buy milk"
    Then the todo "Buy milk" is shown


  Scenario: Completing a todo marks it done
    Given the todo "Walk the dog" is in the list
    When the user completes the todo "Walk the dog"
    Then the todo "Walk the dog" is completed


  @smoke
  Scenario: The list starts empty
    When the user opens the todo app
    Then no todos are shown
