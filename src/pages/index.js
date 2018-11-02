import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../components/Header/header"
import Menu from "../components/Menu/Menu"
import {Redirect} from "react-router-dom";

class Main extends Component {
  render() {
    return (
        <React.Fragment>
            <Header></Header>
            <Menu categories={this.props.categories}></Menu>
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.Products.products, 
    categories: state.Products.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initProductRequest: () => dispatch(ProductAction.initProductRequest()),
    initCollectionRequest: () => dispatch(ProductAction.initCollectionRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
