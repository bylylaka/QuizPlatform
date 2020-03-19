import React, { FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";
import AppRouter from "./GUI/AppRouter";
import Axios from "axios";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import AppSnackbarContainer from "./GUI/shared/AppSnackbar/AppSnackbarContainer";
import createSagaMiddleware from "redux-saga";
import SagasRunner from "./logic/sagas/sagasRunner";
import HttpInterceptor from "./HttpInterceptor";
import RootReducer from "./logic/reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();
const mainStore = createStore(RootReducer, applyMiddleware(sagaMiddleware));
SagasRunner.run(sagaMiddleware);

// Axios.defaults.baseURL = "api";
HttpInterceptor.initInterceptors(mainStore);

const Main: FunctionComponent = () => {
  return (
    <Provider store={mainStore}>
      <AppRouter />
      <AppSnackbarContainer />
    </Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
