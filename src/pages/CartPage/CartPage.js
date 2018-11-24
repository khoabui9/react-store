import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import Cart from '../../components/Cart/Cart'
import * as CartAction from '../../states/actions/cart.actions';
import { CartContainerOuter } from './styled';

class CartPage extends Component {
  componentWillMount() {

  }

  render() {
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts"))
    let cart;

    if (cartProducts.length === 0)
      cart = <p>Your basket is empty</p>
    else
      cart = <Cart cartProducts={cartProducts} removeFromCartRequest={this.props.removeFromCartRequest}></Cart>
    return (
      <CartContainerOuter>
        <Cart
          cartProducts={cartProducts}
          removeFromCartRequest={this.props.removeFromCartRequest}
          updateAmountRequest={this.props.updateAmountRequest}>
        </Cart>
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
    removeFromCartRequest: (product) => dispatch(CartAction.removeFromCartRequest(product)),
    updateAmountRequest: (param) => dispatch(CartAction.updateAmountRequest(param)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
