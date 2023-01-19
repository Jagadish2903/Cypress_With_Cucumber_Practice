///<reference types="Cypress"/>

describe('Practice Sessions', function () {

    it('ChildWindow Practice', function () {
        //Navigating the URL
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Removing the target attribute to avoid the site being opened in new tab
        cy.get('#opentab').invoke('removeAttr', 'target').click()


    })
})