import { userInital } from "./initalValue"
import * as actionTypes from "./actionType";
export const userReduce = (state = userInital, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ACCOUNT:
            console.log(action.payload);
            return {
                ...state, accountLogin: action.payload
            };


        default:
            return { ...state }
    }
}