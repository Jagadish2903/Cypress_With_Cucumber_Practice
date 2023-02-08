Feature:Login Functionality Validation

    Application Regression Testing


    Background:
        Given User navigates to the loginPage url
        Then User check the loginPage url


    Scenario: Login with Invalid UserName
        When User enters the Valid Login Username and Password
            | Username         | Password     |
            | Test123@smc2.com | Password@567 |


    Scenario: Login with inValid Password
        When User enters the Valid Login Username and Password
            | Username             | Password     |
            | kalavathi.s@smc2.com | Passwords123 |


    Scenario: Login with inValid UserName and inValid Password
        When User enters the Valid Login Username and Password
            | Username         | Password     |
            | Test123@smc2.com | Passwords123 |


    Scenario: successful login
        When User enters the Valid Login Username and Password
            | Username             | Password     |
            | kalavathi.s@smc2.com | Password@567 |
        And Click on the Login button
        Then User is successfully logged in to the application
        Then User clicks Log out





