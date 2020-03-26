import Actions from "../../actions/actions";
import { call, put } from "@redux-saga/core/effects";
import Apis from "../apis/apis";
import { stopSubmit } from "redux-form";
import FormNames from "../../../GUI/shared/Form/FormNames";
import { AxiosResponse } from "axios";
import Profile from "../../../shared/models/user/User";
import { AppSnackbarMessage } from "../../../GUI/shared/AppSnackbar/props";

export const Sagas = {
  *loginSaga(action: ReturnType<typeof Actions.login>) {
    try {
      const response: AxiosResponse = yield call(Apis.login, action.values);
      window.location.href = "/profile";
    } catch (e) {
      yield put(
        stopSubmit(FormNames.LoginForm.name, {
          errorMessage: "Неверная комбинация емейла или пароля."
        })
      );
    }
  },

  *registerSaga(action: ReturnType<typeof Actions.register>) {
    const response: AxiosResponse = yield call(Apis.register, action.values);
    if (response.status != 200) {
      yield put(
        stopSubmit(FormNames.RegistrationForm.name, {
          errorMessage: "Пользователь с таким емейлом уже существует."
        })
      );
    } else {
      window.location.href = "/profile";
    }
  },

  *logoutSaga(action: ReturnType<typeof Actions.logout>) {
    const response: AxiosResponse = yield call(Apis.logout);
    window.location.reload();
  },

  *getProfileSaga(action: ReturnType<typeof Actions.getProfile>) {
    const response: AxiosResponse<Profile> = yield call(Apis.getProfile);
    yield put(Actions.setProfile(response.data));
  },

  *updateProfileSaga(action: ReturnType<typeof Actions.updateProfile>) {
    let formData = new FormData();

    for (var key in action.profile) {
      formData.append(key, (action.profile as any)[key]);
    }

    const response: AxiosResponse<Profile> = yield call(
      Apis.updateProfile,
      formData as any
    );

    const snackbarMessage = new AppSnackbarMessage(
      "Данные успешно обновлены.",
      "success"
    );
    yield put(Actions.setAppSnackbarMessage(snackbarMessage));
  },

  *checkAuthorizedSaga(action: ReturnType<typeof Actions.checkAuthorized>) {
    const response: AxiosResponse<boolean> = yield call(Apis.IsAuthorized);
    yield put(Actions.setAuthorized(response.data));
  }
};
