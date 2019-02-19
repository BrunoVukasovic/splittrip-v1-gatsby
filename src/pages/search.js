import React from "react";
import { Layout, Container, FilteredProducts } from "../components";


export default ({ data: {posts} }) => {
    console.log({posts});
  return (
    <Layout>
      <Container>
        <FilteredProducts posts={posts} />

      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/" } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      markdowns: edges {
        markdown: node {
          id
          excerpt(pruneLength: 600)
          frontmatter {
            title
            slug
            image {
              childImageSharp {
                fluid(
                  maxWidth: 350
                  maxHeight: 260
                  cropFocus: NORTH
                ) {src}
              }
            }
          }
        }
      }
    }
  }
`;