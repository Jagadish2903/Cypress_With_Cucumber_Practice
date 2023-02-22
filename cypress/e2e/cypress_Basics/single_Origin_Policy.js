///<reference types="Cypress"/>

describe("Same Origin Policy", () => {
  //below test is valid since contact us is the subdomain of webdriver university
  it("Validating two domain subdomain will be successfull", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);
    cy.visit(`http://www.webdriveruniversity.com/Contact-Us/contactus.html`);
  });

  //below test is invalid and will fail since both are super domains
  it("Validating the two super domain in one test", () => {
    cy.visit(`http://www.webdriveruniversity.com/`);
    cy.visit("https://automationteststore.com/");
  });


  //validating two cross domain using Origin method
  it.only("Validating the two super domain in one test using origin method", () => {
    cy.origin('http://www.webdriveruniversity.com',()=>{
      cy.visit('/');
    })
    cy.origin("www.google.com",()=>{
      cy.visit('/');
    })
  });



});
