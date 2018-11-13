import React, { Component } from 'react';
import Style from './menu.less'
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledMenu, List } from "./styled"
import { NavLink } from 'react-router-dom'


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false,
        };

        this.updatePredicate = this.updatePredicate.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isMobile: window.innerWidth < 700 });
    }

    onClick(e) {
        var selected = document.querySelectorAll("." + Style.active + "")
        Array.from(selected).map(e => {
            e.classList.remove(Style.active)
        })
        e.currentTarget.classList.add(Style.active)
        this.props.categoryClickRequest(e.currentTarget.dataset.id);
        this.props.openMenuRequest()
    }

    render() {
        const { categories, mobileMenuOpened, } = this.props
        let mobile = this.state.isMobile
        let posed = mobile && mobileMenuOpened
        if (!mobile)
            posed = true
        return (
            <StyledMenu pose={posed ? 'open' : 'closed'}>
                <List>
                    <NavLink to="/" className={Style.fake}>
                        <li className={Style.listItem}>+ MENU</li>
                    </NavLink>
                    <br />
                    <NavLink to="/" className={Style.fake} data-id="new in">
                        <li className={Style.listItem}>NEW IN</li>
                    </NavLink>
                    <br />
                    <NavLink to="/" className={Style.fake} data-id="collection-1">
                        <li className={Style.listItem}>COLLECTION 1</li>
                    </NavLink>
                    <NavLink to="/" className={Style.fake} data-id="collection-2">
                        <li className={Style.listItem}>COLLECTION 2</li>
                    </NavLink>
                    <br />
                    <NavLink to="/" className={Style.active} onClick={this.onClick} data-id="View All" key="View all">
                        <li className={Style.listItem}>VIEW ALL</li>
                    </NavLink>
                    {
                        categories.map((e, idx) => (
                            <NavLink to="/" onClick={this.onClick} data-id={e} key={e}>
                                <li className={Style.listItem + " " + Style.child} key={e}>{e}</li>
                            </NavLink>
                        ))
                    }
                    <NavLink to="/">
                        <li className={Style.listItem + " " + Style.child}>Fake category</li>
                    </NavLink>
                    <NavLink to="/">
                        <li className={Style.listItem + " " + Style.child}>Fake category</li>
                    </NavLink>
                    <NavLink to="/">
                        <li className={Style.listItem + " " + Style.child}>Fake category</li>
                    </NavLink>
                </List>
            </StyledMenu>
        );
    }
}

export default Menu;
