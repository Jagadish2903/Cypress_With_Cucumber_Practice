///<reference types="cypress"/>

describe('Promise Handling ', () => {
    it('handling the non cypress commands by return the promise using then', () => {
        cy.visit('https://automationteststore.com/');
        cy.xpath(`//a[text()='Contact Us']`).click().then((innerHtmlText)=>{
        console.log('inner HTML text is '+  innerHtmlText.text()); //prints in console 
        cy.log(innerHtmlText.text()); //prints in cypress app
        })
})
});