import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getAccount } from '../../api/apiMethod';
import { FETCH_ACCOUNT } from './../userReducer/actionType';
import { FetchUrl } from './../../api/apiMethod';


export function* fetchProductAsyn() {

}
export function* fetchAccountAsyn() { }








export function* mySaga() {
    yield takeEvery(FETCH_ACCOUNT, fetchProductAsyn)
}