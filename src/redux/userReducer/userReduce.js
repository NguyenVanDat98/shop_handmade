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
        default:
            return { ...state }
    }
}