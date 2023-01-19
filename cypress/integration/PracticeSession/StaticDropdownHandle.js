///<reference types="Cypress"/>    
describe('Practice sessions', function () {
    it('Static dropdown practice', function () {
        //Navigating to the URL
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Selecting the dropdown option and validate whether value is selected 
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')
        cy.get('#dropdown-class-example').select('option3').should('have.value', 'option3')
    })
})