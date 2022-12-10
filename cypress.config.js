const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '1cevbf',
  retries: {
    runMode: 0,
    openMode: 0,
  },
  video: false,
  screenshotOnRunFailure: false,
  experimentalFetchPolyfill: false,
  defaultCommandTimeout: 3000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    experimentalSessionAndOrigin: false,
    specPattern: 'cypress/e2e/**/*.feature',
  },
})
