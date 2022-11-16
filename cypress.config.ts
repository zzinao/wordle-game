import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

// "baseUrl": "http://localhost:3000",
// "integrationFolder": "src/cypress/integration",
// "fixturesFolder": "src/cypress/fixtures",
// "supportFile": "src/cypress/support/index.js",
// "pluginsFile": "src/cypress/plugins/index.js"
