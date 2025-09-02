module.exports = {
  async redirects() {
    return [
      {
        source: '/devops-portfolio',
        destination: 'https://polishyankee.github.io',
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return {
      // We need this rewrite in beforeFiles, otherwise
      // tcw.sh will still serve the normal homepage
      beforeFiles: [
        {
          source: '/',
          has: [
            {
              type: 'host',
              value: 'tcw.sh',
            },
          ],
          destination: '/l/',
        },
      ]
    }
  },
}