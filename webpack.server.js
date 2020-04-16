const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpackNodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

const DEV = process.env.NODE_ENV === 'development';

const baseDir = path.resolve(__dirname, './src');

let outputDir;
let instanceDir;
let mode;

if (DEV) {
  outputDir = path.resolve(__dirname, './build-dev');
  instanceDir = 'build-dev';
  mode = 'development';
} else {
  outputDir = path.resolve(__dirname, './dist');
  instanceDir = 'dist';
  mode = 'production';
}

const plugins = [
  new Dotenv({
    path: './.env',
    safe: false
  }),
  new WebpackShellPlugin({
    onBuildEnd: [`nodemon ${instanceDir}/server.js --watch ${instanceDir}`]
  })
];

const entry = `${baseDir}/server.js`;

module.exports = {
  mode,
  target: 'node',
  node: {
    /* fixed a problem with resolving a proper __dirname */
    __dirname: false,
    __filename: false
  },
  entry: entry,
  output: {
    filename: 'server.js',
    path: outputDir
  },
  externals: [webpackNodeExternals()],
  devtool: DEV ? 'source-map' : false,
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  watchOptions: {
    aggregateTimeout: 2000,
    ignored: /node_modules/
  },
  optimization: {
    occurrenceOrder: !DEV,
    concatenateModules: !DEV
  },
};
