const webpack = require('webpack');
const {resolve} = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');


module.exports = (env) => {
    // аргумент env — это объект, который создается из параметров, передаваемых
    // команде webpack (напр. webpack --env.dev даст env === {dev: true})

    // ОСНОВНЫЕ НАСТРОЙКИ
    const config = {
        debug: false,
        context: resolve('src/js'),
        entry: {
            javascript: './index.js',
            vendor: ['react', 'react-dom', 'react-router', 'redux', 'react-redux']
        },
        output: {
            path: resolve('public'),
            publicPath: './',
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel',
                    query: {
                        // настройки бабеля для вебпака отличаются от общих настроек бабеля
                        // в .babelrc (которые будет использовать Node во время тестов)
                        babelrc: false,
                        presets: [['es2015', {'modules': false}], 'stage-2', 'react'],
                        plugins: [
                            ['babel-root-import', {
                                rootPathSuffix: 'src/js'
                            }]
                        ]
                    }
                },
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({
                        fallbackLoader: 'style-loader',
                        loader: ['css-loader', 'postcss-loader', 'sass-loader']
                    })
                },
                {
                  test: /\.(png|jpg|svg|gif|ttf|eot|woff|woff2)$/,
                  loader: 'file?name=[path][name].[ext]'
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        postcss: [
            autoprefixer({
                browsers: ['>1%']
            })
        ],
        plugins: plugins
    };

    // ДОПОЛНИТЕЛЬНЫЕ НАСТРОЙКИ, ЗАВИСИМЫЕ ОТ ОКРУЖЕНИЯ

    let plugins = [

        // will extract inline css into separate 'styles.css'
        new ExtractTextPlugin('styles.css'),

        // will create a dedicated chunk with vendor libraries
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity, // ensures that no other module goes into the vendor chunk
        }),

        // создаем html-шаблон с путями к css-файлам
        new HtmlWebpackPlugin({
            // filename — название выходного файла относительно output: path
            filename: 'index.html',
            inject: true,
            minify: {
                collapseWhitespace: true
            },
            // template — путь к шаблону относительно webpack config: context
            template: '../index.html'
        }),
    ];
    let prodPlugins = [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false,
                screw_ie8: true
            }
        })
    ];

    if (env.prod) {
        plugins = plugins.concat(prodPlugins);
    } else {
        config.devtool = 'inline-source-map';
    }

    config.plugins = plugins;

    return config;
};
