import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from "..../TestHenryPageObjects/LoginPage";

//N:b AND is depricated from Cucumber so use When 

Given('User is in the Login Page', () => {
    cy.visit(Cypress.env('QAUrl'))
})

When('User enters the Valid Login Username', () => {
    LoginPage.setUserName(this.data.UserName)
})

When('User enters the Valid Login Password', () => {
    LoginPage.setPassword(this.data.password)
})

When('Click on the Login button', () => {
    cy.get(`button[type='submit']`).click()

})

Then('User is successfully logged in to the application', () => {
    cy.url().should('be.equal', this.data.HomePageUrl) //Validating the HomePage URL
})