const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const withPlugins = require('next-compose-plugins');
const withPreact = require('next-plugin-preact');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = (phase, { defaultConfig }) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
  // Distinguish local dev build folder (.next) with production build folder (build)
    distDir: isDev ? '.next' : 'build',

    // Specify page files extenstion (pages/*.{jsx,js})
    pageExtensions: ['jsx', 'js'],

    // Replacing Terser with SWC for minifying JavaScript
    swcMinify: true,
  };

  const plugins = [
    // Enable bundle analyzer feature
    [withBundleAnalyzer],

    // Using Preact bundle instead of React's
    [withPreact],
  ];

  return withPlugins(
    plugins,
    nextConfig,
  )(phase, { defaultConfig });
};
