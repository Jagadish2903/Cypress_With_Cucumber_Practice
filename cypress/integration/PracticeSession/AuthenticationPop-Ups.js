///<reference types ="Cypress"/>



// By default Cypress accepts the Pop-ups/Alerts 
// Cypress have the capability of firing browser event
//	window:confirm is the event fired when alert is opened and cypress get access to the alert

describe('Practice Sessions', function () {


    it('JavaScript Popups', function () {
        //navigating to URL
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //clicking on Confirm button
        cy.get('#confirmbtn').click()


        //firing browser event to validate the alert 
        cy.on('window:confirm', (str) => {
            //using mocha 
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        }
        )
    })
})