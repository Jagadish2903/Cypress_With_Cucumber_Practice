///<reference types="Cypress"/>

describe('Practice sessions', function () {

    it('Dynamic dropdown practice', function () {

        //navigating to the URL
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //passing some word in the dropdown field
        cy.get('input#autocomplete').type('ind')

        //Iterating through the result and get it selected
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            if ($e1.text() === 'India') {
                cy.wrap($e1).click()
            }
        })
        //validate whether it has the selected value
        cy.get('input#autocomplete').should('have.value', 'India')

        //To clear the value in the text box
        cy.get('input#autocomplete').clear()

        //To Reselect the value in the text box
        cy.get('input#autocomplete').type('Bra')
        cy.wait(2000)
        cy.get('.ui-menu-item div').each(($e2, index, $list) => {
            if ($e2.text() === 'Brazil') {
                cy.wrap($e2).click()
            }
        })

        //to validate whether the value is correct
        cy.get('input#autocomplete').should('have.value', 'Brazil')
    })
})