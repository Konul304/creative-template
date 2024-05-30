const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en/homepage',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
