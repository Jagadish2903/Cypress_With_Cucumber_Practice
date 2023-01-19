const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");



async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: 'edjjgw',
  env:{
    QAUrl : "https://qaportal.henry.com/login"
  },

  e2e: {
    setupNodeEvents, //calling from the above code 
    specPattern: "**/*.feature",
    supportFile: false,
    //specPattern: 'cypress/integration/PracticeSession/*.js',
   //specPattern: 'cypress/integration/TestHenryFramework/*.js', 
   specPattern: 'cypress\integration\BDDFramework\TestHenryFeature\*.feature', //using BDD
    projectId: "edjjgw",
    retries: {
      runMode: 1,
      openMode: 0,
      }
    
  },
 
}); 
