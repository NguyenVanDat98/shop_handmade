import {takeEvery} from 'redux-saga/effects'
import { FETCH_ACCOUNT } from './../userReducer/actionType';
export function* fetchProductAsyn() {
}
export function* fetchAccountAsyn() { }


export function* mySaga() {
    yield takeEvery(FETCH_ACCOUNT, fetchProductAsyn)
}