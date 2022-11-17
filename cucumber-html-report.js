const report = require("multiple-cucumber-html-reporter");

const dayjs = require("dayjs")
//const startDate = dayjs().subtract(30, 'minute')
const startsDate = dayjs().format("MMM DD, YYYY - hh:mm:ss a")

report.generate({
    jsonDir: "cypress/reports/",  // ** Path of .json file **//
    reportPath: "cypress/reports/chrome/", // ** Path of .html file **//
    metadata:

        {   browser: {
            name: "chrome",
            version: "> 99 (64-bit)"
        },
        device: "Local Laptop i7",
        platform: {
            name: "Windows",
            version: "10"
        }
        },

    customData: {
        title: 'Run info',
        data: [
            {label: 'Project :', value: 'My project Env Checks'},
            {label: 'Release :', value: 'Q4 22'},
            {label: 'Cycle :', value: '2022 Q4'},
            {label: 'Environment :', value: 'Demo QA'},            
            {label: 'Created on: ', value: startsDate},
            {label: 'Tester :',   value: 'CEO'},
        ]
    },
    scenarioTimestamp: true,
    displayDuration: true,
    pageTitle: 'Test Environments Report - Chrome',
    reportName: 'Automation Test Environments Report - Chrome',
    openReportInBrowser: true

});