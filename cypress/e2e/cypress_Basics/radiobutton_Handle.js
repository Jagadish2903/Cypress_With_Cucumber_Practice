///<reference types="cypress"/>

describe("Verify Radiobutton ", () => {
  it("Check and uncheck radiobutton handle", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);

    cy.get(`#dropdown-checkboxes-radiobuttons`)
      .invoke("removeAttr", "target")
      .click();
    //passing value
    cy.xpath(`//input[@type='radio']`).check("yellow").should("be.checked");
    //using index
    cy.xpath(`//input[@type='radio']`).eq(1).check().should("be.checked");
  });
});
