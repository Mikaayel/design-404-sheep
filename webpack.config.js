module.exports = {
    entry: "./app/app.js",
    output: {
        path:__dirname,
        filename: "./public/bundle.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }]
    }
}
