///<reference types="Cypress"/>

describe('Practice Session', function(){

it('ChildWindow Handle',function(){

    //Navigating to the Url
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

// 1st method if target link is present we can use the below method:
      //  cy.get('#openwindow').invoke('remove Attr','target').click()


      // 2nd method if target link is not present we can use the below method but not recommended if domain is different

      cy.xpath(`//button[@id='openwindow']`).then(function(e1){
        const url=e1.prop('href')
        cy.log(url)
       // cy.visit(url)
      })
})



})