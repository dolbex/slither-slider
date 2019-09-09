// vue.config.js
module.exports = {
  filenameHashing: process.env.NODE_ENV === 'production',
  chainWebpack: (config) => {
    config.externals([
      'vue',
    ]);
  },
};
