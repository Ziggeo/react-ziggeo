var path = require('path');
var isProduction = process.env.NODE_ENV === 'production';
var webpack = require('webpack');
var ignore = new webpack.IgnorePlugin(new RegExp("/(ziggeo-client-sdk)/"));

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: `index${isProduction ? '.min' : ''}.js`,
        library: 'ReactZiggeo',
        libraryTarget: 'umd',
        publicPath: '/static/'
    },
    plugins: [
        ignore
    ],
    node: {
        fs: 'empty'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css/,
                loaders: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        }
    }
};
