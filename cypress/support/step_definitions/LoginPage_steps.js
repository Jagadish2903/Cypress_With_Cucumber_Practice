import {
  When,
  Then,
  Given,
  DataTable,
} from "@badeball/cypress-cucumber-preprocessor";

import BasePage from "../pages_objects/BasePage";
import LoginPage from "../pages_objects/LoginPage";

const basePage = new BasePage();
const loginPage = new LoginPage();

beforeEach(() => {
  cy.fixture("Config.json").then(function(data) {
    this.data = data; // to access the data and make it as a globally available object
  });
});

//N:b AND is depricated from Cucumber so use When

Given("User navigates to the login page", function () {
  basePage.navigate();
});

When("User enters the Username and Password", function () {
 loginPage.setUserName();
 loginPage.setPassword();
});

When("Click on the Login button", function () {
  loginPage.clickSubmitBtn();
});

Then("User is successfully logged in to the application", function () {
  cy.url().should("be.equal", this.data.HomePageUrl); //Validating the HomePage URL
});

Then("User clicks Log out", function () {
  loginPage.dologOut();
});

When("User gets the title of the login page", function () {
  loginPage.getTitle();
});

Then(`Page Title should be "Henry Company"`, function () {
  loginPage.getTitle().should("be.equal", this.data.LoginPageTitle);
});

Then(`forgot password link should exist`, function () {
  loginPage.isforgotPasswordlinkExist().should("be.visible");
});
