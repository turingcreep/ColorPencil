const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    colorpencil: './src/app.js'
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].dist.js'
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({})
  ]
};
