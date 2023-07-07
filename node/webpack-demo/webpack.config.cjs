const path = require("path")

module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                resolve: {
                    fullySpecified: false,
                    extensions: [".js", ".jsx"]
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    }
}
