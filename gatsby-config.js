module.exports = {
  siteMetadata: {
    title: `Âncora - Soluções em TI`,
    description: `Analista de Sistemas - WebDesigner - Suporte Técnico em ERP`,
    author: `Anderson N C Rocha`,
    city: `Maceió - AL`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Âncora Sol em TI`,
        short_name: `Âncora TI`,
        start_url: `/`,
        background_color: `#008000`,
        theme_color: `#000080`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
