// var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html", //where to look for the html file
    filename: "./index.html" //name of the minified file generated in the dist folder
});

module.exports = {
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [htmlPlugin]
}