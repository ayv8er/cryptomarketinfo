import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_FETCH_SUCCESS = "ADD_FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getCoinData = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      )
      .then((res) => {
        dispatch(fetchSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addCoinData = (page) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${page}&page=1&sparkline=false`
      )
      .then((res) => {
        dispatch(addFetchSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESS, payload: data };
};

export const addFetchSuccess = (data) => {
  return { type: ADD_FETCH_SUCCESS, payload: data };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};
