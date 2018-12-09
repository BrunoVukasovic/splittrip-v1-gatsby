import React from "react";
import { graphql } from "gatsby";
import { Layout, Container, MainImage, TripItem } from "../components";
import krkaPhoto from "../images/krka 4x3.jpg";
import zipPhoto from "../images/zip 4x3.jpg";
import blueCavePhoto from "../images/blue cave 4x3.jpg";
import raftingPhoto from "../images/rafting 4x3.jpg";


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

      <Container>
        <TripItem>
        <img src={krkaPhoto} alt="Krka" width= "100%"/>
        <p>Krka Waterfalls</p>
        </TripItem>
        <TripItem>
        <img src={zipPhoto} alt="Zip line" width= "100%"/>
        <p>Zip line</p>
        </TripItem>
        <TripItem>
        <img src={blueCavePhoto} alt="Blue Cave" width= "100%"/>
        <p>Blue Cave</p>
        </TripItem>
        <TripItem>
        <img src={raftingPhoto} alt="Rafting" width= "100%"/>
        <p>Rafting</p>
        </TripItem>
      </Container>
      
      <h1>{title}</h1>
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
