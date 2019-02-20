import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/omis16x9.jpg";


export default ({ data: {omis} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button>Contact Us</Button>
          <Button>Book Now</Button>
        </ButtonContainer>

        <div dangerouslySetInnerHTML={{ __html: omis.html }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    omis: markdownRemark(
      frontmatter: { page: { eq: "omis" } }) {
      html
    }
  }
`;