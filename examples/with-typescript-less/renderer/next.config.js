const withLess = require('@zeit/next-less');

module.exports = withLess({
  webpack: (config) => Object.assign(config, {
    target: 'electron-renderer',
  }),
});
