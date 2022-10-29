import { createStore, combineReducers } from "redux";
import { LoginReducer } from "./login/loginReducer";
import { UserReducer } from "./user/userReducer";

const Reducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
});

export const ReduxStore = createStore(Reducer);
