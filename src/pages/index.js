import React from "react";
import { Link } from "gatsby";
import { Layout, Container, MainImage, TripItem, TripItemHeading } from "../components";
import krkaPhoto from "../images/krka 4x3.jpg";
import zipPhoto from "../images/zip 4x3.jpg";
import blueCavePhoto from "../images/blue cave 4x3.jpg";
import raftingPhoto from "../images/rafting 4x3.jpg";
import mainImage from "../images/plitvice 16x9.jpg";


export default () => {
  return (
    <Layout>
      
      <MainImage src={mainImage} />

      <Container>
        <Link to="/krka/"> 
          <TripItem>
          <img src={krkaPhoto} alt="Krka" width= "100%"/>
          <TripItemHeading>Krka Waterfalls</TripItemHeading>
          </TripItem>
        </Link>
        
        <TripItem>
        <img src={zipPhoto} alt="Zip line" width= "100%"/>
        <TripItemHeading>Zip line</TripItemHeading>
        </TripItem>

        <TripItem>
        <img src={blueCavePhoto} alt="Blue Cave" width= "100%"/>
        <TripItemHeading>Blue Cave</TripItemHeading>
        </TripItem>
        
        <TripItem>
        <img src={raftingPhoto} alt="Rafting" width= "100%"/>
        <TripItemHeading>Rafting</TripItemHeading>
        </TripItem>

      </Container>
    </Layout>
  );
};
