import { defineConfig } from 'cypress';
import { GenerateCtrfReport } from 'cypress-ctrf-json-reporter';

export default {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
        new GenerateCtrfReport({
          on,
      })
    },
  },
};
