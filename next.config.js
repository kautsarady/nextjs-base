const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    // Distinguish local dev build folder (.next) with production build folder (build)
    distDir: isDev ? '.next' : 'build',

    // Specify page files extenstion (pages/*.{jsx,js})
    pageExtensions: ['jsx', 'js'],

    // Replacing Terser with SWC for minifying JavaScript
    swcMinify: true,
  };
};
