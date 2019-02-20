import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/vis16x9.jpg";


export default ({ data: {vis} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button>Contact Us</Button>
          <Button>Book Now</Button>
        </ButtonContainer>
        <div dangerouslySetInnerHTML = {{ __html: vis.html}} />
    </Layout>
  );
};

export const query = graphql`
  query {
    vis: markdownRemark(frontmatter: { page: { eq: "vis" } }) {
      html
    }
  }
`;