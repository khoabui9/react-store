import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import { CartContainer, CartList } from './styled'
import CartItem from './CartItem';

class Cart extends Component {
    render() {
        let { cartProducts } = this.props
        return (
            <CartContainer>
                {
                    cartProducts ?
                <CartList>
                    {
                        cartProducts.map((item, idx) => (
                            <CartItem item={item} key={idx}></CartItem>
                        ))
                    }
                </CartList>
                :
                <div></div>
                }
            </CartContainer>
        );
    }
}

export default (Cart);

