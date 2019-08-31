const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
});

const textPlugin = new ExtractTextPlugin({
    filename: 'style.css',
});

module.exports = {
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                'transform-class-properties',
                            ],
                        },
                    },
                    {
                        loader: 'eslint-loader',
                        options: {
                            quiet: true,
                        },
                    },
                ],
            },
            {
                test: /\.(s*)css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract(
                    {
                        use: [
                            {
                                loader: 'css-loader',
                            },
                            {
                                loader: 'sass-loader',
                            },
                        ],
                        fallback: 'style-loader',
                    },
                ),
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
        ],
    },
    plugins: [
        htmlPlugin,
        textPlugin,
        // copyPlugin,
    ],
};
