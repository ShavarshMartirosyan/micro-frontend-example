const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
    mode: 'development',
    devServer: {
        port: 8083
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "eventBus",
            filename: 'remoteEntry.js',
            exposes: {
                './EventBus' : './src/bootstrap.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}