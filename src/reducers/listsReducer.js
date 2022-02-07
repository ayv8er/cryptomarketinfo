import {
  FETCH_START,
  FETCH_SUCCESS,
  ADD_FETCH_SUCCESS,
  FETCH_FAIL,
} from "../actions/listsAction.js";

const initialState = {
  cryptos: [],
  page: 0,
  isFetching: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        cryptos: action.payload,
        page: 1,
        isFetching: false,
        error: "",
      };
    case ADD_FETCH_SUCCESS:
      return {
        cryptos: [...state.cryptos, ...action.payload],
        isFetching: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        cryptos: [],
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
