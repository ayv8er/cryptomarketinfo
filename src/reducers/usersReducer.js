import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../actions/usersAction.js";

const initialState = {
  user: [],
  isLoggingIn: false,
  error: "",
  token: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.message,
        isLoggingIn: false,
        error: "",
        token: action.payload.token,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        user: [],
        isLoggingIng: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
