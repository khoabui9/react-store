import { put, take, call, all, takeLatest, fork, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { browserHistory } from 'react-router';
import * as CartActionTypes from '../actiontypes/cart.actiontypes';
import { push } from 'react-router-redux';
import { resolve } from 'dns';

export function* addToCartWatcher() {
    yield takeLatest(CartActionTypes.ADD_TO_CART_REQUEST, addToCart);
}

function* addToCart() {
    yield put({type: CartActionTypes.ADD_TO_CART})
}


export function* removeToCartWatcher() {
    yield takeLatest(CartActionTypes.REMOVE_FROM_CART_REQUEST, removeToCart);
}

function* removeToCart() {
    yield put({type: CartActionTypes.REMOVE_FROM_CART})
}



