const path = require('path');

module.exports = {
  stories: ['../**/*.stories.js'],
  addons: ["@storybook/addon-actions/register", "@storybook/addon-links/register", "@storybook/addon-postcss"],
  staticDirs: ['../assets'],
  core: {
    builder: "webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push(
      {
        include: path.resolve(__dirname, '../'),
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader', 'postcss-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {loader: 'url-loader?limit=100000'}
        ]
      },
    );

    return config;
  }
};
