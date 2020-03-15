import Actions from "../../actions/actions";
import { call, put, select } from "@redux-saga/core/effects";
import Apis from "../apis/apis";
import { AxiosResponse } from "axios";
import { AppSnackbarMessage } from "../../../GUI/shared/AppSnackbar/props";

export const Sagas = {
  //   *getOrganisationStructureSaga() {
  //     yield put(Actions.setOrganisationStructureIsLoading(true));
  //     const response: AxiosResponse<BuildingSimplified[]> = yield call(
  //       Apis.getOrganisationStructure
  //     );
  //     yield put(Actions.setOrganisationStructure(response.data));
  //     yield put(Actions.setOrganisationStructureIsLoading(false));
  //   }
};
