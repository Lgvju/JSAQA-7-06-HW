const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {},
    baseUrl: "http://localhost:3000",
    viewportWidth: 360,
    viewportHeight: 740,
    retries: 1,
  },
});