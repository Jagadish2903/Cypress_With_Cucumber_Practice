///<reference types="Cypress"/>

describe('My Practice sessions', function () {
    it('Checkbox handling practice', function () {
        //To navigate to the URL
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //To Check the Checkbox and validate it is checked
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        //To Uncheck the Checkbox and validate it is unchecked
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')

        //To select all the Checkbox(identify the common property and use the css)
        cy.get('#checkbox-example input[type= checkbox]').check().should('be.checked')

        //To unselect all the Checkbox(identify the common property and use the css)
        cy.get('#checkbox-example input[type= checkbox]').uncheck().should('not.be.checked')

        //To Multiple select checkbox (identify the common property and use the css and pass the attribute value as an argument)
        cy.get('#checkbox-example input[type= checkbox]').check(['option2', 'option3'])

        //To Multiple unselect checkbox (identify the common property and use the css and pass the attribute value as an argument)
        cy.get('#checkbox-example input[type= checkbox]').uncheck(['option2', 'option3', 'option1'])

    })
})
