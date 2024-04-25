const moduleFederationConfig = {
  name: 'checkout',
  exposes: {
    './Module': './src/app/app.tsx',
  },
};

module.exports = moduleFederationConfig;
