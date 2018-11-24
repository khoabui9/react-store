import React, { Component } from 'react';
import Style from './cart.less'
import { CartListItem, ItemDiv, ItemImageDiv, ItemImage, ItemInfoDiv, MainInfo, UnitsInfo, PriceInfo, RemoveItem, RemoveItemBtn } from './styled'

class CartItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { item, removeFromCartRequest, updateAmountRequest, amount } = this.props
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
                                <span className={Style.btnContainer}>
                                    <button onClick={() => updateAmountRequest({product:item, increment: -1})} type="button" className={Style.button + " " +  Style.leftbtn} alt="Add another unit" title="Add another unit"></button>
                                    <button onClick={() => updateAmountRequest({product:item, increment: 1})} type="button" className={Style.button + " " + Style.rightbtn} alt="Delete a unit" title="Delete a unit"></button>
                                </span>
                            </UnitsInfo>
                            <PriceInfo className={Style.center}>
                                {item.price} EUR
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

