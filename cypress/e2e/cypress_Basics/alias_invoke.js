///<reference types="Cypress"/>

describe("alias and invoke methods ", () => {
  it("Validating the product text using Alias and invoke methods", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(`a[href*='product/category&path=']`).contains("Hair Care").click();
    cy.get(`.fixed`).eq(2).invoke(`text`).as(`productText`);
    cy.get(`@productText`).should(
      "include",
      "Eau Parfumee au The Vert Shampoo"
    );
    cy.get(`@productText`).should("have.length.above", 8); //using @productText from 1st test using alias
  });

  it.only("Validating number of Products using alias and invoke methods", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(`div.thumbnail`).as("totalProducts");
    cy.get(`@totalProducts`).should("have.length", 16);
    //validating the product as add to cart
    cy.get(`@totalProducts`)
      .find(`.productcart`)
      .invoke("attr", "title")
      .should("be.equal", "Add to Cart");
  });
});
