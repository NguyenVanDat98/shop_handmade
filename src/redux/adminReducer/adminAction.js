import { GET_LIST_PRODUCT, RENDER, SAVE_LIST_SLIDER, SAVE_LIST_USER,SAVE_LIST_RATING, SAVE_LIST_HiSTORY_ORDER,SAVE_LIST_ORDER, CHANGE_LIST_ORDER } from "./actionTypeAd"

export const SetDataProduct =(data)=>{
    return {
        type : GET_LIST_PRODUCT,
        payload :data
    }
}
export const reRender =()=>{
    return {
        type : RENDER,
    }
}
export const saveSlideShow =(data)=>{
    return {
        type : SAVE_LIST_SLIDER,
        payload: data
    }
}
export const saveListUser =(data)=>{
    return {
        type : SAVE_LIST_USER,
        payload: data
    }
}
export const listRating =(data)=>{
    return {
        type : SAVE_LIST_RATING,
        payload: data
    }
}
export const historyOrder =(data)=>{
    return {
        type : SAVE_LIST_HiSTORY_ORDER,
        payload: data
    }
}
export const saveOrder =(data)=>{
    return {
        type : SAVE_LIST_ORDER,
        payload: data
    }
}
export const ChangeOrder =(data)=>{
    return {
        type : CHANGE_LIST_ORDER,
        payload: data
    }
}
