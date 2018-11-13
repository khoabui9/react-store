import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import * as ProductAction from '../../states/actions/products.action';
import * as CartAction from '../../states/actions/cart.actions';
import Style from './productPage.less'
import {
  Container,
  ImageSection,
  InfoSection,
  ImageContainer,
  Image,
  InfoContainer,
  TitleContainer,
  PriceContainer,
  AddToCartBtnContainer,
  AddToCartBtn,
  AddToCartText,
  OpenDeBanOi
} from "./styled"


class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      infoOpened: false
    };

    this.updatePredicate = this.updatePredicate.bind(this);
    this.onInfoClick = this.onInfoClick.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillMount() {
    this.props.getSelectedProduct(this.props.match.params.id)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isMobile: window.innerWidth < 700 });
  }

  onInfoClick() {
    this.setState({ infoOpened: !this.state.infoOpened });
  }

  onBtnClick() {
    this.props.addToCartRequest(this.props.selectedProduct)
  }

  render() {
    const { selectedProduct, addToCartRequest } = this.props
    let isMobile = this.state.isMobile;
    return (
      <Container>
        <ImageSection>
          <ImageContainer>
            <Image src={selectedProduct.image}></Image>
          </ImageContainer>
          <ImageContainer>
            <Image src={selectedProduct.image}></Image>
          </ImageContainer>
          <ImageContainer>
            <Image src={selectedProduct.image}></Image>
          </ImageContainer>
          <ImageContainer>
            <Image src={selectedProduct.image}></Image>
          </ImageContainer>
          <ImageContainer>
            <Image src={selectedProduct.image}></Image>
          </ImageContainer>
        </ImageSection>
        <InfoSection pose={
          isMobile ?
            (this.state.infoOpened) ? 'open' : 'closed'
            :
            'default'
        }
        >
          <OpenDeBanOi></OpenDeBanOi>
          <InfoContainer>
            <div onClick={this.onInfoClick}>
              <TitleContainer>
                <h2 className={Style.m0}>{selectedProduct.title}</h2>
              </TitleContainer>
              <PriceContainer>
                <p className={Style.m0}>{selectedProduct.price} EUR</p>
              </PriceContainer>
            </div>
            {
              isMobile ? (
                <AddToCartBtnContainer onClick={this.onBtnClick}>
                  <AddToCartBtn>
                    <AddToCartText>ADD TO CART</AddToCartText>
                  </AddToCartBtn>
                </AddToCartBtnContainer>
              ) : (null)
            }
            <PriceContainer onClick={this.onInfoClick}>
              <div className="product-info-wrapper _product-info">
                <p className="product-color">
                  <span className="_colorName">Color / Color</span>
                  <span data-qa-qualifier="product-reference"> 0387/181</span>
                </p>
                <div id="description" className="_redraw-for-color">
                  <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  <br />
                    <br />SIZE: size cm
                  </p>
                </div>
              </div>
            </PriceContainer>
            {
              !isMobile ? (
                <AddToCartBtnContainer onClick={() => addToCartRequest(selectedProduct)}>
                  <AddToCartBtn>
                    <AddToCartText>ADD TO CART</AddToCartText>
                  </AddToCartBtn>
                </AddToCartBtnContainer>
              ) : (null)
            }
          </InfoContainer>
        </InfoSection>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedProduct: state.Products.selectedProduct,
    cartProducts: state.Cart.cartProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSelectedProduct: (id) => dispatch(ProductAction.getSelectedProduct(id)),
    addToCartRequest: (product) => dispatch(CartAction.addToCartRequest(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
