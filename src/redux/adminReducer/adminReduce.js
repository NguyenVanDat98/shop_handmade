import { GET_LIST_PRODUCT, RENDER, SAVE_LIST_SLIDER } from "./actionTypeAd";
import { adInitalValue } from "./initalValueAd";

export const adminReduce =(state = adInitalValue ,action)=>{
    switch (action.type) {
        case GET_LIST_PRODUCT:
            return {...state,dataProduct:action.payload}
        case RENDER:
            return {...state,reRender:!state.reRender}
    
        case SAVE_LIST_SLIDER:
            return {...state,slideShow:action.payload}
    
        default:
            return {
                ...state
            }
    }
}