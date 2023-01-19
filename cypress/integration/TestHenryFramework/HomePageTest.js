///<reference types="Cypress"/>
import HomePage from "../TestHenryPageObjects/HomePage";
import LoginPage from "../TestHenryPageObjects/LoginPage";

describe('TestHenryProject Session', function () {
    before(function () {
        //runs before all the it blocks
        cy.fixture('TestData.json').then(function (data) {
            this.data = data; // to access the data and make it as a globally available object
        })
    })

    beforeEach(function () {
        //runs before all the it blocks
        HomePage.openQAPortal()
        LoginPage.setUserName(this.data.UserName)
        LoginPage.setPassword(this.data.Password)
        LoginPage.Login()
    })



    it('Testing Login Page with Valid credentials', function () {

        //Validating User is Logged in 
        HomePage.getHomePageOptions().should('have.length', 7).then(function (element) {
            cy.log('You are in Homepage')
        })


    










    })

})