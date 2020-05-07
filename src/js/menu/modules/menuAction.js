import {
    
    PUSH_MENU_BUTTON_REQUEST,
   
  } from "../../const/actionTypes";
  
  /** from
   * Actionは、ユーザーが起こすイベントを定義します
   */
  
  export function putNumber(num) {
    return { type: PUSH_MENU_BUTTON_REQUEST, payload: num };
  }
  
  