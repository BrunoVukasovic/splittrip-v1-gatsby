import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/krka.jpg";


export default ({ data: {krka} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip={krka.frontmatter.title}>Contact Us</Button>
          <Button trip={krka.frontmatter.title}>Book Now</Button>
        </ButtonContainer>
        <div dangerouslySetInnerHTML = {{ __html: krka.html}} />
    </Layout>
  );
};

export const query = graphql`
  query {
    krka: markdownRemark(frontmatter: { page: { eq: "krka" } }) {
      html
      frontmatter{title}
    }
  }
`;