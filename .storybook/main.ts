import type { StorybookConfig } from '@storybook/react-webpack5';
import type { Configuration } from 'webpack'; // Import Webpack type

const config: StorybookConfig = {
  "stories": [
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"  // ✅ Include all stories
  ],
  "addons": [
    {
      "name": "@storybook/addon-essentials",
      "options": {
        "docs": true  // Enable documentation support
      }
    },
    "@storybook/addon-docs",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  // ✅ Fix: Ensure config.module and config.module.rules are defined
  webpackFinal: async (config: Configuration) => {
    if (!config.module) {
      config.module = { rules: [] }; // ✅ Ensure `module` exists
    }
    if (!config.module.rules) {
      config.module.rules = []; // ✅ Ensure `module.rules` exists
    }
    
    config.module.rules.push({
      test: /Framer_.*\.stories\.(js|jsx|mjs|ts|tsx)$/,
      use: 'null-loader' // Prevent Storybook from loading Framer stories
    });

    return config; // ✅ Ensure `config` is returned
  }
};

export default config;
