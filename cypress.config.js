const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://10.166.74.39",
    experimentalStudio: true,
  },
  // web browser page size and time-out
  pageLoadTimeout: 60000,
  viewportHeight: 1000,
  viewportWidth: 1600,
});
