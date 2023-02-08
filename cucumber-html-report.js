const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./cypress/CucumberReports",
    reportPath: "cypress/CucumberReports/CucumberReports.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "60",
        },
        device: "Local Test",
        platform: {
            name: "Windows",
            version: "16.04",

        },
       

        
    },
    customData: {
        title: "Run info",
        data: [
            { label: "Project", value: "Henry Project" },
            {label: "Environment Used", value: "QA Portal"},
            { label: "Release", value: "1.2.3" },
            { label: "Execution Start Time", value:"" },
            { label: "Execution End Time", value: ""},
        ],
    },
});