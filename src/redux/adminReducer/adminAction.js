import { GET_LIST_PRODUCT, RENDER, SAVE_LIST_SLIDER } from "./actionTypeAd"

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