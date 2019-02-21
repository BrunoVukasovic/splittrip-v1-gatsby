import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/canyoning16x9.jpg";


export default ({ data: {canyoning} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip={canyoning.frontmatter.title}>Contact Us</Button>
          <Button trip={canyoning.frontmatter.title}>Book Now</Button>
        </ButtonContainer>

        <div dangerouslySetInnerHTML={{ __html: canyoning.html }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    canyoning: markdownRemark(
      frontmatter: { page: { eq: "canyoning" } }) {
      html
      frontmatter{title}
    }
  }
`;