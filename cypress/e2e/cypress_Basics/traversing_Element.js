///<reference types="Cypress" />

describe("Traversing Element methods", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click();
  });

  it("children() - to get the childrens of DOM element (used to handle BreadCrum Links) ", () => {
    cy.get(".breadcrumb.traversal-breadcrumb")
      .children(".breadcrumb-item.active")
      .should("contain.text", "Contact Us");
  });

  it("closest() - to get the closest ancestor DOM element (used in getting to child to parent concepts) ", () => {
    cy.get(".badge.traversal-badge")
      .closest("ul")
      .should("have.class", "list-group");
  });

  it("eq() - to retrieve specific element using index (used to validate the element in the list ) ", () => {
    cy.get(".traversal-drinks-list li").eq(1).should("contain.text", "Tea");
  });

  it("filter() -used to filter a specific dom element from the list (used to validate the element in the list ) ", () => {
    cy.get(".btn-group.btn-group-toggle button")
      .filter(".btn.btn-primary.active")
      .should("have.text", "Button-1");
  });

  it("find()-Used to find the Dom elements of the given selector  (used to find the number of links in pagination ) ", () => {
    cy.get(".pagination.traversal-pagination")
      .find(".page-item")
      .should("have.length", 7);
  });

  it("first()- Used to get the First element from the list of elements  (used in dataTable Concepts ) ", () => {
    cy.get(".table.table-light.traversal-table tbody tr td")
      .first()
      .should("contain.text", "Andy");
  });

  it("last()- Used to get the last element from the list of elements  (used in dataTable Concepts ) ", () => {
    cy.get(".table.table-light.traversal-table tbody tr td")
      .last()
      .should("contain.text", "Scott");
  });

  it("nextAll()- Used to get the next all sibling element from the list  (used in list concepts/datatable ) ", () => {
    cy.get(`.traversal-drinks-list li[id="coffee"]`)
      .nextAll()
      .should("have.length", 4);
  });

  it("nextUntill() -Used to get all the next list of elements until specific element is found  (used in list concepts/datatable ) ", () => {
    cy.get(`.traversal-drinks-list li[id="coffee"]`).nextUntil("#espresso");
  });

  it("not() - used to remove the element from the set of elements  (used in list concepts/datatable ) ", () => {
    cy.get(`.traversal-button-states button`)
      .not(".btn.btn-outline-warning.disabled")
      .should("have.length", 3);
  });

  it("parent() - Used to get the parent element from the element   (used in list concepts/datatable ) ", () => {
    cy.get(`.traversal-mark`).parent().should("contain", "sit amet");
  });

  it("parent() - Used to get the parents element(grand parents) from the element   (used in list concepts/datatable ) ", () => {
    cy.get(`.traversal-cite`).parents().should("match", "blockquote");
  });

  it("parent() - Used to get the parents element(grand parents) from the element   (used in list concepts/datatable ) ", () => {
    cy.get(`.traversal-cite`).parents().should("match", "blockquote");
  });

  it("prev()- Used to get previous dom element from the element (used in list concepts/datatable concept of siblings ) ", () => {
    cy.get(`.traversal-drinks-list li[id="sugar"]`)
      .prev()
      .should("have.text", 'Espresso');
  });

  it("prevAll()- Used to get the previous all sibling element from the list  (used in list concepts/datatable ) ", () => {
    cy.get(`.traversal-drinks-list li[id="sugar"]`)
      .prevAll()
      .should("have.length", 4);
  });

  it("prevUntill() -Used to get all the previous list of elements until specific element is found  (used in list concepts/datatable ) ", () => {
    cy.get(`.traversal-drinks-list li[id="sugar"]`).prevUntil("#milk");
  });

  it.only("siblings() -Used to get all the siblings elements  (used in list concepts/datatable ) ", () => {
    cy.get(`.btn.btn-primary.active`).siblings().should('have.length',3)
  });
  

});
