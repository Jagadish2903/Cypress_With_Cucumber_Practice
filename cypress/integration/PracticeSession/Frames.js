///<reference types="Cypress"/>
////<reference types="Cypress-iframes"/>
import "cypress-iframe"

describe('Practice Session',function() {
    
 it('Frame Testcase',function() {
    
    //Navigating to the URL
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    //loading the frames in the page 
    cy.frameLoaded('#courses-iframe')

    //To switch to the frame and perform the actions
    cy.iframe().find('a[href*="mentorship"]').eq('0').click()

    //validating the frame 
    cy.iframe().find('.bg-pattern-1 h1').should('have.length','2')
    
    
 })   
    
})