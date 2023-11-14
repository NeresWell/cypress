const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://10.166.74.39",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      userName: "admin",
      password: "sigadex123",
      assinaturaEletronica: "sigadex1234",
    }
  },
  // web browser page size and time-out
  pageLoadTimeout: 60000,
  viewportHeight: 1000,
  viewportWidth: 1600,
});
