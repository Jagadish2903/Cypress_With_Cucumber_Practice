///<reference types="Cypress"/>

describe("CheckBox Handle", () => {
  it("Check and Uncheck Single and Multiple Checkboxes", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);

    cy.get(`#dropdown-checkboxes-radiobuttons`)
      .invoke("removeAttr", "target")
      .click();
    //checking single box
    cy.xpath(`//input[@value='option-1']`).check().should("be.checked");
    //checking multiple boxes
    cy.xpath(`//input[@type='checkbox']`)
      .check(["option-1", "option-2"])
      .should("be.checked");
    //uncheck the single checkbox
    cy.xpath(`//input[@value='option-1']`).uncheck().should("not.be.checked");
    //uncheck the multiple checkboxes
    cy.xpath(`//input[@type='checkbox']`)
    .uncheck(["option-3", "option-2"])
    .should("not.be.checked"); 
  });
});
