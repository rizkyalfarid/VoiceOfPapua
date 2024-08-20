const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode : 'development',
  devServer : {
    open : true,
    hot : true,
    port : 3000
  }
})