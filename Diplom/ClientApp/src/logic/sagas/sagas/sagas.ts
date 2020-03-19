import Actions from "../../actions/actions";
import { call, put } from "@redux-saga/core/effects";
import Apis from "../apis/apis";
import { stopSubmit } from "redux-form";
import FormNames from "../../../GUI/shared/Form/FormNames";
import Axios from "axios";

export const Sagas = {
  *loginSaga(action: ReturnType<typeof Actions.login>) {
    try {
      const response = yield call(Apis.login, action.values);
      console.log(response);
    } catch (e) {
      yield put(
        stopSubmit(FormNames.LoginForm.name, {
          errorMessage: "Неверная комбинация емейла или пароля."
        })
      );
    }
  },

  *registerSaga(action: ReturnType<typeof Actions.register>) {
    try {
      const response = yield call(Apis.register, action.values);
      console.log(response);
      const a = yield call(Apis.IsAuthorized);
      console.log(a);
    } catch (e) {
      yield put(
        stopSubmit(FormNames.LoginForm.name, {
          errorMessage: "Неверная комбинация емейла или пароля."
        })
      );
    }
  }
};
