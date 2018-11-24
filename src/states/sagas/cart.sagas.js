import { put, take, call, all, takeLatest, fork, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { browserHistory } from 'react-router';
import * as CartActionTypes from '../actiontypes/cart.actiontypes';
import { push } from 'react-router-redux';
import { resolve } from 'dns';
import JSON from 'circular-json'

export function* addToCartWatcher() {
    yield takeLatest(CartActionTypes.ADD_TO_CART_REQUEST, addToCart);
}

function* addToCart(action) {
    var product = action.product
    product.amount = 1;
    let check = false;
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts"))
    cartProducts = cartProducts ? cartProducts : []
    if (cartProducts)
        cartProducts.map((item) => {
            if (item.id === product.id) {
                item.amount += product.amount
                check = true
            }
        })
    if (!check) {
        cartProducts = [...cartProducts, product]
        check = false;
    }
    let totalCartCount = cartProducts.reduce((total, e) => {
        return total + e.amount
    },0)
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
    localStorage.setItem("cartCount", totalCartCount)
    yield put({type: CartActionTypes.ADD_TO_CART, product})
}


export function* removeFromCartWatcher() {
    yield takeLatest(CartActionTypes.REMOVE_FROM_CART_REQUEST, removeFromCart);
}

function* removeFromCart(action) {
    let product = action.product
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts"))
    var arr = cartProducts.filter(item => item.id !== product.id)
    localStorage.setItem("cartProducts", JSON.stringify(arr))
    localStorage.setItem("cartCount", arr.length)
    yield put({type: CartActionTypes.REMOVE_FROM_CART, product})
}

export function* deleteAllToCartWatcher() {
    yield takeLatest(CartActionTypes.DELETE_ALL_CART_REQUEST, deleteAll);
}

function* deleteAll(action) {
    yield put({type: CartActionTypes.DELETE_ALL_CART})
}

export function* updateAmountWatcher() {
    yield takeLatest(CartActionTypes.UPDATE_AMOUNT_REQUEST, updateAmount);
}

function* updateAmount(action) {
    let product = action.payload.product
    let increment = action.payload.increment
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts"))

    cartProducts.map((item) => {
        if (item.id === product.id) {
            item.amount += increment
            if (item.amount < 1) {
                item.amount = 1
            }
        }
    })

    let totalCartCount = cartProducts.reduce((total, e) => {
        return total + e.amount
    },0)
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
    localStorage.setItem("cartCount", totalCartCount)
    yield put({type: CartActionTypes.UPDATE_AMOUNT, cartProducts})
}


