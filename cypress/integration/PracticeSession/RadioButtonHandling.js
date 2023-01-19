///<reference types="Cypress"/>

describe('Practice Sessions', function () {
    it('RadioButton Practice', function () {

        //Naviagting to URl
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Selecting radio button using Click Method
        cy.get('input[value="radio2"]').click()

        //Selecting radio button using Check Method
        cy.get('input[value="radio3"]').check().should('be.checked')


    })




})