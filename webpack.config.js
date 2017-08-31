var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:'./app/index.js',
	output:{
		path: './dist',
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:"babel-loader",
				query:
				{
					presets:['react','es2015']
				}
			},
			{
				test:/\.css$/,
				loader:"style!css"
			},
			{
				test:/\.less/,
				loader:'style-loader!css-loader!less-loader'
			}
		]
	},
	devtool: 'eval-source-map',
	devServer: {
   	 	historyApiFallback: true,
    	hot: true,
    	inline: true,
    	progress: true
  },
  plugins: [
    new HtmlwebpackPlugin({
     	 // title: 'Deskmark app'
     	 template:'./index.tpl.html',
   	 	}),
  	]
}