import Actions from "../../actions/actions";
import { call, put } from "@redux-saga/core/effects";
import Apis from "../apis/apis";
import { stopSubmit } from "redux-form";
import FormNames from "../../../GUI/shared/Form/FormNames";
import { AxiosResponse } from "axios";

export const Sagas = {
  *loginSaga(action: ReturnType<typeof Actions.login>) {
    try {
      const response: AxiosResponse = yield call(Apis.login, action.values);
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
          errorMessage: "Неверная комбинация емейла или пароля."
        })
      );
    }
  },

  *checkAuthorized(action: ReturnType<typeof Actions.checkAuthorized>) {
    const response: AxiosResponse<boolean> = yield call(Apis.IsAuthorized);
    yield put(Actions.setAuthorized(response.data));
  }
};
