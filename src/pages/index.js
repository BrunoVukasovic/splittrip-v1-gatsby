import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components";
import { MainImage } from "../components";
import mainPhoto  from "../images/plitvice.jpg";
import krkaPhoto from "../images/krka 4x3.jpg";



export default ({
  data: {
    site: {
      siteMetadata: { title, description }
    }
  }
}) => {
  return (
    <Layout>
      <MainImage />
      <img src={krkaPhoto} alt="Krka" class="item-image" width="50%" />
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
