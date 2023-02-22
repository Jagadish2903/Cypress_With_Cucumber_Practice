///<reference types="Cypress"/>

describe('Static Dropdown handle ', () => {
    it('handle dropdown using select command', () => {
        cy.visit(`http://www.webdriveruniversity.com/`);

        cy.get(`#dropdown-checkboxes-radiobuttons`)
          .invoke("removeAttr", "target")
          .click();
          //based on attribute value
        cy.get(`#dropdowm-menu-1`).select('python').should('have.value','python')
        //based on text
        cy.get(`#dropdowm-menu-1`).select('SQL').should('have.value','sql')
    });
});