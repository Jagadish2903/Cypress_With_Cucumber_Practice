///<reference types="Cypress"/>

import { expect } from "chai";

describe("Handle Mouse Actions ", () => {
  it("I want to scroll into view onto the particular element ", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);
    cy.get(`#actions`).invoke("removeAttr", "target").click();
    cy.get(`#double-click`).scrollIntoView();
  });

  it("I want to drag and drop the draggable element ", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);
    cy.get(`#actions`).invoke("removeAttr", "target").click();
    cy.get(`#draggable`).trigger("mousedown", { which: 1 });
    cy.get(`#droppable`)
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });

  it("I want to double click an element ", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);
    cy.get(`#actions`).invoke("removeAttr", "target").click();
    cy.get(`#double-click`).dblclick();
  });

  it("I want to click and hold", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);
    cy.get(`#actions`).invoke("removeAttr", "target").click();
    cy.get(`#click-box`).trigger("mousedown", { which: 1 });
  });
});
