const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const webpack = require('webpack');
const path = require('path');

module.exports = {
   entry: {
      index: './src/index.js',
      page: './src/page.jsx',
   },
   output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'docs'),
      clean: true,
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/i,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
                  plugins: ['@babel/plugin-proposal-class-properties'],
               },
            },
         },
         {
            test: /\.(sa|sc|c)ss$/i,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader',
               {
                  loader: 'postcss-loader',
                  options: {
                     postcssOptions: {
                        plugins: [['postcss-preset-env']],
                     },
                  },
               },
               'sass-loader',
            ],
         },
         {
            test: /\.html$/i,
            loader: 'html-loader',
         },
         {
            resourceQuery: /raw/,
            type: 'asset/source',
         },
         {
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            type: 'asset/resource',
            generator: {
               filename: 'images/[hash][ext][query]',
            },
         },
         {
            test: /\.(ttf|otf|woff|woff2)$/i,
            loader: 'file-loader',
            options: {
               name: 'fonts/[name].[ext]',
            },
         },
      ],
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: '[name].css',
         chunkFilename: '[id].css',
      }),

      ///////

      // Index (home page)
      new HtmlWebpackPlugin({
         hash: true,
         scriptLoading: 'blocking',
         template: './src/index.html',
         filename: './index.html',
         // chunks: ['index']
      }),

      // About us page
      new HtmlWebpackPlugin({
         hash: true,
         scriptLoading: 'blocking',
         template: './src/about.html',
         filename: './about.html',
         // chunks: ['page']
      }),

      // Catalog page
      new HtmlWebpackPlugin({
         hash: true,
         scriptLoading: 'blocking',
         template: './src/archive.html',
         filename: './archive.html',
         // chunks: ['page']
      }),

      // Selections page
      new HtmlWebpackPlugin({
         hash: true,
         scriptLoading: 'blocking',
         template: './src/selections.html',
         filename: './selections.html',
         // chunks: ['page']
      }),

      // Training page
      new HtmlWebpackPlugin({
         hash: true,
         scriptLoading: 'blocking',
         template: './src/training.html',
         filename: './training.html',
         // chunks: ['page']
      }),

      // Catalog Item page
      new HtmlWebpackPlugin({
         hash: true,
         scriptLoading: 'blocking',
         template: './src/catalog/alt-tab.html',
         filename: './catalog/alt-tab.html',
         // chunks: ['page']
      }),

      // Catalog Item page
      new HtmlWebpackPlugin({
         hash: true,
         scriptLoading: 'blocking',
         template: './src/catalog/cmd-tab.html',
         filename: './catalog/cmd-tab.html',
         // chunks: ['page']
      }),

      // Catalog Item page
      new HtmlWebpackPlugin({
         hash: true,
         scriptLoading: 'blocking',
         template: './src/catalog/ctrl-z.html',
         filename: './catalog/ctrl-z.html',
         // chunks: ['page']
      }),

      // Catalog Item page
      new HtmlWebpackPlugin({
         hash: true,
         scriptLoading: 'blocking',
         template: './src/catalog/cmd-z.html',
         filename: './catalog/cmd-z.html',
         // chunks: ['page']
      }),

      // Catalog Item page
      new HtmlWebpackPlugin({
         hash: true,
         scriptLoading: 'blocking',
         template: './src/catalog/cmd-h.html',
         filename: './catalog/cmd-h.html',
         // chunks: ['page']
      }),

      // Catalog Item page
      new HtmlWebpackPlugin({
         hash: true,
         scriptLoading: 'blocking',
         template: './src/catalog/cmd-o.html',
         filename: './catalog/cmd-o.html',
         // chunks: ['page']
      }),

      // Catalog Item page
      new HtmlWebpackPlugin({
         hash: true,
         scriptLoading: 'blocking',
         template: './src/catalog/ctrl-w.html',
         filename: './catalog/ctrl-w.html',
         // chunks: ['page']
      }),

      // Catalog Item page
      new HtmlWebpackPlugin({
         hash: true,
         scriptLoading: 'blocking',
         template: './src/catalog/win-d.html',
         filename: './catalog/win-d.html',
         // chunks: ['page']
      }),

      // Catalog Item page
      new HtmlWebpackPlugin({
         hash: true,
         scriptLoading: 'blocking',
         template: './src/catalog/win-v.html',
         filename: './catalog/win-v.html',
         // chunks: ['page']
      }),

      // Catalog Item page
      new HtmlWebpackPlugin({
         hash: true,
         scriptLoading: 'blocking',
         template: './src/catalog/alt-f4.html',
         filename: './catalog/alt-f4.html',
         // chunks: ['page']
      }),

      //////

      // Partials
      new HtmlWebpackPartialsPlugin([
         {
            path: path.join(__dirname, './src/partials/hotkeys.html'),
            location: 'hotkeys',
            template_filename: '*',
            priority: 'replace',
         },
      ]),

      new HtmlWebpackPartialsPlugin([
         {
            path: path.join(__dirname, './src/partials/menu.html'),
            location: 'menu',
            template_filename: '*',
            priority: 'replace',
         },
      ]),

      new HtmlWebpackPartialsPlugin([
         {
            path: path.join(__dirname, './src/partials/menu-item.html'),
            location: 'menu-item',
            template_filename: '*',
            priority: 'replace',
         },
      ]),

      new HtmlWebpackPartialsPlugin([
         {
            path: path.join(__dirname, './src/partials/windows.html'),
            location: 'windows',
            template_filename: '*',
            priority: 'replace',
         },
      ]),

      new HtmlWebpackPartialsPlugin([
         {
            path: path.join(__dirname, './src/partials/macos.html'),
            location: 'macos',
            template_filename: '*',
            priority: 'replace',
         },
      ]),

      new HtmlWebpackPartialsPlugin([
         {
            path: path.join(__dirname, './src/partials/footer.html'),
            location: 'footer',
            template_filename: '*',
            priority: 'replace',
         },
      ]),
   ],
   optimization: {
      minimizer: [new CssMinimizerPlugin()],
   },
};
