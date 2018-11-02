import React, { Component } from 'react';
import { Logo, Cart } from "./styled"
import Style from './header.less'
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
    render() {
        return (
            <div className={Style.header}>
                <div className={Style.logo}>
                    <Logo>KB</Logo>
                </div>
                <div className={Style.cart}>
                    <Cart>(0)</Cart>
                </div>
            </div>
        );
    }
}

export default Header;
