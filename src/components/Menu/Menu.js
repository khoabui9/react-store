import React, { Component } from 'react';
import Style from './menu.less'
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledMenu, List } from "./styled"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isMobile: false //This is where I am having problems
        };
    
        this.updatePredicate = this.updatePredicate.bind(this);
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

    render() {
        const {categories, mobileMenuOpened} = this.props
        return (
            <React.Fragment>
                <StyledMenu pose={!(this.state.isMobile && !mobileMenuOpened) ? 'open' : 'closed'}>
                    <List>
                        <a key="View all">
                            <li className={Style.active + " " + Style.listItem} >View All</li>
                        </a>
                        {
                            categories.map((e, idx) => (
                                <a key={e}>
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
