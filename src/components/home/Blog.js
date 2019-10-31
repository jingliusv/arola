import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Title from '../inc/Title';
import Article from './Article';

const Blog = () => {
    const data = useStaticQuery(
        graphql`
        {
            blogs: allContentfulBlogItem {
                edges {
                    node {
                        id
                        title
                        content {
                            content
                        }
                        image {
                            fluid(maxWidth: 760) {
                                ...GatsbyContentfulFluid_tracedSVG
                            }
                        }
                    }
                }
            }   
        }
        `
    )

    console.log(data)

    return (
        <section className="blog py-5">
            <Title title="we provide great tips for your plants" />
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-12 mx-auto">
                        {
                            data.blogs.edges.map(({node: blog}) => {
                                return(
                                    <Article key={blog.id} blog={blog} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;