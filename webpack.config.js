var webpack = require("webpack");

module.exports = {
    //define the entry file for the app
    entry: [
        "./app/app.jsx",
    ],
    //
    //where the bundled file goes
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    
    resolve :{
        root: __dirname,
        //create custom names for the components so that you can require them more easily 
        alias: {
            Main: "app/components/Main.jsx",
            Nav: "app/components/Nav.jsx",
            About: "app/components/About.jsx",
            Goals: "app/components/Goals.jsx",
            Form: "app/components/Form.jsx",
            Results: "app/components/Results.jsx",
            Visualizer: "app/components/Visualizer.jsx",
            VisItems: "app/components/VisItems.jsx",
            PrintButton: "app/components/PrintButton.jsx"
        },
        //specify extensions for webpack to seek out.
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                //find any file with a .jsx end
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: "cheap-module-eval-source-map"
};