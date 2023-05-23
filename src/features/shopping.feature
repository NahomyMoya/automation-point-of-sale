Feature: Shopping
  Scenario: Add a product to the cart
    Given I am on the main page
    And I select any product category
    When I select the first item for that category
    And I select size and color
    And I add 5 product items to the cart
    Then The cart must have 5 products
    And A product addition success message must be shown


  Scenario: Perform Checkout First Step
    Given I am on the checkout page
    When I fill the checkout info on the first step
    Then The order sumary must be displayed

  Scenario: Perform Checkout Second Step
    When I place my order
    Then The order number must be visible
    And A purchase success message must be shown
