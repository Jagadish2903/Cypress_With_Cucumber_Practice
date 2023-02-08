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

Given("User navigates to the loginPage url", function () {
  cy.visit(Cypress.env("QAUrl"));
});

Then("User check the loginPage url", function () {
  cy.url().should("be.equal", this.data.LoginPageUrl);
});

When("User enters the Valid Login Username and Password", function (dataTable) {
  loginPage.setUserName(dataTable.rawTable[1][0]);
  loginPage.setPassword(dataTable.rawTable[1][1]);
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
