/**
 * webpack.config.js
 * @private
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, "src");
const PUBLIC_PATH = path.resolve(SRC_PATH, "public");
const BUILD_PATH = path.resolve(ROOT_PATH, "dist");

module.exports = (env, argv) => {
    return {
        context: ROOT_PATH,
        entry: ["@babel/polyfill", path.resolve(SRC_PATH, "index.js")],
        output: {
            path: BUILD_PATH,
            publicPath: "/",
            filename: "static/js/[name].[chunkhash].js",
            chunkFilename: "static/js/[name].[chunkhash].js"
        },
        optimization: {
            splitChunks: {
                chunks: "all"
            }
        },
        resolve: {
            alias: {
                Components: path.resolve(SRC_PATH, "site/components"),
                Layout: path.resolve(SRC_PATH, "site/layout"),
                Views: path.resolve(SRC_PATH, "site/views")
            }
        },
        module: {
            rules: [
                {
                    test: /\.(pdf|jpg|jpeg|png|gif|svg)$/,
                    loader: require.resolve("url-loader"),
                    options: {
                        limit: 10000,
                        name: "static/media/[name].[hash:8].[ext]",
                    },
                },
                {
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    loader: require.resolve("babel-loader"),
                    exclude: [/node_modules/],
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader"
                    ]
                },
            ]
        },
        devtool: "source-map",
        devServer: {
            contentBase: PUBLIC_PATH,
            historyApiFallback: true,
            port: 3000,
            open: true,
        },
        plugins: [
            new CleanWebpackPlugin([
                "dist"
            ]),
            new MiniCssExtractPlugin({
                filename: "static/css/styles.min.css",
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
            }),
            new HtmlWebpackPlugin({
                inject: (argv.mode === "development"),
                template: path.resolve(PUBLIC_PATH, "index.html"),
                filename: path.resolve(BUILD_PATH, "index.html"),
                isDev: (argv.mode === "development")
            }),
            new CopyWebpackPlugin([
                {
                    from: PUBLIC_PATH,
                    to: BUILD_PATH,
                    ignore: ["*.html"]
                }
            ])
        ]
    };
};