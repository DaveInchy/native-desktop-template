/* eslint-disable @typescript-eslint/no-var-requires */
require('core-js/stable');
require('regenerator-runtime/runtime');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const styleLoader = require('style-loader');
const isProduction = process.env.NODE_ENV === 'production';

const config  = {
  entry: {
    index: path.resolve(__dirname, 'src/', 'index.js'),
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, 'dist/'),
    filename: 'index.js',
  },
  devServer: {
    hot: true,
    liveReload: true,
    static: path.resolve(__dirname, 'public/'),
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/', 'index.html'),
      output: path.resolve(__dirname, 'dist/'),
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        },
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ],
            },
          },
        ],
        type: 'asset',
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|bmp|)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              presets: [
                '@babel/preset-env',
              ],
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          presets: [
            '@babel/preset-env',
          ],
        },
      },
      {
        test: /\.(mp3|mp4|webm|ogg|wav|flac|aac|opus)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          presets: [
            '@babel/preset-env',
          ],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(txt|md|csv|xml|json|yml|yaml|toml|ini|log|sql|db|db3|sqlite|sqlite3|tar|zip|7z|rar|gz|gzip|bzip2|bz2|tgz|tbz|tbz2|txz|lz|lzma|tlz|Z|tZ|tzst|tz|lz4|lz4l|lz4hc|lz4frame|zst|wasm|bin|exe|dll|so|iso|img|msi|apk|app|deb|rpm|pkg|swf|jar|war|ear|sar|dmg|iso|toast|vcd)$/i,
        loader: 'file-loader',
        options: {
          presets: [
            '@babel/preset-env',
          ],
        },
        exclude: /node_modules/,
      },
    ],
  },
}



module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
}
