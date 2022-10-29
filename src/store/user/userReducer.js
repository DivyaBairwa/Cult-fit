import { SET_USER, REMOVE_USER, UPDATE_USER } from "./actionTypes";

let init = {
  cart: [],
  email: null,
  mobile: null,
  name: null,
  profile_image: null,
};

export const UserReducer = (store = init, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return payload;
    case REMOVE_USER:
      return init;
    case UPDATE_USER:
      return payload;
    default:
      return store;
  }
};
