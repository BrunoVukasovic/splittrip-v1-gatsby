import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/hvar16x9.jpg";


export default ({ data: {hvar} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button>Contact Us</Button>
          <Button>Book Now</Button>
        </ButtonContainer>
        <div dangerouslySetInnerHTML = {{ __html: hvar.html}} />
    </Layout>
  );
};

export const query = graphql`
  query {
    hvar: markdownRemark(frontmatter: { page: { eq: "hvar" } }) {
      html
    }
  }
`;