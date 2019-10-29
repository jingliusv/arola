import React from "react"
import { Link, graphql} from "gatsby";
import Layout from "../components/layout";
import Hero from '../components/inc/Hero';
import Info from "../components/home/Info";

export default ({data}) => (
    <Layout>
        <Hero img={data.img.childImageSharp.fluid} title="discover the beauty of plants" styleClass="default-background" />
        <Info />
    </Layout>
)

export const query = graphql`
{
    img: file(relativePath: {eq: "bg.jpg"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
  }
`;
