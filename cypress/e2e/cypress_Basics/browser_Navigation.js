/// <reference types="Cypress"/>

describe("Validate Browser Navigation links", () => {
  it("Naviagate forward relaod back ", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);
    cy.get(`#contact-us`).invoke("removeAttr", "target").click();
    cy.url().should("include", "contactus");
    cy.go("back");
    cy.url().should("include", "webdriveruniversity.com");
    cy.reload();
    cy.go("forward");
  });
});
