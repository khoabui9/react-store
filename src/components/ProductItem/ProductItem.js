import React, { Component } from 'react';
import { Item, ImageContainer, Image,TitleContainer ,PriceContainer } from "./styled"
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProductItem extends Component {
    render() {
        const { image, title, price } = this.props
        return (
            <Item>
                <ImageContainer>
                    <Image src={image}></Image>
                </ImageContainer>
                <div className="info-wrap">
                    <TitleContainer>
                        <span>{title}</span>
                    </TitleContainer>
                    <PriceContainer>
                        <span>{price} EUR</span>
                    </PriceContainer>
                </div>
            </Item>
        );
    }
}

export default ProductItem;
