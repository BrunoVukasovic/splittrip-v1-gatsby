import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/diving16x9.jpg";


export default ({ data: {diving} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip={diving.frontmatter.title}>Contact Us</Button>
          <Button trip={diving.frontmatter.title}>Book Now</Button>
        </ButtonContainer>

        <div dangerouslySetInnerHTML={{ __html: diving.html }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    diving: markdownRemark(
      frontmatter: { page: { eq: "diving" } }) {
      html
      frontmatter{title}
    }
  }
`;