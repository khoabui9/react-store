import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import Cart from '../../components/Cart/Cart'
import { CartContainerOuter } from './styled';

class CartPage extends Component {
  componentWillMount() {
    
  }

  render() {
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts"))
    return (
      <CartContainerOuter>
        <Cart cartProducts={cartProducts}></Cart>
      </CartContainerOuter>
    )
  }
}

const mapStateToProps = state => {
  return {
  
  };
};

const mapDispatchToProps = dispatch => {
  return {
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
