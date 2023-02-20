/// <reference types="cypress"/>





describe('Automation Test Store Contact-us validation', () => {
    it('should have successfull completion of Contact us form ', () => {
        cy.visit('https://automationteststore.com/')
        cy.xpath(`//a[text()='Contact Us']`).click()
        cy.xpath(`//input[@id='ContactUsFrm_first_name']`).type('Jagadish')
        cy.xpath(`//input[@id='ContactUsFrm_email']`).type('Test123@gmail.com')
        cy.xpath(`//textarea[@id='ContactUsFrm_enquiry']`).type("Do you have Lapstops for offer?")
        cy.xpath(`//button[@title='Submit']`).click();

    });
});