///<reference types="Cypress"/>

describe("Validate Js ConfirmBox ", () => {
    it("validate the Confirm dialog by firing the window:confirm event and click on confirm button", () => {
      cy.visit(`http://www.webdriveruniversity.com/`);
      cy.get(`#popup-alerts`).invoke("removeAttr", "target").click();
      cy.get(`#button4`).click();
      //validating the alert text
      cy.on("window:confirm", (str) => {
        return true; //to press ok button
        //return false; //to press cancel button
      });

      cy.get(`#confirm-alert-text`).should('have.text','You pressed OK!')
    });
  });
  
  