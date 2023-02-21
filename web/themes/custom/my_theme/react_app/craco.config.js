module.exports = {
    webpack: {
      configure: {
        output: {
          filename: 'static/js/[name].js'
        },
        optimization: {
          runtimeChunk: false,
          // minimize: false,
          splitChunks: {
            chunks(chunk) {
              return false;
            },
          },
        },
      },
    },
    plugins: [
      {
        plugin: {
          overrideWebpackConfig: ({ webpackConfig }) => {
            const miniCssPlugin = webpackConfig.plugins.find(
              plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
            );
            miniCssPlugin.options.minimize = false;
            miniCssPlugin.options.filename = 'static/css/[name].css';
            return webpackConfig;
          }
        },
        options: {}
      }
    ],
  }