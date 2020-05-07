import {
    PUSH_MENU_BUTTON_SUCCESS,
  } from "../../const/actionTypes";
  import { MENU_PARAM } from "../../const/menuParam";
  
  const initialState = {
  
    num: '',
    
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case PUSH_MENU_BUTTON_SUCCESS:
        return {
          ...state,
          ...action.payload,
        };
  
      case PUSH_PLUS_BUTTON_REQUEST:
        return {
          ...state,
          operator: CALC_PARAM.PLUS,
        };
        
      default:
        return state;
    }
  }
  