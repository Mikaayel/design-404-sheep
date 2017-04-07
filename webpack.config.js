<<<<<<< HEAD
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Page Does Not Exist',
        template: __dirname + '/src/index.ejs',
    })]
};
=======
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
>>>>>>> fbdc2fe190587eb8e50e609b365f5944ca83db52
