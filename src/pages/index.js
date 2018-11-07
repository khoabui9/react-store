import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as ProductAction from '../states/actions/products.action';
import * as MenuAction from '../states/actions/menu.actions';
import { connect } from 'react-redux';
import Header from "../components/Header/header"
import Menu from "../components/Menu/Menu"
import Content from './Content'

class Main extends Component {
  componentWillMount() {
    this.props.initProductRequest();
    this.props.initCollectionRequest();
  }

  render() {
    return (
      <React.Fragment>
        <Header openMenuRequest={this.props.openMenuRequest}></Header>
        <BrowserRouter>
          <React.Fragment>
            <Menu
              categories={this.props.categories}
              openMenuRequest={this.props.openMenuRequest}
              mobileMenuOpened={this.props.mobileMenuOpened}
              categoryClickRequest={this.props.categoryClickRequest}
              selectedCategory={this.props.selectedCategory}>
            </Menu>
            <Content></Content>
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.Products.products,
    categories: state.Products.categories,
    mobileMenuOpened: state.Menu.mobileMenuOpened,
    selectedCategory: state.Menu.selectedCategory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initProductRequest: () => dispatch(ProductAction.initProductRequest()),
    initCollectionRequest: () => dispatch(ProductAction.initCollectionRequest()),
    openMenuRequest: () => dispatch(MenuAction.openMenuRequest()),
    categoryClickRequest: (category) => dispatch(MenuAction.categoryClickRequest(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
