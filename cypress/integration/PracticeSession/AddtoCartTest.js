///<reference types="Cypress"/> 
describe("Practice session", function () {
    it("Ad to Cart Testcase", function () {

        //Navigating to the URL 
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        //Validating the URL
        cy.get('.brand.greenLogo').should('have.text', 'GREENKART')

        //Searching for the Product
        cy.get('.search-keyword').type('be')
        cy.wait(2000)

        //Validating the search results
        cy.get('div.products').find('.product:visible').should('have.length', '5')

        //Adding a product to the cart
        cy.get('div.products').find('.product').each(($el, index, $list) => {
            const productName = $el.find('h4.product-name').text()
            if (productName.includes('Beetroot')) {
                cy.wrap($el).find('div .increment').click()
                cy.wrap($el).find('button').click()
                cy.log('Product is found and been added to the cart')
                cy.wait(2000)
            }
        })

        // Proceeding to Checkout
        cy.get('a.cart-icon').click()
        cy.wait(2000);
        cy.contains('PROCEED TO CHECKOUT').click()

        //Placing the Order of the Product 
        cy.contains('Place Order').click()

      

        
        


    })


})
