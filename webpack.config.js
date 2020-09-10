const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const { NamedModulesPlugin } = require('webpack');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    }, 
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html'
        })
    ]
}