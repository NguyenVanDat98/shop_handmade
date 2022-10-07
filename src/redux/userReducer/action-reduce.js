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
export const getSlider = (data) => {
    return {
        type: actionTypes.FETCH_SLIDE,
        payload: data,
    }
}

export const getProduct = (data) => {
    return {
        type: actionTypes.FETCH_PRODUCT,
        payload: data,
    }

}