import React, { Component } from 'react';
import './App.css';
import * as ProductAction from './states/actions/products.action';
import { connect } from 'react-redux';
import routes from "./components/Routes/Routes"
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initProductRequest();
    this.props.initCollectionRequest();
  }

  render() {
    return (
      routes
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.Products.products, 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initProductRequest: () => dispatch(ProductAction.initProductRequest()),
    initCollectionRequest: () => dispatch(ProductAction.initCollectionRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

