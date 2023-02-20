import BasePage from "./BasePage";
import { loginPage } from "./LoginPage";

class HomePage extends BasePage {
  //page Objects (or) element locators (or) WebELements
  headerText = `//h2[text()='Dashboard']`;
  menuOptions = "//div[@class='css-tile-name']/span";
  UserManagementOption = `//div/span[text()='USER MANAGEMENT']`;

  getHomePageHeaderText() {
   return  cy.xpath(this.headerText)
  }

  getmenuOptions() {
    return cy.xpath(this.menuOptions)
    
  }

  doClickUserManagement() {
    cy.xpath(this.UserManagementOption).click();
  }

  getURL() {
    return cy.url();
  }

  getHomePageTitle() {
    return cy.title();
  }

  doLogin(userName, passWord) {
    cy.get(this.username).type(userName);
    cy.get(this.password).type(passWord);
    cy.get(this.submitBtn).click();
  }
}
export default HomePage;
