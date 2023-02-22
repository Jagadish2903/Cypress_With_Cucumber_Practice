///<reference types="Cypress"/>

describe("Handle File Upload ", () => {
  it("I want to upload a file ", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);
    cy.get(`#file-upload`).invoke("removeAttr", "target").click();
    cy.get(`#myFile`).selectFile("cypress/fixtures/Test123.txt");
    cy.get(`#submit-button`).click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Your file has now been uploaded!");
    });
  });

  it("I want to upload no file", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);
    cy.get(`#file-upload`).invoke("removeAttr", "target").click();
    cy.get(`#submit-button`).click();
    cy.on("window:alert",(str) => {
      expect(str).to.equal("You need to select a file to upload!");
    });
  });
});
