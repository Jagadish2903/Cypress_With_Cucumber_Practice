const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";



async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));
  allureWriter(on, config);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  projectId: 'edjjgw',
  env: {
    allureReuseAfterSpec: true,
    allure: true,
    allureResultsPath: "cypress/allureResults",
    QAUrl: "https://qaportal.henry.com/login",
    stepDefinitions: [
      "cypress/support/step_definitions/*.js"
    ]
   


  },

  e2e: {
    //specPattern: 'cypress/e2e/features/*.feature', //using BDD
    specPattern: 'cypress/e2e/**/*.{js,jsx,feature}',
    
    setupNodeEvents, //calling from the above code 
   // supportFile: false,
   chromeWebSecurity:false,
   experimentalModifyObstructiveThirdPartyCode:true,

    projectId: "edjjgw",
    retries: {
      runMode: 1,
      openMode: 0,
    },





  },



}); 
