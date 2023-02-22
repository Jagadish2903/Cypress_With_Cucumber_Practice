/// <reference types="cypress"/>

describe("Automation Test Store Contact-us validation", () => {
  it("should have successfull completion of Contact us form ", () => {
    cy.visit("https://automationteststore.com/");
    cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "automation skills");
    cy.xpath(`//a[text()='Contact Us']`).click();
    cy.url().should("include", "contact");
    cy.xpath(`//input[@id='ContactUsFrm_first_name']`).type("Jagadish");
    cy.xpath(`//input[@id='ContactUsFrm_email']`).type("Test123@gmail.com");
    cy.xpath(`//textarea[@id='ContactUsFrm_enquiry']`).type(
      "Do you have Lapstops for offer?"
    );
    cy.xpath(`//button[@title='Submit']`).click();
    cy.get("div .contentpanel section :nth-child(3)").should(
      "contain.text",
      "successfully"
    );
    console.log("Test Finished");
    
    cy.log("Test Finished");
  });
});
