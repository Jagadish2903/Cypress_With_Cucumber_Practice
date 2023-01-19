///<reference types="Cypress"/>


import LoginPage from "../TestHenryPageObjects/LoginPage";

//const lp = new LoginPage(); //Create LoginPage object

describe('TestHenryProject Session', function () {

    before(function () {
        //runs before all the it blocks
        cy.fixture('TestData.json').then(function (data) {
            this.data = data; // to access the data and make it as a globally available object
        })
    })


    it('Testing Login Page with Valid credentials', function () {

        LoginPage.openQAPortal() //Navigating to the URl

        //validating the LoginPage has forgotPasswordlink
        LoginPage.isForgotPasswordLinkExist().then(function (element) {
            const actualTxt = element.text()
            expect((actualTxt).includes(this.data.LoginPageForgotpwdLink)).to.be.true
        })

        //Passing the Credentials and login
        LoginPage.setUserName(this.data.UserName)
        LoginPage.setPassword(this.data.Password)
        LoginPage.Login()

        //Validating the Credentials
        LoginPage.verifysuccessfulLogin().should('have.text', this.data.SuccessLogin)
        cy.url().should('be.equal', this.data.HomePageUrl) //Validating the HomePage URL

    });






})

