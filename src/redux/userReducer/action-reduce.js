import * as actionTypes from './actionType';
export const fetchAccount = (data) => {
    return {
        type: actionTypes.FETCH_ACCOUNT,
        payload: data,
    }

}
export const notifyError = (data) => {
    return {
        type: actionTypes.FETCH_ACCOUNT,
        payload: data,
    }

}