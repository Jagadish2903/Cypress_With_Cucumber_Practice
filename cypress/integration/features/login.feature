Feature:Login Functionality Validation

    Application Regression Testing



    Scenario Outline: Login Functionality Validation
        Given User navigates to the login page
        When User enters the '<Username>' and '<Password>'
        And Click on the Login button
        Then User is successfully logged in to the application
        Then User clicks Log out

        Examples:
            | Username             | Password     |
            | kalavathi.s@smc2.com | Password@567 |

