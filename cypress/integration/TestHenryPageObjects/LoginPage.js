///<reference types="Cypress"/>

import BasePage from "./BasePage"



class LoginPage extends BasePage{

    //Page locators
    forgotpwdlinktext = `//span[text()=' Forgot password? ']`
    rememberMeCheckbox = `input[name='isRemberMeChecked']`
    userName = '#mat-input-0'
    password = `input[type='password']`
    loginButton = `button[type='submit']`
    loginsuccessText = 'div h2'


    //Page Objects with Actions
    // openQAPortal() {
    //     cy.visit(Cypress.env('QAUrl'))
    // }


    isForgotPasswordLinkExist() {
        return cy.xpath(this.forgotpwdlinktext)
    }

    isRememberMeExist() {
        return cy.get(this.rememberMeCheckbox)
    }

    setUserName(value) {
        const field = cy.get(this.userName)
        field.clear().type(value)
        return this;
    }

    setPassword(value) {
        const field = cy.get(this.password)
        field.clear().type(value)
        return this;
    }

    Login() {
        
        return cy.get(this.loginButton).click()
        // return new Homepage(LoginPage)
    }

    verifysuccessfulLogin() {
        return cy.get(this.loginsuccessText)
    }



}
export  default new LoginPage();