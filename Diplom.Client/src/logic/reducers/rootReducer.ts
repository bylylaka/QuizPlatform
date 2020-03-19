import { combineReducers } from "redux";
import { reducer as reduxFormReducer, FormReducer } from "redux-form";
import Reducer from "./reducer";
import { State as ReducerState } from "./reducer";

export interface RootState {
  form: any;
  reducer: ReducerState;
}

export const RootReducer = combineReducers<RootState>({
  form: reduxFormReducer,
  reducer: Reducer
});

export default RootReducer;
