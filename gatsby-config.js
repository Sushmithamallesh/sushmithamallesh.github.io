module.exports = {
  siteMetadata: {
    title: "Sushmitha Mallesh- Portfolio",
    author: "Sushmitha Mallesh",
    description: "Personal Portfolio for Sushmitha Mallesh"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Sergei Chestakov - Portfolio",
        short_name: "Sergei",
        start_url: "/",
        background_color: "#212121",
        theme_color: "#212121",
        display: "minimal-ui",
        icon: "src/assets/images/favicon.jpg" // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass")
      }
    },
    "gatsby-plugin-offline"
  ]
};
