import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import AppSnackbarContainer from "./GUI/shared/AppSnackbar/AppSnackbarContainer";
import createSagaMiddleware from "redux-saga";
import SagasRunner from "./logic/sagas/sagasRunner";
import HttpInterceptor from "./HttpInterceptor";
import RootReducer from "./logic/reducers/rootReducer";
import StartNavigationPageContainer from "./GUI/StartNavagationPage/StartNavigationPageContainer";

const sagaMiddleware = createSagaMiddleware();
const mainStore = createStore(RootReducer, applyMiddleware(sagaMiddleware));
SagasRunner.run(sagaMiddleware);

HttpInterceptor.initInterceptors(mainStore);

const Main: FunctionComponent = () => {
  return (
    <Provider store={mainStore}>
      <StartNavigationPageContainer />
      <AppSnackbarContainer />
    </Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
