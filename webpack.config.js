const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

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
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},

			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'assets/',
					publicPath: '/assets/',
					esModule: false,
				},
			},
			{
				test: /\.(woff)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts/',
					publicPath: 'fonts/',
					esModule: false,
				},
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: 'public/index.html',
		}),
		new Dotenv(),
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
