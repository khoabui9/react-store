import React, { Component } from 'react';
import { Logo, Cart } from "./styled"
import Style from './header.less'
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    render() {
        let cartCount  = localStorage.getItem("cartCount")
        if (cartCount === null)
            cartCount = 0
        library.add(faShoppingBag, faBars);
        return (
            <div className={Style.header}>
                <div className={Style.logo}>
                    <div className={Style.barsContainer}>
                        <FontAwesomeIcon
                            onClick={this.props.openMenuRequest}
                            className={Style.barsIcon}
                            icon="bars"
                        />
                    </div>
                    <Logo>KB the STORE</Logo>
                </div>
                <div className={Style.cart}>
                    <Cart>({cartCount})</Cart>
                    <FontAwesomeIcon
                        className={Style.cartIcon}
                        icon="shopping-bag"
                    />
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    cartProductsLength: PropTypes.number,
};

export default Header;
