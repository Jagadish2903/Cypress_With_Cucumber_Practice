///<reference types= "Cypress"/>

describe('cypress Chain Commands example', () => {
    it('inspecting list of elements in automation store site', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').contains('Absolue Eye Precious Cells').click();
    });
    it('inspecting list of elements in automation store site', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.fixed_wrapper').find('.prdocutname').contains('Acqua Di Gio Pour Homme').click();
    });
});