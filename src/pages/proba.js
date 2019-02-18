import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FilteredProducts } from "../components";

export default ({ data: {pages} }) => {
  console.log({pages});
  return(
  <div>
    <FilteredProducts pages={pages} />
  </div>
  );
};

export const query = graphql`
  query {
    pages: allMarkdownRemark(
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