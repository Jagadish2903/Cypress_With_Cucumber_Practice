const { Given, Before } = require("@badeball/cypress-cucumber-preprocessor");

import BasePage from "../pages_objects/BasePage";
import LoginPage from "../pages_objects/LoginPage";

const basePage =new BasePage();
const loginPage =new LoginPage();

Before(function(){
    basePage.navigate();
})
