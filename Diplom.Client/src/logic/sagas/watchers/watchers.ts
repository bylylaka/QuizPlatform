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

function* getQuizWatcher() {
  yield takeLatest(ActionTypes.GET_QUIZ, Sagas.getQuizSaga);
}

function* createQuizWatcher() {
  yield takeLatest(ActionTypes.CREATE_QUIZ, Sagas.createQuizSaga);
}

function* answerQuizWatcher() {
  yield takeLatest(ActionTypes.ANSWER_QUIZ, Sagas.answerQuizSaga);
}

function* loadUserQuizListWatcher() {
  yield takeLatest(ActionTypes.LOAD_USER_QUIZ_LIST, Sagas.loadUserQuizListSaga);
}

function* loadQuizStatisticWatcher() {
  yield takeLatest(
    ActionTypes.LOAD_QUIZ_STATISTIC,
    Sagas.loadQuizStatisticSaga
  );
}

function* filterQuizStatisticWatcher() {
  yield takeLatest(
    ActionTypes.FILTER_QUIZ_STATISTIC,
    Sagas.filterQuizStatisticSaga
  );
}

function* getSubsctiptionStatusWatcher() {
  yield takeLatest(
    ActionTypes.GET_SUBSCRIPTION_STATUS,
    Sagas.getSubsctiptionStatusSaga
  );
}

function* changeSubsctiptionStatusWatcher() {
  yield takeLatest(
    ActionTypes.CHANGE_SUBSCRIPTION_STATUS,
    Sagas.changeSubsctiptionStatusSaga
  );
}

function* loadSiteNotificationsWatcher() {
  yield takeLatest(
    ActionTypes.LOAD_SITE_NOTIFICATOINS,
    Sagas.loadSiteNotificationsSaga
  );
}

function* updateNotificationsOpenedStatusWatcher() {
  yield takeLatest(
    ActionTypes.UPDATE_NOTIFICATIONS_OPENED_STATUS,
    Sagas.updateNotificationsOpenedStatusSaga
  );
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
    getQuizWatcher(),
    createQuizWatcher(),
    answerQuizWatcher(),
    loadUserQuizListWatcher(),
    loadQuizStatisticWatcher(),
    filterQuizStatisticWatcher(),
    getSubsctiptionStatusWatcher(),
    changeSubsctiptionStatusWatcher(),
    loadSiteNotificationsWatcher(),
    updateNotificationsOpenedStatusWatcher(),
  ]);
}
