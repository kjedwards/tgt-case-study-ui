var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
    mode: 'development',
    entry: [
        path.join(parentDir, 'index.js')
    ],
    resolve: {
      alias: {
        root: path.resolve('./'),
      }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
              test: /\.css$/,
              loaders: ["style-loader", "css-loader"]
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
              loader: 'url-loader?limit=100000'
            }

        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}
