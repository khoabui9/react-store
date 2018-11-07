import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import {
  Container,
  ImageSection,
  InfoSection,
  ImageContainer,
  Image,
  InfoContainer,
  TitleContainer,
  PriceContainer,
} from "./styled"

class ProductPage extends Component {

  render() {
    const { selectedProduct } = this.props
    return (
      <React.Fragment>
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
          <InfoSection>
            <InfoContainer>
              <TitleContainer>
                <h2>{selectedProduct.title}</h2>
              </TitleContainer>
              <PriceContainer>
                <p>{selectedProduct.price} EUR</p>
              </PriceContainer>
              <PriceContainer>
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
            </InfoContainer>
          </InfoSection>
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedProduct: state.Products.selectedProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
