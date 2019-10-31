import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Hero from '../components/inc/Hero';
import Info from "../components/home/Info";
import Products from "../components/home/products";
import Contact from "../components/home/Contact";
import Blog from "../components/home/Blog";

export default ({data}) => (
    <Layout>
        <Hero img={data.img.childImageSharp.fluid} title="discover the beauty of plants" styleClass="default-background">
            <p className="text-center text-white text-capitalize py-4 lead">We help you to create a lovely green place.</p>
        </Hero>
        <Info />
        <Products />
        <Blog />
        <Contact />
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
