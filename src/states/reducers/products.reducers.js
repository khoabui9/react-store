import * as ProductActionTypes from '../actiontypes/products.actiontypes';

const initialState = {
    products: [],
    categories: [],
    selectedProduct: null,
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * 
 * Products reducers
 */
export default function Products(state = initialState, action) {
    switch (action.type) {
        case ProductActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.data
            }
        case ProductActionTypes.SET_CATEGORY:
            return {
                ...state,
                categories: action.data
            }
        case ProductActionTypes.SET_SELECTED_PRODUCT: 
            return {
                ...state,
                selectedProduct: action.selected
            }
        default:
            return state
    }
}