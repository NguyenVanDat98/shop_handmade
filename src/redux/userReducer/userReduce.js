import { userInital } from "./initalValue"
import * as actionTypes from "./actionType";


export const userReduce = (state = userInital, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ACCOUNT:
            return {
                ...state, accountLogin: action.payload
            };
        case actionTypes.FETCH_SLIDE:

            return {
                ...state, slider: action.payload
            }

        case actionTypes.FETCH_PRODUCT:
            return {
                ...state, listProduct: action.payload
            }
        case actionTypes.FETCH_PRODUCT_ALL:
            return {
                ...state, listProductAll: action.payload
            }
        case actionTypes.LOADMORE:

            return {
                ...state, isLoadmore: action.payload
            }
        case actionTypes.SAVE_TO_CART:

            return {
                ...state, cart: action.payload
            }
        case actionTypes.SELECT_CART:
            return {
                ...state, stepPayment: [...state.stepPayment, action.payload]
            }
        default:
            return { ...state }
    }
}