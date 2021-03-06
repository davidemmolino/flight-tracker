const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const { NamedModulesPlugin } = require('webpack');

module.exports = {
    entry: './client/index.tsx',
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    }, 
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            { 
              test: /\.js$/, 
              loader: "source-map-loader" 
            },
            {
                test: /\.(scss|css)$/,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
              {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'images/[hash]-[name].[ext]',
                    },
                  },
                ],
              },
              {
                test: /\.svg$/,
                use: ['@svg/webpack'],
              },
              {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
              }
        ]
    },
    devServer: {
        publicPath: '/dist/',
        proxy: {
            '/': 'http://localhost:3000'
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html'
        })
    ]
}