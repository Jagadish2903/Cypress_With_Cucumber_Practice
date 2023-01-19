Feature: Login to the Application

    Application Regression Testing

    Scenario: Login with valid credentials
        Given User is in the Login Page
        When User enters the Valid Login Username
        And User enters the Valid Login Password
        And Click on the Login button
        Then User is successfully logged in to the application
        


