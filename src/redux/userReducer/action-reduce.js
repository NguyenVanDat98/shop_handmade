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
export const getProductAll = (data) => {
    return {
        type: actionTypes.FETCH_PRODUCT_ALL,
        payload: data,
    }

}
export const isLoadmore = (data) => {
    return {
        type: actionTypes.LOADMORE,
        payload: data
    }

}
export const addToCart = (data) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: data
    }

}
export const SaveCart = (product) => {
    return {
        type: actionTypes.SAVE_TO_CART,
        payload: product
    }

}