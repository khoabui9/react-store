import * as MenuActionTypes from '../actiontypes/menu.actiontypes';


export const openMenuRequest = () => {
    return {
        type: MenuActionTypes.MOBILE_MENU_CLICK_REQUEST,
    };
};

export const categoryClick = () => {
    return {
        type: MenuActionTypes.CATEGORY_CLICK,
    };
};

