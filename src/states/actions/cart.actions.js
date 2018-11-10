import * as CartActionTypes from '../actiontypes/cart.actiontypes';


export const initCartRequest = () => {
    return {
        type: CartActionTypes.INIT_CART_REQUEST,
    };
};

export const addToCartRequest = (product) => {
    return {
        type: CartActionTypes.ADD_TO_CART_REQUEST,
        product
    };
};

export const removeFromCartRequest = (product) => {
    return {
        type: CartActionTypes.REMOVE_FROM_CART_REQUEST,
        product
    };
};

export const deleteAllRequest = () => {
    return {
        type: CartActionTypes.DELETE_ALL_CART_REQUEST,
    };
};

export const openCartListDrawer = () => {
    return {type: CartActionTypes.OPEN_CART_LIST_DRAWER}
};

export const closeCartListDrawer = () => {
    return {type: CartActionTypes.CLOSE_CART_LIST_DRAWER}
};