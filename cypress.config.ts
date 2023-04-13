import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "kvyh25",
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {},
  },
});
