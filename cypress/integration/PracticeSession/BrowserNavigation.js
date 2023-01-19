///<reference types="Cypress"/>

describe('Practice sessions', function () {
    it('', function () {

        //Navigating to the URL
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


        //remove the target attribute to open the site in the same tab 
        cy.get('div #opentab').invoke('removeAttr', 'target').click()

        //Navigating back 
        cy.go('back') 






    })



})