const
    MiniCssExtractPlugin = require("mini-css-extract-plugin")
    path = require("path");

const isDevEnv = process.env.NODE_ENV === "development";

module.exports  = {
    mode: isDevEnv ? "development" : "production",
    entry: "./react-app/index.js",
    output: {
        filename: "react-app.js",
        path: path.join(__dirname, "./js/"),
    },
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
                test: /\.css/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
}