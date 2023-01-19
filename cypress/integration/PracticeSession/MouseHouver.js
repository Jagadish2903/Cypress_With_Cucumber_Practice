///<reference types="Cypress"/>

describe('Practice Sessions', function () {
    it('Mouse Hover Testcase', function () {

        //Navigatint to the URL 
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //perform mouse hover using jquery
        cy.get('div .mouse-hover-content').invoke('show')
        //cy.contains('Reload').click()


        //Without using jquery and click on the hidden element
        cy.contains('Reload').click({force: true})










    })
    
    
    
    
    
    
    })