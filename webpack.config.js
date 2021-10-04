var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        compress: true,
        port: 7000,
        proxy: {
            // This setting reflect the kubctl cluster config
            // on gcp env 
            '/bit-dev' : {
                target: 'http://localhost:7001',
                pathRewrite: { '^/bit-dev': '' },

            },
            // '/bit-dev': 'http://localhost:7001',
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'bit dev docker issue ',
          inject: 'body'
        }),
      ],
};