///<reference types='Cypress'/>

describe('TestHenry ', function () {

    it('Case1', function () {

        //Navigating to URL
        
        cy.visit(Cypress.env('QAUrl'))


        //Entering Credentials 
        cy.get('#mat-input-0').type('kalavathi.s@smc2.com')
        cy.get(`input[type='password']`).type('Password@567')
        cy.get(`button[type='submit']`).click()

        //validating whether home page is loaded 
        cy.get('div h2').should('have.text', 'Dashboard')
        cy.log('The user is in HomePage')


        //Creating a new User 

        cy.xpath(`//span[text()='USER MANAGEMENT']`).click()
        // cy.get(':nth-child(2) > [style="padding: 16px;"]').click()

        cy.xpath(`//div/button/span[text()=' Add User ']`).click()
        //cy.get('.ml-auto > :nth-child(1) > .mat-button-wrapper').click()
        cy.get('#user_type').click().get('.mat-option-text').contains('Internal User').click()
        cy.get('#Email').type('Testjaggu123457@gmail.com')
        cy.get('#first_name').type('Test')
        cy.get('#last_name').type('Henry')
        cy.get('#phone_number').type('0125678766')

        cy.get('.mat-select-placeholder').click().get('.mat-option-text').contains('Accounting').click()
        cy.get(`button[type='submit']`).click()
        cy.wait(2000)

        //validate existing User is created
        cy.get('div.alert.alert-danger.alert-dismissible.ng-star-inserted').invoke('text').should('contain', 'already exists!')



    })

})

