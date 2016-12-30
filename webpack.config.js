module.exports = {

  entry: "./index.js",

  output: {

    filename: "./src/bundle.js"

  },

  module: {

    loaders: [

      {

        test: /\.jsx?$/,

        exclude: /(node_modules)/,

        loader: 'babel',

        query: {

          presets: ['react', 'es2015']

        }

      }

    ]

  }

};
