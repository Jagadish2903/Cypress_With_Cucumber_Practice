///<reference types="Cypress"/>

describe("Validate Js Alert box ", () => {
  it("validate the alert text by firing the window:alert event", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);
    cy.get(`#popup-alerts`).invoke("removeAttr", "target").click();
    cy.get(`#button1`).click();
    //validating the alert text
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });
});
