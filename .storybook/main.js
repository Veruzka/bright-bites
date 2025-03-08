module.exports = {
  stories: ["../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/react-webpack5",
  webpackFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx");

    // Add Babel Loader for JSX/TSX
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      ],
    });

    /*config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    });*/

     // Add CSS Loader for `.css` files
     config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      include: [/src\/framer/], // 👈 Ensures Storybook processes CSS in `framer/`
    });

    return config;
  },
};








