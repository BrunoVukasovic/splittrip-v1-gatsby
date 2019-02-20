import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/plitvice16x9.jpg";


export default ({ data: {plitvice} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button>Contact Us</Button>
          <Button>Book Now</Button>
        </ButtonContainer>

        <div dangerouslySetInnerHTML={{ __html: plitvice.html }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    plitvice: markdownRemark(
      frontmatter: { page: { eq: "plitvice" } }) {
      html
    }
  }
`;