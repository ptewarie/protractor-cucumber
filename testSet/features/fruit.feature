@E2E
Feature: Ordering fruit
  As a user I should be able to get the correct price with the correct nutrition
  In order to order my fruit


  Background:
    Given I go to the fruit site

  @shoppingBasket
  Scenario: Update shopping basket
    When I click on "Pear"
    And I click the add button in fruit details screen
    And the total items should be "1" and the total price "8.00"
    And I click on the clear button
    Then the total items should be "0" and the total price "0.00"

  @summary
  Scenario: Summary page
    When I search for "Grapefruit"
    And the correct amount of the "Grapefruit" should show
    And the price should be "11.00" Dollar
    And add item to chart
    And I go to summary page
    And I click on the increase arrow of product "1"
    And the total amount of item "1" "Grapefruit" should be "22.00"
    Then I click on the clear button


  @searchBar
  Scenario Outline: Search bar results for <fruit>
    * I search for "<fruit>"
    * the correct amount of the "<fruit>" should show
    * the price should be "<price>" Dollar

    Examples:
      | fruit       | price |
      | Apple       | 12.00 |
      | Avocado     | 16.00 |
      | Banana      | 4.00  |
      | Cantaloupe  | 3.00  |
      | Fig         | 10.00 |
      | Grape       | 8.00  |
      | Grapefruit  | 11.00 |
      | Guava       | 8.00  |
      | Kiwi        | 14.00 |
      | Lychee      | 18.00 |
      | Mango       | 8.00  |
      | Orange      | 9.00  |
      | Papaya      | 5.00  |
      | Peach       | 19.00 |
      | Pear        | 8.00  |
      | Persimmon   | 6.00  |
      | Pineapple   | 4.00  |
      | Pomegranate | 19.00 |
      | Strawberry  | 7.00  |
      | Tangerine   | 8.00  |
      | Watermelon  | 4.00  |

  @nutrition
  Scenario Outline: Nutrition check for <fruit>
    When I click on "<fruit>"
    Then the amount of calories should be "<calories>"
    And the amount of "Carotenoid" should be "<Carotenoid>"
    And the amount of "Fiber" should be "<Fiber>"
    And the amount of "Folates" should be "<Folates>"
    And the amount of "Potassium" should be "<Potassium>"
    And the amount of "Vitamin C" should be "<Vitamin C>"


    Examples:
      | fruit       | calories | Carotenoid | Fiber      | Folates    | Potassium  | Vitamin C  |
      | Apple       | 90       | Negligible | Average    | Negligible | Low        | Average    |
      | Avocado     | 90       | Negligible | Average    | Low        | Low        | Low        |
      | Banana      | 120      | Negligible | Average    | Low        | Average    | Average    |
      | Cantaloupe  | 50       | Great      | Negligible | Low        | Average    | Great      |
      | Fig         | 100      | Negligible | Average    | Negligible | Low        | Negligible |
      | Grape       | 100      | Negligible | Low        | Negligible | Low        | Good       |
      | Grapefruit  | 50       | Great      | Low        | Low        | Low        | Great      |
      | Guava       | 50       | Great      | Average    | Negligible | Low        | Great      |
      | Kiwi        | 90       | Low        | Average    | Negligible | Average    | Great      |
      | Lychee      | 125      | Low        | Average    | Negligible | Average    | Great      |
      | Mango       | 70       | Good       | Low        | Negligible | Low        | Great      |
      | Orange      | 70       | Low        | Average    | Average    | Low        | Great      |
      | Papaya      | 60       | Good       | Average    | Average    | Average    | Great      |
      | Peach       | 70       | Low        | Average    | Negligible | Low        | Average    |
      | Pear        | 100      | Negligible | Average    | Negligible | Low        | Average    |
      | Persimmon   | 120      | Great      | Good       | Negligible | Low        | Good       |
      | Pineapple   | 60       | Negligible | Low        | Negligible | Negligible | Good       |
      | Pomegranate | 110      | Negligible | Negligible | Negligible | Average    | Average    |
      | Strawberry  | 40       | Negligible | Average    | Low        | Low        | Great      |
      | Tangerine   | 50       | Good       | Average    | Low        | Low        | Great      |
      | Watermelon  | 90       | Great      | Low        | Negligible | Low        | Great      |

  @total
  Scenario Outline: dev test
    When I search for "<fruit>"
    And add item to chart
    And I search for "<fruit2>"
    And add item to chart
    And I go to summary page
    And I order "<quantity>" of "<fruit>" at "<unitPrice>"
    And I order "<quantity2>" of "<fruit2>" at "<unitPrice2>"
    Then total price and quantity should equal the sum "<unitPrice>" x "<quantity>" and "<unitPrice2>" x "<quantity2>"
    And I click on the clear button
    And Message will show "Your cart is empty."


    Examples:
      | fruit       | unitPrice | quantity | fruit2      | unitPrice2 | quantity2 |
      | Apple       | 12.00     | 5        | Avocado     | 16.00      | 3         |
      | Avocado     | 16.00     | 3        | Watermelon  | 4.00       | 5         |
      | Banana      | 4.00      | 5        | Watermelon  | 4.00       | 5         |
      | Cantaloupe  | 3.00      | 5        | Tangerine   | 8.00       | 5         |
      | Fig         | 10.00     | 5        | Strawberry  | 7.00       | 5         |
      | Grape       | 8.00      | 5        | Pomegranate | 19.00      | 5         |
      | Grapefruit  | 11.00     | 5        | Pineapple   | 4.00       | 5         |
      | Guava       | 8.00      | 5        | Persimmon   | 6.00       | 5         |
      | Kiwi        | 14.00     | 5        | Pear        | 8.00       | 5         |
      | Lychee      | 18.00     | 5        | Peach       | 19.00      | 5         |
      | Mango       | 8.00      | 5        | Papaya      | 5.00       | 5         |
      | Orange      | 9.00      | 5        | Papaya      | 5.00       | 5         |
      | Papaya      | 5.00      | 5        | Tangerine   | 8.00       | 5         |
      | Peach       | 19.00     | 5        | Avocado     | 16.00      | 3         |
      | Pear        | 8.00      | 5        | Watermelon  | 4.00       | 5         |
      | Persimmon   | 6.00      | 5        | Strawberry  | 7.00       | 5         |
      | Pineapple   | 4.00      | 5        | Pear        | 8.00       | 5         |
      | Pomegranate | 19.00     | 5        | Persimmon   | 6.00       | 5         |
      | Strawberry  | 7.00      | 5        | Papaya      | 5.00       | 5         |
      | Tangerine   | 8.00      | 5        | Pomegranate | 19.00      | 5         |
      | Watermelon  | 4.00      | 5        | Orange      | 9.00       | 5         |



#  @addingMultipleFruits_toxic
#  Scenario: Updating summary with multiple fruits
#
#    When  I add "21" to the cart
#    * I go to summary page
#    * the total "Price" should be "201"
#    * the total "Quantity" should be "201"
#    * I delete "21" items using the delete button
#    * the total "Price" should be "0"
#    * the total "Quality" should be "0"


