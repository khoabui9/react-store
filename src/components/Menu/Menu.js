import React, { Component } from 'react';
import Style from './menu.less'
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledMenu, List } from "./styled"

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
        var selected =  document.querySelectorAll("." + Style.active + "")
        Array.from(selected).map(e => {
            e.classList.remove(Style.active)
        })
        e.currentTarget.classList.add(Style.active)
        this.props.categoryClickRequest(e.currentTarget.dataset.id);
        this.props.openMenuRequest()
    }

    render() {
        const { categories, mobileMenuOpened,  } = this.props
        let mobile = this.state.isMobile
        let posed = mobile && mobileMenuOpened
        if (!mobile)
            posed = true
        return (
            <React.Fragment>
                <StyledMenu pose={posed ? 'open' : 'closed'}>
                    <List>
                        <a className={Style.active} onClick={this.onClick} data-id="View All" key="View all">
                            <li className={Style.listItem} >View All</li>
                        </a>
                        {
                            categories.map((e, idx) => (
                                <a onClick={this.onClick} data-id={e} key={e}>
                                    <li className={Style.listItem} key={e}>{e}</li>
                                </a>
                            ))
                        }
                    </List>
                </StyledMenu>
            </React.Fragment>
        );
    }
}

export default Menu;
