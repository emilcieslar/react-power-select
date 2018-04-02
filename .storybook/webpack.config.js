// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');

module.exports = {
  context: process.cwd(),
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [
      path.resolve(process.cwd(), '.'),
      path.resolve(process.cwd(), 'node_modules'),
      path.resolve(process.cwd(), 'node_modules', 'velocity-react', 'node_modules'),
    ],
  },

  plugins: [
    // your custom plugins
  ],

  module: {
    rules: [
      // add your custom rules.
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
