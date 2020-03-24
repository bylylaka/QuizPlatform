import { takeLatest, all } from "@redux-saga/core/effects";
import ActionTypes from "../../actionTypes/actionTypes";
import { Sagas } from "../sagas/sagas";

function* loginWatcher() {
  yield takeLatest(ActionTypes.LOGIN, Sagas.loginSaga);
}

function* registerWatcher() {
  yield takeLatest(ActionTypes.REGISTER, Sagas.registerSaga);
}

function* logoutWatcher() {
  yield takeLatest(ActionTypes.LOGOUT, Sagas.logoutSaga);
}

function* checkAuthorizedWatcher() {
  yield takeLatest(ActionTypes.CHECK_AUTHORIZED, Sagas.checkAuthorizedSaga);
}

function* getProfileWatcher() {
  yield takeLatest(ActionTypes.GET_PROFILE, Sagas.getProfileSaga);
}

export default function* watchers() {
  yield all([
    loginWatcher(),
    registerWatcher(),
    checkAuthorizedWatcher(),
    logoutWatcher(),
    getProfileWatcher()
  ]);
}
