const moduleFederationConfig = {
  name: 'catalog',
  remotes: ['recommendations'],
  exposes: {
    './Module': './src/app/app.tsx',
  },
};

module.exports = moduleFederationConfig;
