import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/zip16x9.jpg";


export default ({ data: {zip} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip={zip.frontmatter.title}>Contact Us</Button>
          <Button trip={zip.frontmatter.title}>Book Now</Button>
        </ButtonContainer>

        <div dangerouslySetInnerHTML={{ __html: zip.html }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    zip: markdownRemark(
      frontmatter: { page: { eq: "zip" } }) {
      html
      frontmatter{title}
    }
  }
`;