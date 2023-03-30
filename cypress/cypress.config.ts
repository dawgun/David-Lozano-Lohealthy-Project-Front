import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    defaultCommandTimeout: 15000,
    requestTimeout: 15000,
  },
});
