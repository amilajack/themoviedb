import path from 'path';
import webpack from 'webpack';

export default {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  entry: './browser.js',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'themoviedb.js',
    libraryTarget: 'umd',
    library: 'themoviedb',
    umdNamedDefine: 'themoviedb'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  target: 'web',
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};
