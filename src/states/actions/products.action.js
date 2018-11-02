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


export const setSelectedProduct = (selected) => {
    return {
        type: ProductActionTypes.SET_SELECTED_PRODUCT,
        selected
    };
};
