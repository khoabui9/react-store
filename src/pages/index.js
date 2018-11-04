import React, { Component } from 'react';
import * as ProductAction from '../states/actions/products.action';
import * as MenuAction from '../states/actions/menu.actions';
import { connect } from 'react-redux';
import Header from "../components/Header/header"
import Menu from "../components/Menu/Menu"
import ProductList from "../components/ProductList/ProductList"
import { Redirect } from "react-router-dom";

class Main extends Component {
  componentWillMount() {
    this.props.initProductRequest();
    this.props.initCollectionRequest();
  }

  render() {
    return (
      <React.Fragment>
        <Header openMenuRequest={this.props.openMenuRequest}></Header>
        <Menu
          categories={this.props.categories}
          mobileMenuOpened={this.props.mobileMenuOpened}>
        </Menu>
        <ProductList products={this.props.products}></ProductList>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.Products.products,
    categories: state.Products.categories,
    mobileMenuOpened: state.Menu.mobileMenuOpened
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initProductRequest: () => dispatch(ProductAction.initProductRequest()),
    initCollectionRequest: () => dispatch(ProductAction.initCollectionRequest()),
    openMenuRequest: () => dispatch(MenuAction.openMenuRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
