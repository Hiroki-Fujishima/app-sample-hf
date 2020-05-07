import { all } from 'redux-saga/effects';
import calcController from '../menu/controllers/menuController';

export default function* routeSaga() {
   yield all([menuController()]);
}