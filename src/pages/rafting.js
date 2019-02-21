import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/rafting16x9.jpg";


export default ({ data: {rafting} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip={rafting.frontmatter.title}>Contact Us</Button>
          <Button trip={rafting.frontmatter.title}>Book Now</Button>
        </ButtonContainer>

        <div dangerouslySetInnerHTML={{ __html: rafting.html }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    rafting: markdownRemark(
      frontmatter: { page: { eq: "rafting" } }) {
      html
      frontmatter{title}
    }
  }
`;