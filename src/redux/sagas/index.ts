import { all } from 'redux-saga/effects';
import ProductSaga from './productSaga';

export default function* sagas() {
  yield all([ProductSaga()]);
}
