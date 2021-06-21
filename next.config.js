const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  distDir: isDev ? '.next' : 'build',
  pageExtensions: ['jsx', 'js'],
};
