module.exports = {
  pathPrefix: "/eapl",
  siteMetadata: {
    siteUrl: "http://localhost:8000/",
    siteLogo: "",
    title: "Electronanu",
    description: "Best electric vehicle",
    author: "@developer_amir",
    twitter: "https://twitter.com/blindsrightuk",
    facebook: "https://www.facebook.com/profile.php?id=100036434949575",
    email: "mailto:enquiries@blindsright.co.uk",
    instagram: "https://instagram.com/blindsright",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-use-query-params",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-offline", // Enables Service Worker
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-17450837-1",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
  ],
}
