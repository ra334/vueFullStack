const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const PATHS = {
    src: path.resolve(),
    copyPath: path.join(__dirname, '..', 'server', 'public', 'build')
}

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
    context: PATHS.src,
    entry: {
        main: './main.js',
    },
    output: {
        filename: 'js/min_js/[name].bundle.js',
        path: PATHS.copyPath
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
    },

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './assets/page/index.pug'
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'assets/images', to: PATHS.copyPath + '/images' },
                { from: 'assets/fonts', to: PATHS.copyPath + '/fonts' }
            ]
        })
    ],

    devServer: {
        port: process.env.PORT || 8080,
        historyApiFallback: true

    },

    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: file => (
                /node_modules/.test(file) &&
                !/\.vue\.js/.test(file)
            )
        },

        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },

        {
            test: /\.vue$/,
            use: 'vue-loader'
        },

        {
            test: /\.(scss|sass|css)$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ],
        },

        {
            test: /\.pug$/,
            oneOf: [{
                resourceQuery: /^\?vue/,
                use: ['pug-plain-loader']
            },
            {
                use: ['raw-loader', 'pug-plain-loader']
            }
            ]
        },

        {
            test: /\.(png|jpg|svg|gif)$/,
            loader: 'file-loader',
            options: {
                outputPath: 'images',
            },
        },

        {
            test: /\.(woff|woff2|ttf|eot)$/,
            loader: 'file-loader',
            options: {
                outputPath: 'fonts',
            },
        },

        {
            test: /\.xml$/,
            use: 'xml-loader'
        },

        {
            test: /\.csv$/,
            use: 'csv-loader'
        }
        ]
    }
}