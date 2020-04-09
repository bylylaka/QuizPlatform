import Actions from "../../actions/actions";
import { call, put, select } from "@redux-saga/core/effects";
import Apis from "../apis/apis";
import { stopSubmit } from "redux-form";
import FormNames from "../../../GUI/shared/Form/FormNames";
import { AxiosResponse } from "axios";
import User from "../../../shared/models/user/User";
import { AppSnackbarMessage } from "../../../GUI/shared/AppSnackbar/props";
import ProfileSimplifiedViewModel from "../../../shared/models/profile/ProfileSimplifiedViewModel";
import UserSimplified from "../../../shared/models/user/UserSimplified";
import Quiz from "../../../shared/models/quiz/Quiz";
import QuizSearch from "../../../shared/models/quiz/QuizSearch";
import customHistory from "../../../GUI/routes/CustomHistory";
import Selectors from "../selectors/selectors";

export const Sagas = {
  *loginSaga(action: ReturnType<typeof Actions.login>) {
    const response: AxiosResponse<ProfileSimplifiedViewModel> = yield call(
      Apis.login,
      action.values
    );
    if (response.status != 200) {
      yield put(
        stopSubmit(FormNames.LoginForm.name, {
          errorMessage: "Неверная комбинация емейла или пароля.",
        })
      );
    } else {
      window.location.href = `/user/${response.data.id}`;
    }
  },

  *registerSaga(action: ReturnType<typeof Actions.register>) {
    const response: AxiosResponse<ProfileSimplifiedViewModel> = yield call(
      Apis.register,
      action.values
    );
    if (response.status != 200) {
      yield put(
        stopSubmit(FormNames.RegistrationForm.name, {
          errorMessage: "Пользователь с таким емейлом уже существует.",
        })
      );
    } else {
      window.location.href = `/user/${response.data.id}`;
    }
  },

  *logoutSaga(action: ReturnType<typeof Actions.logout>) {
    const response: AxiosResponse = yield call(Apis.logout);
    window.location.reload();
  },

  *getMyProfileSimplifiedSaga(
    action: ReturnType<typeof Actions.getMyProfileSimplified>
  ) {
    const response: AxiosResponse<ProfileSimplifiedViewModel> = yield call(
      Apis.getMyProfileSimplified
    );
    yield put(Actions.setMyProfileSimplified(response.data));
  },

  *getUserSaga(action: ReturnType<typeof Actions.getUser>) {
    const response: AxiosResponse<User> = yield call(Apis.getUser, action.id);
    yield put(Actions.setUser(response.data));
  },

  *updateProfileSaga(action: ReturnType<typeof Actions.updateProfile>) {
    let formData = new FormData();

    for (var key in action.profile) {
      formData.append(key, (action.profile as any)[key]);
    }

    const response: AxiosResponse<User> = yield call(
      Apis.updateProfile,
      formData as any
    );

    const snackbarMessage = new AppSnackbarMessage(
      "Данные успешно обновлены.",
      "success"
    );
    yield put(Actions.setAppSnackbarMessage(snackbarMessage));
  },

  *searchSaga(action: ReturnType<typeof Actions.search>) {
    if (!action.string) {
      yield put(Actions.setSearchUsers([]));
      return;
    }
    const responseUsers: AxiosResponse<UserSimplified[]> = yield call(
      Apis.searchUsers,
      action.string
    );
    const responseQuizes: AxiosResponse<QuizSearch[]> = yield call(
      Apis.searchQuizes,
      action.string
    );
    yield put(Actions.setSearchUsers(responseUsers.data));
    yield put(Actions.setSearchQuizes(responseQuizes.data));
  },

  *getQuizSaga(action: ReturnType<typeof Actions.getQuiz>) {
    const response: AxiosResponse<Quiz> = yield call(Apis.getQuiz, action.id);
    if (response.status != 200) {
      return;
    }
    yield put(Actions.setQuiz(response.data));
  },

  *createQuizSaga(action: ReturnType<typeof Actions.createQuiz>) {
    const response: AxiosResponse<boolean> = yield call(
      Apis.createQuiz,
      action.quiz
    );

    let message = new AppSnackbarMessage("Опрос успешно создан!", "success");
    yield put(Actions.setAppSnackbarMessage(message));

    const profile: ProfileSimplifiedViewModel = yield select(
      Selectors.myProfileSimplified
    );
    customHistory.push(`/user/${profile.id}`);
  },

  *answerQuizSaga(action: ReturnType<typeof Actions.answerQuiz>) {
    const response: AxiosResponse = yield call(Apis.answerQuiz, action.answers);
    const snackbarMessage = new AppSnackbarMessage(
      "Данные успешно обновлены.",
      "success"
    );
    yield put(Actions.setAppSnackbarMessage(snackbarMessage));
  },

  *checkAuthorizedSaga(action: ReturnType<typeof Actions.checkAuthorized>) {
    const response: AxiosResponse<boolean> = yield call(Apis.IsAuthorized);
    yield put(Actions.setAuthorized(response.data));
  },

  *loadUserQuizListSaga(action: ReturnType<typeof Actions.loadUserQuizList>) {
    const response: AxiosResponse<Quiz[]> = yield call(
      Apis.getUserQuizList,
      action.userId
    );
    yield put(Actions.setUserQuizList(response.data));
  },
};
