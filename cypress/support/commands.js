// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --



// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('doLogin', (email, password) => {
cy.get('#mat-input-0').type(email)
        cy.get(`input[type='password']`).type(password)
        cy.get(`button[type='submit']`).click()
})



Cypress.Commands.add('selectProduct',(productName)=>{
        cy.get(".fixed a").each(($e1, index, $list) => {
                //cy.log("index of " + index + " is" + $e1.text());
                if ($e1.text().includes(productName)) {
                  cy.wrap($e1).click();
                }
        });
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//

//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })