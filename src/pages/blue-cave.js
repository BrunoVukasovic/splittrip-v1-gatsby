import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/bluecave16x9.jpg";


export default ({ data: {blueCave} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip={blueCave.frontmatter.title}>Contact Us</Button>
          <Button trip={blueCave.frontmatter.title}>Book Now</Button>
        </ButtonContainer>
        <div dangerouslySetInnerHTML = {{ __html: blueCave.html}} />
    </Layout>
  );
};

export const query = graphql`
  query {
    blueCave: markdownRemark(frontmatter: { page: { eq: "blue-cave" } }) {
      html
      frontmatter{title}
    }
  }
`;