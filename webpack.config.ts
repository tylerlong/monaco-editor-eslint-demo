/* eslint-disable node/no-unpublished-import */
import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

const config: Configuration = {
  mode: 'development',
  entry: {
    index: './src/index.ts',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Monaco Editor ESLint Demo',
    }),
    new MonacoWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ttf$/i,
        type: 'asset/resource',
      },
    ],
  },
};

export default [config];
