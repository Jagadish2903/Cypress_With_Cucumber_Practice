/// <reference types="cypress-xpath" />
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../pages_objects/HomePage";
import LoginPage from "../pages_objects/LoginPage";

const homePage = new HomePage();
const loginPage = new LoginPage();


Given("User should be logged in to the application", function () {
 loginPage.doLogin();
  });

Then("User should be presented with henry dashboard", () => {
  homePage
    .getHomePageHeaderText()
    .should("have.text", "Dashboard")
    .then(() => {
      cy.log("Dashboard");
    });
});

Then("User should see all the Menu Options", () => {
  homePage
    .getmenuOptions()
    .should("have.length", 8)
    .then(function (element) {
      cy.log("All menuOptions are available");
    });

   

  Given("User is on Home Page", function () {
    homePage.getURL().should("be.equal", this.data.HomePageUrl);
  });

  When("User gets the HomePage Title", function () {
    homePage.getHomePageTitle().should("be.equal", this.data.HomePageTitle);
  });

  Then("Title should be equal to HomePageTitle", function () {
    homePage.getHomePageTitle().should("be.equal", this.data.HomePageTitle);
  });
});
