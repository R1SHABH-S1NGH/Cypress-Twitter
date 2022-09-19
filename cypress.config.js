const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q6cd5g',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/Integration/examples/*.js',
    "reporter": "mochawesome"
  },
});
