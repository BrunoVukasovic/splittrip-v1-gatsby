import React from "react";
import { Layout, Button, ButtonContainer, MainImage } from "../components";
import mainImage from "../images/brac16x9.jpg";


export default ({ data: {brac} }) => {
  console.log(brac.frontmatter.title);
  return (
    <Layout>
        <MainImage src={mainImage} />

        <ButtonContainer>
          <Button trip={brac.frontmatter.title}>Contact Us</Button>
          <Button trip={brac.frontmatter.title}>Book Now</Button>
        </ButtonContainer>
        <div dangerouslySetInnerHTML = {{ __html: brac.html}} />
    </Layout>
  );
};

export const query = graphql`
query {
  brac: markdownRemark(frontmatter: { page: { eq: "brac" } }) {
    html
    frontmatter{title}
  }
}
`;