import * as MenuActionTypes from '../actiontypes/menu.actiontypes';


export const openMenuRequest = () => {
    return {
        type: MenuActionTypes.MOBILE_MENU_CLICK_REQUEST,
    };
};

export const categoryClickRequest = (category) => {
    return {
        type: MenuActionTypes.CATEGORY_CLICK_REQUEST,
        category
    };
};

