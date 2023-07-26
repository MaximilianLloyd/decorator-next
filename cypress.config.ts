import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.IS_OLD
      ? "https://nav.no/dekoratoren"
      : "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
