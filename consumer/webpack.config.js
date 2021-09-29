const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "consumer",
            remotes: {
                providerX: 'providerX@http://localhost:8081/remoteEntry.js',
                providerY: 'providerY@http://localhost:8082/remoteEntry.js',
/*                 eventBus: 'eventBus@http://localhost:8083/remoteEntry.js'
 */            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}