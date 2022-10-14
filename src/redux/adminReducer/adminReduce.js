import {
  GET_LIST_PRODUCT,
  RENDER,
  SAVE_LIST_RATING,
  SAVE_LIST_SLIDER,
  SAVE_LIST_USER,
  SAVE_LIST_HiSTORY_ORDER,
  SAVE_LIST_ORDER,
  CHANGE_LIST_ORDER,
} from "./actionTypeAd";
import { adInitalValue } from "./initalValueAd";

export const adminReduce = (state = adInitalValue, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      return { ...state, dataProduct: action.payload };
    case RENDER:
      return { ...state, reRender: !state.reRender };

    case SAVE_LIST_SLIDER:
      return { ...state, slideShow: action.payload };

    case SAVE_LIST_USER:
      return { ...state, infomationUser: action.payload };

    case SAVE_LIST_RATING:
      return { ...state, ratings: action.payload };

    case SAVE_LIST_HiSTORY_ORDER:

      return { ...state, historyOrder: action.payload.sort((_,__)=>-1) };

    case SAVE_LIST_ORDER:
        const sortarr= action.payload.sort((_,__)=>-1)
      return { ...state, listOrder: action.payload };
    case CHANGE_LIST_ORDER:
        let temp= state.listOrder.map(_=> {if(_.id===action.payload.id){
            _.time_complete = action.payload.time_complete;
            _.status = action.payload.status
            return _
        }return _})
      return {
        ...state,
        listOrder: temp
      };
    default:
      return {
        ...state,
      };
  }
};
