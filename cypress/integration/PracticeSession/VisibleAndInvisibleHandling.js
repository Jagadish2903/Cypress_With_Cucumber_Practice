///<reference types ="Cypress" />

describe('Practice sessions', function () {
    it('Visible and invisible practice', function () {


        //Navigating to URL 
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //clicking on show button 
        cy.get('#show-textbox').click()

        //validating whether element is visible
        cy.get('#displayed-text').should('be.visible')

        //clicking on hide button 
        cy.get('#hide-textbox').click()

        //validating whether element is visible
        cy.get('#displayed-text').should('not.be.visible')

        //
    })
})