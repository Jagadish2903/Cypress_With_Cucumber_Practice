/// <reference types="Cypress" />

describe("My Amazon Test Suite", function () {
  it('My Amazon Test cases', function () {

    cy.visit('https://www.amazon.com/');
    cy.get('#twotabsearchtextbox').type("Green color formal pants");
    cy.wait(2000)

    cy.get('#nav-search-submit-button').click();
    //static one  ====    cy.get('.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16').find('div .sg-col-inner span.a-size-base-plus.a-color-base.a-text-normal').contains(`SweatyRocks Women's Casual High Waist Belted Wide Leg Pants with Pocket`).click();

    //for a dynamic one 

    cy.get(`div[data-component-type='s-search-result'] span.a-size-base-plus.a-color-base.a-text-normal`).each(($e1, index, $list) => {

      if ($e1.text().includes(`SheIn`)) {
        cy.wrap($e1).click()
      }
      // else {
      //      cy.get('.s-pagination-item.s-pagination-next.s-pagination-button.s-pagination-separator').click()
      //  }

    })



  })
})