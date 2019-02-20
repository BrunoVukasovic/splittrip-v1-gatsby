import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/dubrovnik16x9.jpg";


export default ({ data: {dubrovnik} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button>Contact Us</Button>
          <Button>Book Now</Button>
        </ButtonContainer>

        <div dangerouslySetInnerHTML={{ __html: dubrovnik.html }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    dubrovnik: markdownRemark(
      frontmatter: { page: { eq: "dubrovnik" } }) {
      html
    }
  }
`;