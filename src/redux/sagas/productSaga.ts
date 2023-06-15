import { call, put, takeEvery, takeLatest, } from 'redux-saga/effects';
import * as actions from '../slices/productSlice'
import { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../models/product';
import { AddResponse, ListResponse } from '../../models/common';
import { addProduct, getProducts } from '../services/productService';

function* _addProduct(action: PayloadAction<Product>) {
    try {
        let req = action.payload;
        const response: AddResponse<Product> = yield call(addProduct, req)
        yield put(actions.getProductSuccess(response))
    } catch (error) {
        yield put(actions.getProductFailure());
    }
}
function* _getProducts() {
    try {
        const response: ListResponse<Product> = yield call(getProducts)
        yield put(actions.getProductSuccess(response.products))
    } catch (error) {
        yield put(actions.getProductFailure());
    }
}
function* userSaga() {
    yield takeLatest(actions.addProductRequest.type, _addProduct);
    yield takeEvery(actions.getProductRequest.type, _getProducts);
}
export default userSaga;