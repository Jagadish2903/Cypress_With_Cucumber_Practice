///<reference types="Cypress"/>

beforeEach(function () {
  cy.visit("https://automationteststore.com/");
  cy.get(`a[href*='product/category&path=']`).contains("Hair Care").click();
});
describe("Iterating over Elements using each method ", () => {
  it("Iterating over menu options and click on Curls to straight Shampoo", () => {
    cy.selectProduct('Curls to straight Shampoo')
  });
});
