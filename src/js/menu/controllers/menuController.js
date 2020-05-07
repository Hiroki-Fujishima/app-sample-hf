import { takeEvery, fork } from "redux-saga/effects";
import {
  PUSH_MENU_BUTTON_REQUEST,
} from "../../const/actionTypes";
import menuService from "../services/menuService";



function* menu(action) {
  yield fork(menuService.run, action);
}

export default function* () {
  yield takeEvery(PUSH_MENU_BUTTON_REQUEST, menuButton);
}

