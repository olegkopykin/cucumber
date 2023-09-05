Feature: User can create order via API

  Scenario Outline: We create an order and check that when sending a request to the API,
  it returns an order with the data that we sent

    Given Send a post request from the createOrder.json file using the parameters <id>, <quantity>
    When Get the order by <id>
    Then Input data <id>, <quantity>, <complete> are equal to the response data from the server
    And Send a delete request by <id> after test

    Examples:
      | id | quantity | complete |
      | 1  | 1        | false    |
      | 3  | 5        | false    |
      | 8  | 1        | false    |
