import * as ProductActionTypes from '../actiontypes/products.actiontypes';

const initialState = {
    products: [],
    categories: [],
    selectedProduct: {},
    productClicked:false,
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
                selectedProduct: action.product
            }
        case ProductActionTypes.SET_SELECTED_PRODUCT_BY_ID: 
            console.log(action.data)
            return {
                ...state,
                selectedProduct: action.data
            }
        case ProductActionTypes.PRODUCT_CLICK: 
            return {
                ...state,
                productClicked: !productClicked
            }
        default:
            return state
    }
}