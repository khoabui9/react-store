import firebase from 'firebase/app';
import 'firebase/firestore';
import { put, take, call, all, takeLatest, fork, takeEvery } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { browserHistory } from 'react-router';
import * as ProductActionTypes from '../actiontypes/products.actiontypes';
import { push } from 'react-router-redux';
import { resolve } from 'dns';

//firestore config
const config = {
    apiKey: "AIzaSyCNNVWIjhklacrDedF33OaxVZdQlbp8AiI",
    authDomain: "kb-store.firebaseapp.com",
    projectId: "kb-store",
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

export function* getCollectionWatcher() {
    yield takeLatest(ProductActionTypes.INIT_COLLECTION_REQUEST, getCollection);
}

function* getCollection() {
    var products = db.collection("Category")
    var data = yield call(function() {
      return new Promise(function(resolve, reject) {
        products.get().then(function(querySnapshot) {
            let data = []
            querySnapshot.forEach((doc) => {
                data = [...data, doc.id]
            });
            resolve(data)
        })
      })
    })
    yield put({type: ProductActionTypes.SET_CATEGORY, data})
}

export function* getAllProducts() {
    yield takeLatest(ProductActionTypes.INIT_REQUEST, init);
}

function* init() {
    var products = db.collection("Products")
    var data = yield call(function() {
      return new Promise(function(resolve, reject) {
        products.get().then(function(querySnapshot) {
            let data = []
            querySnapshot.forEach((doc) => {
                data = [...data, doc.data()]
            });
            resolve(data)
        })
      })
    })
    yield put({type: ProductActionTypes.SET_PRODUCTS, data})
}