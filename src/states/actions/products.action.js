import * as ProductActionTypes from '../actiontypes/products.actiontypes';

export const initProductRequest = () => {
    return {
        type: ProductActionTypes.INIT_REQUEST,
    };
};


export const initCollectionRequest = () => {
    return {
        type: ProductActionTypes.INIT_COLLECTION_REQUEST,
    };
};

export const productClickRequest = (product) => {
    console.log(product)
    return {
        type: ProductActionTypes.PRODUCT_CLICK_REQUEST,
        product
    };
};


export const setSelectedProduct = (product) => {
    return {
        type: ProductActionTypes.SET_SELECTED_PRODUCT,
        product
    };
};
