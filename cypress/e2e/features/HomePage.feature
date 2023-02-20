Feature: HomePage Feature

    Background: Preconditions
        Given User should be logged in to the application

    Scenario: HomePage Title
        Given User is on Home Page
        When User gets the HomePage Title
        Then Title should be equal to HomePageTitle

    Scenario: HomePage Header
        Given User is on Home Page
        Then User should be presented with henry dashboard


    Scenario: HomePage MenuOptions
        Given User is on Home Page
        Then User should see all the Menu Options




