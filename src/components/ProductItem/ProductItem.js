import React, { Component } from 'react';
import { Item, ImageContainer, Image,TitleContainer ,PriceContainer } from "./styled"
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProductItem extends Component {
    constructor(props) {
        super(props);

        //this.onClick = this.onClick.bind(this);
    }

    // onClick(e) {
    //     this.props.productClickRequest(e);
    // }

    render() {
        const { id,product,image, title, price } = this.props
        return (   
            <Item onClick={() => this.props.productClickRequest(product)}> 
                <NavLink to={"/product/" + id + "/" + title}>
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
                </NavLink>
            </Item>
        );
    }
}

export default ProductItem;
