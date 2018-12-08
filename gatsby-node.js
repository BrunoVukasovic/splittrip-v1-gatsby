const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/templates/blog-post.js`);

  // dohvacmo samo slug, sami smo ga nazvali slug u md
  // graphql upit vraca promise
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug } = node.frontmatter;
      createPage({
        path: "/blog/" + slug,
        component: postTemplate,
        context: {
          // additional data can be passed via context
          slug
        }
      });
    });
  });
};
