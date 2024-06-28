const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "u33rj6",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
      reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: true,
      html: true,
      json: false,
      timestamp: "ddmmyyyy_HHMMss"
    },
  },
});
