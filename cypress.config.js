 const { defineConfig } = require("cypress");

 module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    retries:2,
    viewportHeight:1920,
    viewportWidth:1080,
    setupNodeEvents(on, config) {
  },
}, 
})
  