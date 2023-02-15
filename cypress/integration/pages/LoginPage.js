class LoginPage {
  //page Objects (or) element locators (or) WebELements
  elements = {
    username: () => cy.get("#mat-input-0"),
    password: () => cy.get("#mat-input-1"),
    submitBtn: () => cy.get(`button[type='submit']`),
    profileBtn: () => cy.get(`.fa.fa-user-circle`),
    logOutBtn: () => cy.get(".fa.fa-lock"),
  };

  setUserName(userName) {
    this.elements.username().type(userName);
  }

  setPassword(passWord) {
    this.elements.password().type(passWord);
  }

  clickSubmitBtn() {
    this.elements.submitBtn().click();
  }

  doLogin(userName, passWord) {
    this.elements.username().type(userName);
    this.elements.password().type(passWord);
    this.elements.submitBtn().click();
  }
  dologOut() {
    this.elements.profileBtn().click();
    this.elements.logOutBtn().click();
  }
}

export const loginPage = new LoginPage();
