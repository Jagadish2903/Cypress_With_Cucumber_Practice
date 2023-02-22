///<reference types="Cypress"/>

describe("Validate Js ConfirmBox using Stub method", () => {
  it("confirm the JavaScript alert using stub", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);
    cy.get(`#popup-alerts`).invoke("removeAttr", "target").click();
    const stub = cy.stub();
    cy.on("window:confirm", stub);
    cy.get(`#button4`)
      .click()
      .then(() => { //using stub 
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => { //confirm the alert 
        return true;
      })
      .then(() => { //validating the alert text
        cy.get(`#confirm-alert-text`).should("have.text", "You pressed OK!");
      });
  });
});
