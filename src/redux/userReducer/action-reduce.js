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
export const SaveCartReview = (product) => {
    return {
        type: actionTypes.SAVE_TO_CART_REVIEW,
        payload: product
    }

}
export const SelectItem = (product) => {
    product.quantity = 1
    return {
        type: actionTypes.SELECT_CART,
        payload: product
    }
}
export const DeleteItem = (product) => {
    return {
        type: actionTypes.DELETE_ITEM,
        payload: product
    }
}
export const ChangeQuantityItem = (product) => {
    switch (product.temp) {
        case "minus":
            if (product.item.quantity > 1) {
                product.item.quantity -= 1
            }
            break;
        case "plus":
            product.item.quantity += 1
            break;
        default:
            return;
    }
    return {
        type: actionTypes.CHANGE_QUANTITY_ITEM,
        payload: product.item
    }
}