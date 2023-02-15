import {
  When,
  Then,
  Given,
  DataTable,
} from "@badeball/cypress-cucumber-preprocessor";

import { loginPage } from "../pages/LoginPage";

beforeEach(function () {
  cy.fixture("TestData.json").then(function (data) {
    this.data = data; // to access the data and make it as a globally available object
  });
});

//N:b AND is depricated from Cucumber so use When

Given("User navigates to the login page", function () {
  cy.visit(Cypress.env("QAUrl"));
});

When("User enters the {string} and {string}", function (username, password) {
  loginPage.setUserName(username);
  loginPage.setPassword(password);
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
