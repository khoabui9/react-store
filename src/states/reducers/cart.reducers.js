import * as CartActionTypes from '../actiontypes/cart.actiontypes';

const initialState = {
    cartProducts: [],
    cartOpened: false,
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * 
 * cart reducers
 */
export default function Cart(state = initialState, action) {
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.product]
            }
        case CartActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartProducts: [...state.cartProducts.filter(item => item.id !== action.product.id)]
            }
        case CartActionTypes.DELETE_ALL_CART:
            return {
                ...state,
                cartProducts: []
            }
        case CartActionTypes.UPDATE_AMOUNT:
            return {
                ...state,
                cartProducts: action.cartProducts
            }
        case CartActionTypes.OPEN_CART_LIST_DRAWER:
            return {
                ...state,
                cartOpened: true
            }
        case CartActionTypes.CLOSE_CART_LIST_DRAWER:
            return {
                ...state,
                cartOpened: false
            }
        default:
            return state
    }
}