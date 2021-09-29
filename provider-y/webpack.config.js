const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "providerY",
            filename: 'remoteEntry.js',
            exposes: {
                './MicroY' : './src/bootstrap.js'
            },
            remotes: {
                eventBus: 'eventBus@http://localhost:8083/remoteEntry.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}