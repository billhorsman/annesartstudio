module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Anne\'s Art Studio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Linoprint & cut glass artwork from Norfolk, UK' },
      { name: 'og:title', content: 'Anne\'s Art Studio' },
      { name: 'og:description', content: 'Linoprint & cut glass artwork from Norfolk, UK' },
      { name: 'og:url', content: 'https://www.annesart.studio/' },
      { name: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: "96x96", href: '/favicon.png' },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css", integrity: "sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp", crossorigin: "anonymous" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
