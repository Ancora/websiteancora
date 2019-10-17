module.exports = {
  siteMetadata: {
    title: `Âncora - Soluções em TI`,
    description: `Desenvolvimento de websites para pequenas empresas e profissionais autônomos, consultoria e treinamento de usuários em ERP de terceiros, elaboração de manuais operacionais e suporte técnico/operacional remoto ou presencial`,
    author: `@ancorati`,
  },
  plugins: [
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
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
