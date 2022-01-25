import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../actions/userAction.js";

const initialState = {
  user: [],
  isLoggingIn: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: "",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggingIn: false,
        error: "",
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
