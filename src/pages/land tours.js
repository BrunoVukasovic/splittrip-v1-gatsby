import React from "react";
import { Link } from "gatsby";
import { Layout, Container, MainImage, TripItem } from "../components";
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
          <p>Krka Waterfalls</p>
        </TripItem>
      </Link>

        <TripItem>
          <img src={plitivcePhoto} alt="Plitvice" width= "100%"/>
          <p>Plitvice lakes</p>
        </TripItem>
        
        <TripItem>
          <img src={zipPhoto} alt="Zip line" width= "100%"/>
          <p>Zip line</p>
        </TripItem>
        
        <TripItem>
          <img src={raftingPhoto} alt="Rafting" width= "100%"/>
          <p>Rafting</p>
        </TripItem>

    </Container>
  </Layout>
);
