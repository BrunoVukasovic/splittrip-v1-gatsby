import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/cycling16x9.jpg";


export default ({ data: {cycling} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip={cycling.frontmatter.title}>Contact Us</Button>
          <Button trip={cycling.frontmatter.title}>Book Now</Button>
        </ButtonContainer>

        <div dangerouslySetInnerHTML={{ __html: cycling.html }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    cycling: markdownRemark(
      frontmatter: { page: { eq: "cycling" } }) {
      html
      frontmatter{title}
    }
  }
`;