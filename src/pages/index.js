import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components";
import mainPhoto  from "../images/plitvice.jpg";



export default ({
  data: {
    site: {
      siteMetadata: { title, description }
    }
  }
}) => {
  return (
    <Layout>
      <img src={mainPhoto} alt="Main Photo" height="1000" width="1072"></img>
      <h1>{title}</h1>
      <p>{description}</p>
    </Layout>
  );
};

export const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
