///<reference types="Cypress"/>

import { expect } from "chai";

describe("Dynamic Dropdown/AutoComplete handle ", () => {
  it("handle dropdown using each command", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);
    cy.get(`#autocomplete-textfield`).invoke("removeAttr", "target").click();
     cy.get("#myInput").as('dropdownfield')
     cy.get('@dropdownfield').type('g')
     cy.get(`#myInputautocomplete-list div`).each(($e1, index, list) => {
        const text = $e1.text().toLowerCase();
        if (text === "grapes") {
          cy.wrap($e1).click();
        }
       
      });

    cy.get('@dropdownfield').should('have.value','Grapes')
    cy.get('#submit-button').click()
    cy.url().should('include','Grapes')

  });
});
