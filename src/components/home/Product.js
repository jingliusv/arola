import React from 'react';
import Img from 'gatsby-image';

const Product = ({product}) => {
    return (
        <div className="col-12 col-sm-12 col-md-6 my-3">
            <div className="card mb-4" style={{"maxWidth": "45rem"}}>
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <Img fluid={product.image.fluid} className="card-img" style={{"minHeight": "100%"}}/> 
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text text-green">{product.price} kr</p>
                            <p className="card-text">{product.care.care}</p>
                            <button className="btn btn-outline-green mt-3 text-capitalize">Add to cart</button>     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;