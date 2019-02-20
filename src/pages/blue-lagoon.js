import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/blueLagoon16x9.jpg";


export default ({ data: {blueLagoon} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button>Contact Us</Button>
          <Button>Book Now</Button>
        </ButtonContainer>
        <div dangerouslySetInnerHTML = {{ __html: blueLagoon.html}} />
    </Layout>
  );
};

export const query = graphql`
  query {
    blueLagoon: markdownRemark(frontmatter: { page: { eq: "blue-lagoon" } }) {
      html
    }
  }
`;