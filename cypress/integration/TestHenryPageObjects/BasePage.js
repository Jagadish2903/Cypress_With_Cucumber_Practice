class BasePage {

    openQAPortal(){
        return cy.visit(Cypress.env('QAUrl'))
    }
}


export default BasePage;