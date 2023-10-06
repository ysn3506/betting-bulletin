const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: 'public/index.html',
		}),
	],
	target: 'web',
	devServer: {
		port: '3000',
		static: ['./public'],
		open: true,
		hot: true,
		liveReload: true,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].[chunkhash].main.js',
	},
};
