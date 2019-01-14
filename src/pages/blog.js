import React from "react";
import { graphql } from "gatsby";
import { Layout, BlogIndex } from "../components";

export default ({
  data: { // data arg fje export, to je gatsby dobavia sa graphql
    allMarkdownRemark: { edges: posts } // Rename array edges to posts // destruktuiranje
  }
}) => {
  return (
    <Layout>
      <h1>Blog posts</h1>
      <BlogIndex posts={posts} />
    </Layout>
  );
};

// trazis od servera da ti da samo neke podatke a ne sve == graphql
// fb spora konekcija

// ono sta dobije s ovim je arg data u gornjoj fiji
export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
      ) {
      edges {
        node {
          id
          frontmatter { 
            title
            date
            slug
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;
