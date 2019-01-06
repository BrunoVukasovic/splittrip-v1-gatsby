import React from "react";
import { Link } from "gatsby";
import { Layout, Container, MainImage, TripItem, TripItemHeading, TripItemDescription } from "../components";
import krkaPhoto from "../images/krka 4x3.jpg";
import zipPhoto from "../images/zip 4x3.jpg";
import plitivcePhoto from "../images/plitvice 4x3.jpg";
import raftingPhoto from "../images/rafting 4x3.jpg";
import mainImage from "../images/krka 16x9.jpg";

export default () => (
  <Layout>
    <MainImage src={mainImage} />

    <Container>
      <Link to="/krka/"> 
        <TripItem>
          <img src={krkaPhoto} alt="Krka" width= "100%"/>
          <TripItemHeading>Krka Waterfalls</TripItemHeading>
          <TripItemDescription>Our program includes a fascinating tour of an authentically restored ensemble of stone small houses, experience the rich diversity of flora and fauna there.</TripItemDescription>
        </TripItem>
      </Link>

      <Link to = "/plitvice">
        <TripItem>
          <img src={plitivcePhoto} alt="Plitvice" width= "100%"/>
          <TripItemHeading>Plitvice lakes</TripItemHeading>
          <TripItemDescription>Our program includes a fascinating tour of an authentically restored ensemble of stone small houses, experience the rich diversity of flora and fauna there.</TripItemDescription>
        </TripItem>
      </Link>

        <Link to = "/zip">        
          <TripItem>
            <img src={zipPhoto} alt="Zip line" width= "100%"/>
            <TripItemHeading>Zip line</TripItemHeading>
            <TripItemDescription>Our program includes a fascinating tour of an authentically restored ensemble of stone small houses, experience the rich diversity of flora and fauna there.</TripItemDescription>
          </TripItem>
        </Link>
        
        <Link to = "/rafting">
          <TripItem>
            <img src={raftingPhoto} alt="Rafting" width= "100%"/>
            <TripItemHeading>Rafting</TripItemHeading>
            <TripItemDescription>Our program includes a fascinating tour of an authentically restored ensemble of stone small houses, experience the rich diversity of flora and fauna there.</TripItemDescription>
          </TripItem>
        </Link>

    </Container>
  </Layout>
);
