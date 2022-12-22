const nex = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  unstable_staticImage: true,
})
module.exports = nex({
  i18n: {
    locales: ['en', 'ph'],
    defaultLocale: 'en'
  }
})
