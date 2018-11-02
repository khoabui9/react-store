import React, { Component } from 'react';
import Style from './menu.less'
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Menu extends Component {
    render() {
        const categories = this.props.categories
        return (
            <React.Fragment>
                <div className={Style.sideMenu}>
                    <ul className={Style.list}>
                    {
                        categories.map((e, idx) => (
                            <li className={Style.listItem} key={idx}>{e}</li>
                        ))
                    }
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Menu;
