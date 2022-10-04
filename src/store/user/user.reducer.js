import { USER_ACTION_TYPE } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

//since no hook is assigned, you need to specify the current state
export const userReducer = (state = INITIAL_STATE, action) => {
  //two possible outcome of action
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
