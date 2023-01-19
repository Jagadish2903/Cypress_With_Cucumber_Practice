///<reference types="Cypress"/>



describe('Practice Session', function () {

    before(function () {
        //runs before all the it blocks
        cy.fixture('TestData').then(function (data) {
            this.data = data; // to access the data and make it as a globally available object
        })
    })

    it('Testing Login Page with Valid credentials', function () {
        cy.visit(Cypress.env('QAUrl')) //Navigating to the URl

        //Entering Credentials and Login
        // cy.get('#mat-input-0').type(this.data.UserName)
        // cy.get(`input[type='password']`).type(this.data.Password)
        // cy.get(`button[type='submit']`).click()

        //Using the Cypress Customize Commands 
        cy.loginAs(this.data.UserName, this.data.Password)

        //Validating User is Logged in 
        cy.get('div .css-tile-name').should('have.length', 7).then(function (element) {
            cy.log('You are in Homepage')
        })


    })

})

