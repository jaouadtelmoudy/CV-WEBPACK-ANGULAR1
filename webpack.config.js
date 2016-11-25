var webpack=require("webpack");
var path=require("path");
module.exports={
    context: __dirname ,
    entry: "./index",
    output: {
        //path: path.join(__dirname, "app"),
        path: __dirname + "/app",
        filename: "bundle.js"
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: "raw"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },{
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
            }
        ]
    },
    watch:true

}
