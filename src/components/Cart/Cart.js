import React, { Component } from 'react';
import { CartContainer, CartList, CartListItem, CheckoutBtnContainer, CheckoutBtn, CheckoutText } from './styled'
import CartItem from './CartItem';
import Style from './cart.less'

class Cart extends Component {
    componentWillReceiveProps() {

    }

    render() {
        let { cartProducts, removeFromCartRequest, updateAmountRequest } = this.props
        let totalPrice = cartProducts.reduce((total, e) => {
            return total + (e.price * e.amount)
        }, 0)
        return (
            <CartContainer>
                {
                    cartProducts.length !== 0 ?
                        (
                            <div>
                                <CartList>
                                    <h1 className={Style.basket}>SHOPPING BASKET</h1>
                                    <CartListItem>Products</CartListItem>
                                    {
                                        cartProducts.map((item, idx) => (
                                            <CartItem removeFromCartRequest={removeFromCartRequest} updateAmountRequest={updateAmountRequest} item={item} key={idx}></CartItem>
                                        ))
                                    }
                                    <table>
                                        <tfoot>
                                            <tr>
                                                <th colSpan="6" className={Style.summaryGrey + " order-items-total"} scope="row">Total products:</th>
                                                <td className="order-items-total" headers="priceHeader">{totalPrice} EUR</td>
                                            </tr>
                                            <tr>
                                                <th className={Style.summaryGrey + " order-delivery-costs"} colSpan="6" scope="row">Estimated shipping costs:</th>
                                                <td className="order-delivery-costs" headers="priceHeader">0.00 EUR</td>
                                            </tr>
                                            <tr className="total">
                                                <th colSpan="6" scope="row"><strong><span className={Style.total}>Total:</span></strong></th>
                                                <td className="order-total" headers="priceHeader" className={Style.total}>{totalPrice} EUR</td>
                                            </tr>
                                            <tr className="order-vat-costs">
                                                <th colSpan="6" scope="row"><span className={Style.totalTax + " offleft"}>Total tax</span></th>
                                                <td headers="priceHeader"><em className={Style.vatTag}>* Including VAT</em></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <br />
                                </CartList>
                                <CheckoutBtnContainer>
                                    <CheckoutBtn>
                                        <CheckoutText>CONTINUE</CheckoutText>
                                    </CheckoutBtn>
                                </CheckoutBtnContainer>
                            </div>
                        )
                        :
                        <div>
                            <p>There is nothing in your cart</p>
                            <a href="/">continue shopping</a>
                        </div>
                }
            </CartContainer>
        );
    }
}

export default (Cart);

