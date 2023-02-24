Feature: UserManagement Feature

    Background: Preconditions
        Given User should be logged in to the application

    Scenario: Navigating to User Management 
        Given User is on Home Page
        When User clicks on User Management menu
        Then User should land on UserManagement Page and presented with User List

    Scenario: Verify Add User is available 
        Then User should be presented with Add User Option

  