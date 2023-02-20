Feature:Login Feature

    Application Regression Testing


    Scenario: Login Page Title
        Given User navigates to the login page
        When User gets the title of the login page
        Then Page Title should be "Henry Company"


    Scenario: isForgotPassword link exists
        Given User navigates to the login page
        Then forgot password link should exist



    Scenario Outline: Login Functionality Validation
        Given User navigates to the login page
        When User enters the Username and Password
        And Click on the Login button
        Then User is successfully logged in to the application
        And User should be presented with henry dashboard
        And User should see all the Menu Options
        Then User clicks Log out




