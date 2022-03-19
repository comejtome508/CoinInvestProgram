const { override, overrideDevServer,addWebpackAlias } = require('customize-cra');
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
        '@': path.resolve(__dirname, 'src'),
        "@hooks/*": ["hooks/*"],
        "@components/*": ["components/*"],
        "@layouts/*": ["layouts/*"],
        "@pages/*": ["pages/*"],
        "@utils/*": ["utils/*"],
        "@typings/*": ["typings/*"],
        "@queries/*": ["queries/*"],
        })
    ),
    devServer: overrideDevServer(
        config => {
            const proxy = 'https://api.upbit.com/'
            return function(proxy, allowedHost) {
                const config = configFunction(proxy, allowedHost);
                const fs = require('fs');
                
                return config;
            }
        }
    )
}