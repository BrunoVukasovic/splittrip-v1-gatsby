import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/sailing16x9.jpg";


export default ({ data: {sailing} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip={sailing.frontmatter.title}>Contact Us</Button>
          <Button trip={sailing.frontmatter.title}>Book Now</Button>
        </ButtonContainer>
        <div dangerouslySetInnerHTML = {{ __html: sailing.html}} />
    </Layout>
  );
};

export const query = graphql`
  query {
    sailing: markdownRemark(frontmatter: { page: { eq: "sailing" } }) {
      html
      frontmatter{title}
    }
  }
`;