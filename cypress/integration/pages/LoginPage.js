

class LoginPage{
  //page Objects (or) element locators
  elements = {
    username:()=> cy.get("#mat-input-0"),
    password:()=> cy.get("#mat-input-1"),
    submitBtn: ()=> cy.get(`button[type='submit']`),
    profileBtn: ()=>cy.get(`.fa.fa-user-circle`),
    logOutBtn: ()=> cy.get('.fa.fa-lock')
  };

  constructor(userName,passWord){
this.userName = userName;
this.passWord = passWord;
this.doLogin=true;
  }

   setUserName(userName) {
   this.elements.username().type(userName);
  }

 setPassword(passWord) {
    this.elements.password().type(passWord);
  }

   clickSubmitBtn(){
    this.elements.submitBtn().click();
  
  }

   doLogin(userName, passWord) {
    this.elements.username().clear().type(userName);
    this.elements.password().clear().type(passWord);
    this.elements.submitBtn().click();
    
  }
  dologOut(){
    this.elements.profileBtn().click();
    this.elements.logOutBtn().click();
  }
};




 export const loginPage = new LoginPage();
