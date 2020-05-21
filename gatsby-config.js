module.exports = {
  siteMetadata: {
    siteTitle: `Introduction to Wagtail | Coders of Colour`,
    defaultTitle: `Introduction to Wagtail | Coders of Colour`,
    siteTitleShort: `wagtail-intro`,
    siteDescription: `Introduction to Wagtail Course by Kevin Howbrook and Coders of Colour`,
    siteUrl: `https://intro-wagtail.netlify.app`,
    siteAuthor: `Kevin Howbrook & Tolulope Ogunremi`,
    siteImage: `/coclwhite.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: `Introduction to Wagtail | Coders of Colour`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `http://github.com/tolulope/wagtail-workshop`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/coclwhite.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://intro-wagtail.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
