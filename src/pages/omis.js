import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/omis16x9.jpg";


export default ({ data: {omis} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip={omis.frontmatter.title}>Contact Us</Button>
          <Button trip={omis.frontmatter.title}>Book Now</Button>
        </ButtonContainer>

        <div dangerouslySetInnerHTML={{ __html: omis.html }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    omis: markdownRemark(
      frontmatter: { page: { eq: "omis" } }) {
      html
      frontmatter{title}
    }
  }
`;