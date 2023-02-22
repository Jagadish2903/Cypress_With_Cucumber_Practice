///<reference types="Cypress"/>

import "cypress-iframe";

describe("Handle frames by using alias commands", () => {
  it("handle the frames and click the element & validate text from modal popup", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);
    cy.get("#iframe").invoke("removeAttr", "target").click();

    cy.get(`#frame`).then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });
    cy.get("@iframe").find("#button-find-out-more").click();
    cy.get("@iframe").find("#myModal").as("modal");
    //Asserting the text
    cy.get("@modal").should(($expectedText) => {
      const text = $expectedText.text();
      expect(text).includes("Welcome to webdriveruniversity.com");
    });

    //closing the modal
    cy.get("@modal").contains("Close").click();
  });
});
