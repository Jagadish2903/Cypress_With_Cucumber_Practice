import { expect } from "chai";
import UserManagementPage from "../pages_objects/UserManagement";
import {
  When,
  Then,
  Given,
  DataTable,
} from "@badeball/cypress-cucumber-preprocessor";

const userManagementPage = new UserManagementPage();

When("User clicks on User Management menu", () => {
  cy.wait(1000);
  userManagementPage.doclickUserManagement();
});
Then(
  "User should land on UserManagement Page and presented with User List",
  () => {
    userManagementPage.getUserListHeader().should("contain.text", "User List");
  }
);


Then("User should be presented with Add User Option", () => {

userManagementPage.getaddUser().should("contain.text", "Add User");
})
