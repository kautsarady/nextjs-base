const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const webpackConfigModifier = require('./webpack-config-modifier');

const isDev = process.env.NODE_ENV !== 'production';

const baseConfig = {
  distDir: isDev ? '.next' : 'build',
  poweredByHeader: false,
  pageExtensions: ['jsx'],
  webpack: webpackConfigModifier,
  assetPrefix: process.env.ASSET_PREFIX,
  devIndicators: { autoPrerender: false },
};

const plugins = [[withBundleAnalyzer]];

module.exports = withPlugins(plugins, baseConfig);
