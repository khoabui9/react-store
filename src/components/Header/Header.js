import React, { Component } from 'react';
import { Logo, Cart } from "./styled"
import Style from './header.less'
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faBars } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    render() {
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
                    <Cart>(0)</Cart>
                    <FontAwesomeIcon
                        className={Style.cartIcon}
                        icon="shopping-bag"
                    />
                </div>
            </div>
        );
    }
}

export default Header;
