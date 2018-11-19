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
    return (
      <CartContainerOuter>
        <Cart
          cartProducts={cartProducts}
          removeFromCartRequest={this.props.removeFromCartRequest}>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
