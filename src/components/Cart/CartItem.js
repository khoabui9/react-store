import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import Style from './cart.less'
import { CartListItem, ItemDiv, ItemImageDiv, ItemImage, ItemInfoDiv, MainInfo, UnitsInfo, PriceInfo, RemoveItem, RemoveItemBtn } from './styled'

class CartItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { item, removeFromCartRequest } = this.props
        return (
            <React.Fragment>
                <CartListItem>
                    <ItemDiv>
                        <ItemImageDiv>
                            <ItemImage src={item.image}></ItemImage>
                        </ItemImageDiv>
                        <ItemInfoDiv>
                            <MainInfo className={Style.center}>
                                <div>
                                    <strong><h4>{item.title}</h4></strong>
                                    <p className="product-color">
                                        <span className="_colorName">Color / Color</span>
                                        <span data-qa-qualifier="product-reference"> 0387/181</span>
                                    </p>
                                </div>
                            </MainInfo>
                            <UnitsInfo className={Style.center}>
                                    {item.amount}
                            </UnitsInfo>
                            <PriceInfo className={Style.center}>
                                    {item.price}
                            </PriceInfo>
                            <RemoveItem className={Style.center} onClick={() => removeFromCartRequest(item)}>
                                <RemoveItemBtn>x</RemoveItemBtn>
                            </RemoveItem>
                        </ItemInfoDiv>
                    </ItemDiv>
                </CartListItem>
            </React.Fragment>
        );
    }
}

export default CartItem;

