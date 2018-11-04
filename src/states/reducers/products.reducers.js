import * as ProductActionTypes from '../actiontypes/products.actiontypes';

const initialState = {
    products: [],
    categories: [],
    selectedProduct: null,
    selectedCategory: "View all"
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
        case ProductActionTypes.INIT_REQUEST:
            return { 
                ...state
            };
        case ProductActionTypes.INIT_COLLECTION_REQUEST:
            return { 
                ...state
            };
        case ProductActionTypes.SET_PRODUCTS:
            console.log(action.data)
            return {
                ...state,
                products: action.data
            }
        case ProductActionTypes.SET_CATEGORY:
            console.log(action.data)
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