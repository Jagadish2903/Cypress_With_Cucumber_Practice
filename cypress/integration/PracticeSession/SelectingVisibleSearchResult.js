/// <reference types="Cypress" />


describe('My First Test Suite', function () {

    it('My First Test case', function () {

        //Navigating to the URL
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

        //Passing the search value
        cy.get('input.search-keyword').type('Cu');
        cy.wait(2000);

        //validating the visible search results 
        cy.get('div .product:visible').should('have.length', '2');
    })
})