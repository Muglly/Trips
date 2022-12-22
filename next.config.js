const isProod = process.env.NODE_ENV === 'production';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProod,
});

module.exports = withPWA({
  images: {
    domains: ['media.graphassets.com'],
  },
  // next.js config
});
