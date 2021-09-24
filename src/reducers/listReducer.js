import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  SEARCH_CRYPTO,
} from "../actions/listAction.js";

const initialState = {
  cryptos: [],
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
    case SEARCH_CRYPTO:
      if (action.payload === "") {
        return state;
      }
      return {
        ...state,
        cryptos: state.cryptos.map((item) => {
          const searchWord = action.payload.toLowerCase();
          return item.name.toLowerCase() === searchWord;
        }),
        isFetching: false,
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;
