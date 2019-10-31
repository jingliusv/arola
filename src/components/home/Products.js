import React, { useState } from 'react';
import Product from './Product';
import { useStaticQuery, graphql } from 'gatsby';
import Title from '../inc/Title';

const getCategories = items => {
    let tempCategories = [];
    items.map(item => {
        tempCategories.push(item.node.category);
    })
    let categories = new Set(tempCategories)
    categories = ["all", ...categories];
    return categories;
}

const Products = () => {
    const data = useStaticQuery(
        graphql`
        {
            plants: allContentfulPlantItem {
                edges {
                    node {
                        id
                        title
                        care {
                            care
                        }
                        price
                        category
                        image {
                            fluid(maxHeight: 426){
                                ...GatsbyContentfulFluid_tracedSVG
                            }
                        }
                    }
                }
            }          
        }
        `
    )
     
    const [items] = useState(data.plants.edges);
    const [categories] = useState(getCategories(data.plants.edges));
    const [plants, setPlants] = useState(data.plants.edges);

    const filterProducts = (category) => {
        let filteredItems;
        const allItems = [...items];
        if(category === "all"){
            setPlants(allItems);
        } else {
            filteredItems = allItems.filter(item => {
                return item.node.category === category;
            })
            setPlants(filteredItems);
        } 
    }

    return(
        <section className="py-5 products">
            <div className="container">
                <Title title="Plants that we love" />

                <div className="row mb-5">
                    <div className="col-12 mx-auto text-center">
                        {categories.map((category, index) => {
                            return (
                                <button 
                                    key={index} 
                                    type="button" 
                                    className="btn btn-outline-green text-capitalize"
                                    onClick={() => filterProducts(category)}
                                >{category}</button>
                            )
                        })}
                    </div>
                </div> 
                
                <div className="row">
                    {
                        plants.map(({node:product}) => {
                            return(
                                <Product key={product.id} product={product} />
                            )
                        })
                    }
                </div>
            </div>
        </section>   
    )
}

export default Products;