///<reference types ="Cypress"/>



// By default Cypress accepts the Pop-ups/Alerts 
// Cypress have the capability of firing browser event
//	window:alert is the event fired when alert is opened and cypress get access to the alert

describe('Practice Sessions', function () {


    it('JavaScript Popups', function () {
        //navigating to URL
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //clicking on Alert button
        cy.get('#alertbtn').click()


        // //firing browser event to validate the alert 
        cy.on('window:alert', (str) => {
            //using mocha 
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        }
        )
    })
})