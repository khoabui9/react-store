import React, { Component } from 'react';
import { SuperTextContainer, SuperText, SmallerText, ProductListContainer, ProductUl } from "./styled"
import ProductItem from "../ProductItem/ProductItem";
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProductList extends Component {
    render() {
        const { products, selectedCategory } = this.props
        let caterogyProduct = selectedCategory === "View All" ? products : products.filter((e) => e.category.id === selectedCategory )
        return (
            <React.Fragment>
                <ProductListContainer>
                    <SuperTextContainer>
                        <SuperText>Minimal furnitures</SuperText>
                    </SuperTextContainer>
                    <ProductUl>
                        {
                            caterogyProduct.map((e, idx) => (
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

ProductList.propTypes = {
    products: PropTypes.array,
    selectedCategory: PropTypes.string,
};

export default ProductList;
