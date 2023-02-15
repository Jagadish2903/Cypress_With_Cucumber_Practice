    Scenario: Valid Add User form submission.
        Given User should be logged in with valid email and password
        When User Clicks on User Management option
        And User Clicks on Add User button
        And User selects the User Type
        And User enters the email
        And User enters the FirstName
        And User enters the LastName
        And User enters the Phone Number
        And User selects the Role Type 
        And User Clicks on Save button
        Then User should be presented with successful message

