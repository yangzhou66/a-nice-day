const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
module.exports = {
    //entry: './src/index.js',

    entry: {
        app: './src/index.js',
        //print: './src/print.js'
    },
    output: {
        //-     filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
            {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        //dont compress html code
                        minimize: false
                    }
                }]
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname,'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        compact: false,
                        presets: ['react-app']
                    }
                }
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.resolve(path.resolve(__dirname, 'src'), 'index.html'),
        })
    ],
};