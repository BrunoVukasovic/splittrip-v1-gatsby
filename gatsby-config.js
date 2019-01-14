module.exports = {
  siteMetadata: {
    title: "My first Gatsby application",
    description: "Hello, World!"
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: "posts"
      }
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark", // md u html
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",    // ureduje slike
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
              backgroundColor: "transparent"
            }
          }
        ]
      }
    }
  ]
};
