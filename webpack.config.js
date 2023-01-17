const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { mainModule } = require('process');


module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'main.js',
        publicPath: '/dist/'
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
        })
    ]

};