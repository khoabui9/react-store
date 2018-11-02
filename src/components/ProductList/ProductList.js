import React, { Component } from 'react';
import { ProductListContainer, ProductUl } from "./styled"
import ProductItem from "../ProductItem/ProductItem"
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProductList extends Component {
    render() {
        const { products } = this.props
        return (
            <ProductListContainer>
                <ProductUl>
                    {
                        products.map((e, idx) => (
                            <ProductItem
                                title={e.title}
                                image = {e.image}
                                price = {e.price}
                                key = {idx}
                            >
                            </ProductItem>
                        ))
                    }
                </ProductUl>
            </ProductListContainer>
        );
    }
}

export default ProductList;
