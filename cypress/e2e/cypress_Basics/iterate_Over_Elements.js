///<reference types="Cypress"/>

describe("Iterating over Elements using each method ", () => {
  it("Iterating over menu options and click on Curls to straight Shampoo", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(`a[href*='product/category&path=']`).contains("Hair Care").click();
    cy.get(".fixed").each(($e1, index, $list) => {
      cy.log("index of " + index + " is" + $e1.text());
      if ($e1.text().includes("Curls to straight Shampoo")) {
        cy.wrap($e1).click();
      }
    });
  });

  it("Iterating over menu options and click on to userManagement", () => {
    cy.visit("https://qaportal.henry.com/login");
    cy.xpath(`//input[@id='mat-input-0']`).type(`kalavathi.s@smc2.com`);
    cy.xpath(`//input[@id='mat-input-1']`).type("Password@567");
    cy.get(`button[type='submit'] .mat-button-wrapper`).click();
    cy.wait(4000);
    cy.get(`div div.css-tile-name span`).each(($e1, index, $list) => {
      cy.log("The index of Menu option:" + index + " " + "is" + " " + $e1.text());
      if ($e1.text().includes("USER MANAGEMENT")) {
        cy.wrap($e1).click();
      }
      else{
        cy.log('Menu Option is not available')
      }
    });
  });
});
