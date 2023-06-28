/**
 * Webpack configuration
 *
 * @author Codex Team
 * @copyright Khaydarov Murod
 */
'use strict';

module.exports = (env, argv) => {
  const path = require('path');
  const pkg = require('./package.json');

  /**
   * Environment
   *
   * @type {any}
   */
  const NODE_ENV = argv.mode || 'development';
  const VERSION = process.env.VERSION || pkg.version;

  /**
   * Plugins for bundle
   *
   * @type {webpack}
   */
  const webpack = require('webpack');

  return {
    entry: ['./src/index.js'],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              query: {
                presets: ['@babel/preset-env'],
              },
            },
            'eslint-loader',
          ],
        },
        {
          test: /\.pcss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('postcss-nested-ancestors'),
                  require('postcss-nested'),
                ],
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader?removeSVGTagAttrs=false',
        },
      ],
    },
    plugins: [
      /** Pass variables into modules */
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV),
        VERSION: JSON.stringify(VERSION),
      }),

      new webpack.BannerPlugin({
        banner: `Advanced Quote Tool\n\n@version ${VERSION}\n\n@package https://github.com/VolgaIgor/editorjs-quote-advanced\n@licence MIT\n@author Igor Shuvalov «VolgaIgor» & CodeX`,
      }),
    ],
    output: {
      path: path.join(__dirname, '/dist'),
      publicPath: '/',
      filename: 'bundle.js',
      library: 'QuoteAdvanced',
      libraryTarget: 'umd',
      libraryExport: 'default',
    },
  };
};
