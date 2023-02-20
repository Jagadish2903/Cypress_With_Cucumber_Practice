import BasePage from "./BasePage";
import { loginPage } from "./LoginPage";



class HomePage  extends BasePage{
  //page Objects (or) element locators (or) WebELements
  headerText = `div h2`;
  menuOptions = "div .css-tile-name";
  UserManagementOption = `//div/span[text()='USER MANAGEMENT']`;
  

  getHomePageHeaderText() {
    return cy.get(this.headerText);
  }

  getmenuOptions() {
    return cy.get(this.menuOptions);
  }

  doClickUserManagement() {
    cy.xpath(this.UserManagementOption).click();
  }

  getURL() {
    return cy.url();
  }

  getHomePageTitle(){
    return cy.title();
  }

  doLogin(userName, passWord) {
    cy.get(this.username).type(userName);
    cy.get(this.password).type(passWord);
    cy.get(this.submitBtn).click();
  }
}
export default HomePage;
