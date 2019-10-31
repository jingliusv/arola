import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Hero from '../components/inc/Hero';
import Info from "../components/home/Info";

export default ({data}) => (
    <Layout>
        <Hero img={data.img.childImageSharp.fluid} title="The story of Arola" styleClass="about-background" />
        <Info />
    </Layout>
)

export const query = graphql`
{
    img: file(relativePath: {eq: "aboutus.jpg"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
  }
`;
