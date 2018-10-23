// const config = require('./webpack.config.js');
// const webpack = require('webpack');

// config.plugins.push(
//   new webpack.DefinePlugin({
//     "process.env": {
//       "NODE_ENV": JSON.stringify("production")
//     }
//   })
// );

// config.plugins.push(
//   new webpack.optimize.UglifyJsPlugin({
//     compress: {
//       warnings: true
//     }
//   })
// );

// module.exports = config;

// module.exports = {
//   plugins:[
//     new webpack.DefinePlugin({
//       'process.env':{
//         'NODE_ENV': JSON.stringify('production')
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       compress:{
//         warnings: true
//       }
//     })
//   ]
// };

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index',
  module: {
    rules: [
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      },
      {
          test: /\.s[a|c]ss$/,
          loader: 'sass-loader!style-loader!css-loader'
      },
      {
          test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
          // include: [
          //     path.resolve(__dirname, './src/static/img')
          //   ],
          loader: 'url-loader?limit=100000'
      }, 
      {
          test: /\.js$/,
          exclude:/node_modules/,
          loader: 'babel-loader'
      }
  ]
  },
  resolve: {
    extensions: ['.js','.scss']
  },
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/',
    filename: '[name].js'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),  
    // new webpack.optimize.CommonsChunkPlugin('common'),
    new webpack.optimize.AggressiveMergingPlugin(), 
    new webpack.DefinePlugin({
          "process.env": {
            "NODE_ENV": JSON.stringify("production")
          }
        }), 
        new webpack.optimize.UglifyJsPlugin({
              compress: {
                warnings: true
              }
            })
    
  ]
};
