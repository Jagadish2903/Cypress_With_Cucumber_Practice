///<reference types="Cypress"/>

describe("Multiple Window Handle", () => {
  it("Validating the Contact us link", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);
    cy.get(`#contact-us`).then(($e1) => {
      cy.wrap($e1.removeAttr("target", "_blank")).click();
    });
  });

  //Another Method using invoke method
  it("Validating the Contact us link using invoke method", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);
    cy.get(`#contact-us`).invoke("removeAttr", "target").click();
  });


  });

