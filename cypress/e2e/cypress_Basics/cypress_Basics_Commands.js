///<reference types='Cypress' />

describe('Test Contact Us form submission', () => {
    it('Navigating to the page and moving to contact us', () => {
    
        cy.visit('http://www.webdriveruniversity.com/') //to navigate to the URL
        //cy.get("#contact-us").click() //to get the webElement and click on the same
        cy.contains('CONTACT US').click()
        
    });
    it('Validating of Successful submission of the form', () => {
        cy.get(`[name='first_name']`).type('Test')
        cy.get(`[name='last_name']`).type('Jag')
        cy.get(`[name='email']`).type('Test123.com')
        cy.get(`[name='message']`).type('Hi This is my first testcase')
        cy.get(`[type='submit']`).click()
    });

    it('Validating of not successful form as fields are required', () => {
        cy.get(`[name='first_name']`).type('Test')
        cy.get(`[name='last_name']`).type('Jag')
        cy.get(`[name='message']`).type('Hi This is my first testcase')
        cy.get(`[type='submit']`).click()	 
    });
});