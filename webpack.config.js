const path= require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: '/assets/js/index.js',
  output:{
    path: path.resolve(__dirname, 'dist/js'),
    filename:'bundle.js',
    publicPath: '/dist'
    //filename:'bundle.js'
  },
  module: {
      rules: [{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            use: [
              {
                loader: "css-loader"        
                //options: {minimize:true}
            }, {
                loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 9000
  },
  plugins: [
    new ExtractTextPlugin('../css/style.css')
  ]
}
