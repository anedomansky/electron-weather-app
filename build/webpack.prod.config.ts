import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import baseConfig from './webpack.base.config';

const prodConfig: webpack.Configuration = {
    devtool: 'source-map',
    entry: {
        app: ['webpack-hot-middleware/client', './src/index.tsx'],
    },
    mode: 'production',
    optimization: {
        noEmitOnErrors: true,
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
    },
    plugins: [
        new HTMLWebpackPlugin({
            // meta: {
            //     'Content-Security-Policy': { 'http-equiv': 'Content-Security-Policy', content: "script-src * data: https://ssl.gstatic.com 'unsafe-inline' 'unsafe-eval'" },
            // }, not working correctly - still getting the unsafe-eval warning
            inject: true,
            title: 'Weather-App',
            template: path.resolve(__dirname, '../src/index.html'),
            // favicon: path.resolve(__dirname, '../src/assets/icons/calculator.png'),
        }),
        new ForkTsCheckerWebpackPlugin({
            eslint: true,
        }),
        new CleanWebpackPlugin(),
    ],
    stats: 'errors-only',
};

export default merge(baseConfig, prodConfig);
