import * as MenuActionTypes from '../actiontypes/menu.actiontypes';

const initialState = {
    mobileMenuOpened: false,
    selectedCategory: "View All",
}   

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * 
 * menu reducers
 */
export default function Menu(state = initialState, action) {
    switch (action.type) {
        case MenuActionTypes.MOBILE_MENU_CLICK:

            return { 
                ...state,
                mobileMenuOpened: !state.mobileMenuOpened
            };
        case MenuActionTypes.CATEGORY_CLICK:
            return { 
                ...state,
                selectedCategory: action.category,
            };
        default:
            return state
    }
}