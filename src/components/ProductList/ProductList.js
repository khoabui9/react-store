import React, { Component } from 'react';
import { SuperTextContainer, SuperText, ProductListContainer, ProductUl } from "./styled"
import ProductItem from "../ProductItem/ProductItem"
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProductList extends Component {
    render() {
        const { products } = this.props
        return (
            <React.Fragment>
                <ProductListContainer>
                    <SuperTextContainer>
                        <SuperText>Minimal furnitures</SuperText>
                        <SuperText>Just buy it</SuperText>
                        <SuperText>Please</SuperText>
                    </SuperTextContainer>
                    <ProductUl>
                        {
                            products.map((e, idx) => (
                                <ProductItem
                                    title={e.title}
                                    image={e.image}
                                    price={e.price}
                                    key={idx}
                                >
                                </ProductItem>
                            ))
                        }
                    </ProductUl>
                </ProductListContainer>
            </React.Fragment>
        );
    }
}

export default ProductList;
