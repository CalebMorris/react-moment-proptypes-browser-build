const path = require('path');

const libEntry = './node_modules/react-moment-proptypes/src/index.js';

/*
 * Webpack configuration to bundle react-moment-proptypes for direct browser import
 * Base pulled from https://webpack.js.org/configuration/#options
 */

module.exports = {
  entry: libEntry,

  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'react-moment-proptypes.js',
    library: 'ReactMomentProptypes',
    libraryTarget: 'umd',
  },

  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],

    extensions: [".js"],
  },

  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  devtool: "source-map",
  context: __dirname,
  target: "web",
}
