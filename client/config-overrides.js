const { override, overrideDevServer,addWebpackAlias, watchAll } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    webpack: override(
        config => {
            const fallback = config.resolve.fallback || {};
            Object.assign(fallback, {
                "crypto": require.resolve("crypto-browserify"),
                "stream": require.resolve("stream-browserify"),
                "assert": require.resolve("assert"),
                "http": require.resolve("stream-http"),
                "https": require.resolve("https-browserify"),
                "os": require.resolve("os-browserify"),
                "url": require.resolve("url")
            })
            config.resolve.fallback = fallback;
            config.plugins = (config.plugins || []).concat([
                new webpack.ProvidePlugin({
                    process: 'process/browser',
                    Buffer: ['buffer', 'Buffer']
                })
            ])
            return config;
        },
        addLessLoader({
            cssLoaderOptions: {
                sourceMap: true,
                modules: {
                  localIdentName: "[hash:base64:8]",
                },
              },
            lessLoaderOptions: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                  '@primary-color': '#038fde',
                }
              }
            }
          }),

        addWebpackAlias({
        '@': path.resolve(__dirname, './src'),
        "@hooks/*": path.resolve(__dirname, './src/hooks'),
        "@components/*": path.resolve(__dirname, './src/components'),
        "@layouts/*": path.resolve(__dirname, './src/layouts'),
        "@pages/*": path.resolve(__dirname, './src/pages'),
        "@utils/*": path.resolve(__dirname, './src/utils'),
        "@typings/*": path.resolve(__dirname, './src/typings'),
        "@queries/*": path.resolve(__dirname, './src/queries'),
        })
    ),
    devServer: overrideDevServer(
        config => {


          return {
            ...config,
            proxy :{
              '/upbit/': {
                target : 'https://api.upbit.com/',
                changeOrigin: true,
                pathRewrite: {'^/upbit': '/upbit'}
              }
            }
          }
        }
    )
}