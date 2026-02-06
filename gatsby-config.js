module.exports = {
  pathPrefix: '/naturecredits',
  siteMetadata: {
    title: `Nature Credits - From Local Forests to High-Integrity Nature Credits`,
    description: `We partner with forest owners to design, implement, and certify local-for-local nature credits. Our biodiversity projects strengthen ecosystems, reward landowners, and unlock new revenue streams.`,
    author: `@naturecredits`,
    siteUrl: `https://naturecredits.earth`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Nature Credit`,
    //     short_name: `NatureCredit`,
    //     start_url: `/`,
    //     background_color: `#f0f9f4`,
    //     theme_color: `#32995a`,
    //     display: `minimal-ui`,
    //     icon: `public/icons/icon-512x512.png`, // This path is relative to the root of the site.
    //     icons: [
    //       {
    //         src: `public/icons/icon-48x48.png`,
    //         sizes: `48x48`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `public/icons/icon-72x72.png`,
    //         sizes: `72x72`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `public/icons/icon-96x96.png`,
    //         sizes: `96x96`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `public/icons/icon-144x144.png`,
    //         sizes: `144x144`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `public/icons/icon-192x192.png`,
    //         sizes: `192x192`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `public/icons/icon-256x256.png`,
    //         sizes: `256x256`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `public/icons/icon-384x384.png`,
    //         sizes: `384x384`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `public/icons/icon-512x512.png`,
    //         sizes: `512x512`,
    //         type: `image/png`,
    //       },
    //     ],
    //   },
    // },
    // `gatsby-plugin-offline`, // Disabled - requires manifest plugin
  ],
}
