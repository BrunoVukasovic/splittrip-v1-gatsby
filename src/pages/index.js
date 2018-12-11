import React from "react";
import { Link } from "gatsby";
import { Layout, Container, MainImage, TripItem } from "../components";
import krkaPhoto from "../images/krka 4x3.jpg";
import zipPhoto from "../images/zip 4x3.jpg";
import blueCavePhoto from "../images/blue cave 4x3.jpg";
import raftingPhoto from "../images/rafting 4x3.jpg";
// import mainImage from "../images/plitvice.jpg";


export default () => {
  const text = "./images/plitvice.jpg"
  return (
    <Layout>
      
      <MainImage text={text}></MainImage>

      <Container>
        <Link to="/krka/"> 
          <TripItem>
          <img src={krkaPhoto} alt="Krka" width= "100%"/>
          <p>Krka Waterfalls</p>
          </TripItem>
        </Link>
        
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
    </Layout>
  );
};
