const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index : './static/src/index.js',
    applyevent : './static/src/applyevent.js',
    localStorage : './static/src/localStorage.js',
  },
  output: {
<<<<<<< HEAD
    path: path.resolve(__dirname, 'static', 'public'),
=======
    path: path.resolve(__dirname,'static', 'public'),
>>>>>>> dc02778c1bc79d144407ccd233494e09f1847231
    filename: '[name].js',
  },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000
  },
  devServer: {
    publicPath: '/public/',
    compress: true,
    port: 9000,
    hot: true,
  },
}
