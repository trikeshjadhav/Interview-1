module.exports = {
  entry: {
    main: "./app/js/main.raw.js"
  },
  output: {
    path: __dirname + "/app/js/",
    publicPath: '/js/',
    filename: "[name].js"
  },
  externals:[
    require('webpack-require-http')
  ],
  module: {
    loaders: [
      {
        test: require.resolve('jquery'),
        loader: 'expose?jQuery!expose?$'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader'
        ]
      },
      {
        test: /\.sass$/,
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader',
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(ttf|woff|eot|woff2|svg|cur)/,
        loader: 'file-loader'
      }
    ]
  }
};
