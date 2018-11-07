import * as CartActionTypes from '../actiontypes/cart.actiontypes';


export const addToCart = (product) => {
    return {
        type: CartActionTypes.ADD_TO_CART,
        product
    };
};

export const removeFromCart = (product) => {
    return {
        type: CartActionTypes.REMOVE_FROM_CART,
        product
    };
};

export const deleteAll = () => {
    return {
        type: CartActionTypes.DELETE_ALL_CART,
    };
};

export const openCartListDrawer = () => {
    return {type: CartActionTypes.OPEN_CART_LIST_DRAWER}
};

export const closeCartListDrawer = () => {
    return {type: CartActionTypes.CLOSE_CART_LIST_DRAWER}
};