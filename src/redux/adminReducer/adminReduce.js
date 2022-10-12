import { GET_LIST_PRODUCT, RENDER, SAVE_LIST_RATING, SAVE_LIST_SLIDER, SAVE_LIST_USER, SAVE_LIST_HiSTORY_ORDER } from "./actionTypeAd";
import { adInitalValue } from "./initalValueAd";

export const adminReduce =(state = adInitalValue ,action)=>{
    switch (action.type) {
        case GET_LIST_PRODUCT:
            return {...state,dataProduct:action.payload}
        case RENDER:
            return {...state,reRender:!state.reRender}
    
        case SAVE_LIST_SLIDER:
            return {...state,slideShow:action.payload}
    
        case SAVE_LIST_USER:
            return {...state,infomationUser :action.payload}
    
        case SAVE_LIST_RATING:
            return {...state,ratings :action.payload}
    
        case  SAVE_LIST_HiSTORY_ORDER:
            return {...state,historyOrder :action.payload}
    
        default:
            return {
                ...state
            }
    }
}