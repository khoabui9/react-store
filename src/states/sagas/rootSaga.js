import { put, takeEvery, all } from 'redux-saga/effects';

import {
    getAllProducts,
    getCollectionWatcher
} from "./products.sagas"

export default function* rootSaga() {
    yield all([
        getAllProducts(),
        getCollectionWatcher()
      ])
 }