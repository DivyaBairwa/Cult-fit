import { LOG_IN, LOG_OUT } from "./actionTypes";
const token = sessionStorage.getItem("Auth Token");
let init = {
  token: token || "",
  log: token && true,
};

export const LoginReducer = (store = init, { type }) => {
  switch (type) {
    case LOG_IN:
      return {
        token: sessionStorage.getItem("Auth Token"),
        log: true,
      };
    case LOG_OUT: {
      sessionStorage.removeItem("Auth Token");
      return {
        token: "",
        log: false,
      };
    }
    default:
      return store;
  }
};
