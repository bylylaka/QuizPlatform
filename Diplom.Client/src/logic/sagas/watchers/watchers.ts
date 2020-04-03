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

function* getMyProfileSimplifiedWatcher() {
  yield takeLatest(
    ActionTypes.GET_MY_PROFILE_SIMPLIFIED,
    Sagas.getMyProfileSimplifiedSaga
  );
}

function* getUserWatcher() {
  yield takeLatest(ActionTypes.GET_USER, Sagas.getUserSaga);
}

function* updateProfileWatcher() {
  yield takeLatest(ActionTypes.UPDATE_PROFILE, Sagas.updateProfileSaga);
}

function* searchWatcher() {
  yield takeLatest(ActionTypes.SEARCH, Sagas.searchSaga);
}

function* createQuizWatcher() {
  yield takeLatest(ActionTypes.CREATE_QUIZ, Sagas.createQuizSaga);
}

export default function* watchers() {
  yield all([
    loginWatcher(),
    registerWatcher(),
    checkAuthorizedWatcher(),
    logoutWatcher(),
    getMyProfileSimplifiedWatcher(),
    getUserWatcher(),
    updateProfileWatcher(),
    searchWatcher(),
    createQuizWatcher()
  ]);
}
