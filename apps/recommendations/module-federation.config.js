// @ts-check

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'recommendations',
  remotes: ['store'],
  exposes: {
    './Module': './src/app/app.tsx',
  },
};

module.exports = moduleFederationConfig;
