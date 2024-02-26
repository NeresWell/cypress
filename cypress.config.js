const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://10.166.74.39",
    spedLegado: 'http://10.166.192.136',
    urlMI: "https://dev-sped30-integrador.devk8s.apps.eb.mil.br",
    experimentalStudio: true,
  },
  // web browser page size and time-out
  pageLoadTimeout: 60000,
  viewportHeight: 1000,
  viewportWidth: 1600,
});
