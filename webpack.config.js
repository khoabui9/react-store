const path = require('path');
const PATHS = {
    src: path.join(__dirname, 'src'),
};

module.exports = {
    mode: 'development',
    devtool: 'inline-sourcemap',
    entry: PATHS.src,
    output: {
        path: __dirname + "/public",
        publicPath: '/',
        filename: 'bundle.js'
    },
    node: {
        dns: 'mock',
        net: 'mock'
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            },
            {
                loader: "css-loader",
                options: {
                    sourceMap: true,
                    modules: true,
                    // localIdentName: "[local]",
                    localIdentName: "[local]___[hash:base64:5]"
                }
            },
            {
                loader: "less-loader"
            }
            ]
        }
        ]
    },
    devServer: {
        contentBase: __dirname + "\\public",
        inline: true,
        host: '0.0.0.0',
        port: 8080,
        historyApiFallback: true
    }
};