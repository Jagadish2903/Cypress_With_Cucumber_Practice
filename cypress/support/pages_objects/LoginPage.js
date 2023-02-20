/// <reference types="cypress-xpath" />

import BasePage from "./BasePage";




class LoginPage extends BasePage{
  //page Objects (or) element locators (or) WebELements
   username="#mat-input-0"
   password="#mat-input-1"
   submitBtn=`button[type='submit']`
   profileBtn=`.fa.fa-user-circle`
   logOutBtn= ".fa.fa-lock"
   forgotPwdLink=".col-lg-6 > .mat-focus-indicator > .mat-button-wrapper"


   setUserName() {
    cy.fixture("Config.json").then(function (data) {
     return cy.get(this.username).type(this.data.userName) // to access the data and make it as a globally available object
    });
  }


    setPassWord() {
      cy.fixture("Config.json").then(function (data) {
       return cy.get(this.username).type(this.data.passWord) // to access the data and make it as a globally available object
      });
    }

  clickSubmitBtn() {
    cy.get(this.submitBtn).click();
  }

  doLogin(){
    super.dodefaultLogin();
  }

  dologOut(){
    super.dologOut();
  }

  

  getTitle(){
    return cy.title();
  }

  isforgotPasswordlinkExist() {
   return cy.get(this.forgotPwdLink)
}
}

export default LoginPage;
