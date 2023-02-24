///<reference types="Cypress"/>

describe('Mocha Test Hooks Example ', () => {
    before(() => {
        cy.log('Executes before all test blocks')
    });
    after(() => {
        cy.log('Executes after all test blocks')
    });

    beforeEach(() => {
        cy.log('Executes before each test blocks')
    });

    afterEach(() => {
        cy.log('Executes after each test blocks')
    });

    it('TestCase1', () => {
        cy.log('1st Test Case')
    });
    it('TestCase2', () => {
        cy.log('2nd Test Case')
    });
});