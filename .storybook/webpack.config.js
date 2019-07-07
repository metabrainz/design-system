const path = require('path');

module.exports = ({config, mode}) => {
  config.module.rules.push(
    {
      include: path.resolve(__dirname, '../'),
      loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      test: /\.scss$/,
    },
    {
      loader: 'url-loader?limit=100000',
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    },
  );

  return config;
};
