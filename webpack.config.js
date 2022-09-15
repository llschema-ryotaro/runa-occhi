const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const MODE = "production";

module.exports = {
    mode: MODE,
    entry: './src/js/index.js', //エントリーポイントの指定
    output: {
        path: path.resolve(__dirname,'./dist'), //絶対パスで指定
        filename: './assets/js/app.js' //出力されるファイル名の指定
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.(css|sass|scss)/, //ファイルの検知
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ["autoprefixer", { grid: true }],
                                ],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'), 
                            sassOptions: {
                                fiber: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/images'),
                to: path.resolve(__dirname, './dist/assets/images')
            }]
        }),
        new ImageMinimizerPlugin({
            test: /\.(png|jpe?g)$/i,
            minimizer: {
                filename: '[path][name][ext].webp',
                implementation: ImageMinimizerPlugin.squooshMinify,
                options: {
                encodeOptions: {
                    webp: {
                    lossless: 1,
                    },
                },
                },
            },
        }),
        new ImageMinimizerPlugin({
            test: /\.(png|jpe?g)$/i,
            minimizer: {
                implementation: ImageMinimizerPlugin.squooshMinify,
                options: {
                    encodeOptions: {
                        mozjpeg: {
                        quality: 100,
                        },
                        oxipng: {
                        level: 3,
                        interlace: false,
                        }
                    },
                },
            },
        }),
        new MiniCssExtractPlugin({
            filename: './assets/css/style.css',
        }),
        new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
        new CleanWebpackPlugin(),
    ],
    devtool: 'source-map',
}