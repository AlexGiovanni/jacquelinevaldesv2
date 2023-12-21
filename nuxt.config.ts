// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Bravery Unbound',
      script: [
        { 
          src: "https://widget-cdn.simplepractice.com/assets/integration-1.0.js",
          // src: "assets/js/simplepracticeWidget.js", type: 'module',
          body: true,
        },
      ],
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      contentfulSpace: process.env.CONTENTFUL_SPACE,
      contentfulPublicAccessToken: process.env.CONTENTFUL_PUBLIC_ACCESS_TOKEN,
      contentfulBaseUrl: process.env.CONTENTFUL_BASEURL,
      contentfulEnvironments: process.env.CONTENTFUL_ENVIRONMENTS,
      contentfulHomeEntries: process.env.CONTENTFUL_HOME_ENTRIES,
      contentfulFAQEntries: process.env.CONTENTFUL_FAQ_ENTRIES,
    }
  },
  css: [
    '~/assets/css/input.css',
  ],

})
