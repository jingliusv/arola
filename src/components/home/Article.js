import React from 'react';
import Img from 'gatsby-image';

const Article = ({blog}) => {
    return (
        <div className="card mb-5">
            <Img fluid={blog.image.fluid} className="card-img-top blog-image" style={{"minHeight": "100%"}}/>
            <div className="card-body">
                <h5 className="card-title py-3 text-center">{blog.title}</h5>
                <p className="card-text">{blog.content.content}</p>
            </div>         
        </div>
    );
};

export default Article;