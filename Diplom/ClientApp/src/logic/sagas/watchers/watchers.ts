import { takeLatest, all } from "@redux-saga/core/effects";
import ActionTypes from "../../actionTypes/actionTypes";
import { Sagas } from "../sagas/sagas";

function* loginWatcher() {
  yield takeLatest(ActionTypes.LOGIN, Sagas.loginSaga);
}

function* registerWatcher() {
  yield takeLatest(ActionTypes.REGISTER, Sagas.registerSaga);
}

export default function* watchers() {
  yield all([loginWatcher(), registerWatcher()]);
}
