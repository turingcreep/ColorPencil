const path = require('path');

module.exports = {
  entry: {
    colorpencil: './src/app.js'
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].dist.js'
  }
};
