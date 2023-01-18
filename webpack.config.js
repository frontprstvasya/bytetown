const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const сopy = require('copy-webpack-plugin');



module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'main.js',
        publicPath: '/dist/',
        // assetModuleFilename: 'assets/[name][ext]'
    },
    module: {
        rules: [

            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,

                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }



                ],
            },


        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "name.css",
            chunkFilename: "[id].css"
        }),
        new сopy({
            patterns: [
                { from: path.join(__dirname, 'pages'), to: path.join(__dirname, "dist") },
                { from: path.join(__dirname, 'src/assets/img'), to: path.join(__dirname, "dist/assets/img") }

            ]
        })

    ]

};