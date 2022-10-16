import {
  GET_LIST_PRODUCT,
  SAVE_LIST_RATING,
  SAVE_LIST_SLIDER,
  SAVE_LIST_USER,
  SAVE_LIST_HiSTORY_ORDER,
  SAVE_LIST_ORDER,
  CHANGE_LIST_ORDER,
  ADD_PRODUCT,
} from "./actionTypeAd";
import { adInitalValue } from "./initalValueAd";

export const adminReduce = (state = adInitalValue, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      return { ...state, dataProducts: action.payload };
    case ADD_PRODUCT:
      return {
        ...state,
        dataProducts: [...state.dataProducts, action.payload],
      };
    case SAVE_LIST_SLIDER:
      return { ...state, slideShow: action.payload };

    case SAVE_LIST_USER:
      return { ...state, infomationUser: action.payload };

    case SAVE_LIST_RATING:
      return { ...state, ratings: action.payload };

    case SAVE_LIST_HiSTORY_ORDER:
      return { ...state, historyOrder: action.payload.sort((_, __) => -1) };

    case SAVE_LIST_ORDER:
      action.payload.sort((_, __) => -1);
      return { ...state, listOrder: action.payload };
    case CHANGE_LIST_ORDER:
      let temp = state.listOrder.map((_) => {
        if (_.id === action.payload.id) {
          _.time_complete = action.payload.time_complete;
          _.status = action.payload.status;
          return _;
        }
        return _;
      });
      return {
        ...state,
        listOrder: temp,
      };
    default:
      return {
        ...state,
      };
  }
};
