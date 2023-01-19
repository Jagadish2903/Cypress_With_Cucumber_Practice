/// <reference types="Cypress" />


describe('My First Test Suite', function () {

    it('My First Test case', function () {

        //Naviagting to the URL
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Validating 
        cy.get('.radioButton').should('have.length', 3);
        cy.get('#radio-btn-example').find('.radioButton').eq(1).click();
    })
})