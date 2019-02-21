import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/seaKayaking16x9.jpg";


export default ({ data: {seaKayaking} }) => {
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip={seaKayaking.frontmatter.title}>Contact Us</Button>
          <Button trip={seaKayaking.frontmatter.title}>Book Now</Button>
        </ButtonContainer>

        <div dangerouslySetInnerHTML={{ __html: seaKayaking.html }} />
    </Layout>
  );
};

export const query = graphql`
  query {
    seaKayaking: markdownRemark(
      frontmatter: { page: { eq: "seaKayaking" } }) {
      html
      frontmatter{title}
    }
  }
`;