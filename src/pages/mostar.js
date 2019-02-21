import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/mostar16x9.jpg";


export default ({ data: {mostar} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip={mostar.frontmatter.title}>Contact Us</Button>
          <Button trip={mostar.frontmatter.title}>Book Now</Button>
        </ButtonContainer>

        <div dangerouslySetInnerHTML={{ __html: mostar.html }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    mostar: markdownRemark(
      frontmatter: { page: { eq: "mostar" } }) {
      html
      frontmatter{title}
    }
  }
`;