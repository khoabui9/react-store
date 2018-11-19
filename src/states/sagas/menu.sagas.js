import { put, take, call, all, takeLatest, fork, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { browserHistory } from 'react-router';
import * as MenuActionTypes from '../actiontypes/menu.actiontypes';
import { push } from 'react-router-redux';
import { resolve } from 'dns';

export function* menuMobileWatcher() {
    yield takeLatest(MenuActionTypes.MOBILE_MENU_CLICK_REQUEST, menuClick);
}

function* menuClick() {
    yield put({type: MenuActionTypes.MOBILE_MENU_CLICK})
}

export function* categoryClickWatcher() {
    yield takeLatest(MenuActionTypes.CATEGORY_CLICK_REQUEST, categoryClick);
}

function* categoryClick(action) {
    let category = action.category
    yield put({type: MenuActionTypes.CATEGORY_CLICK, category})
}

