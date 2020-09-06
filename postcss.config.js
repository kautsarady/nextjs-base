module.exports = {
  plugins: {
    // Default nextjs postcss config
    // https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-plugins
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: { flexbox: 'no-2009' },
      stage: 3,
      features: { 'custom-properties': false },
    },
    // ----------------------------------------------------------------------------------------
    cssnano: {
      preset: ['advanced', { discardComments: { removeAll: true } }],
    },
  },
};
