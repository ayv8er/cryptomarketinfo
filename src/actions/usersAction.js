import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const register = (data) => {
  return (dispatch) => {
    dispatch(loginStart());
    axios
      .post("https://crypto-backend-rjo.herokuapp.com/api/users/register", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(loginSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const login = (data) => {
  return (dispatch) => {
    dispatch(loginStart());
    axios
      .post("https://crypto-backend-rjo.herokuapp.com/api/users/login", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        dispatch(loginSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loginStart = () => {
  return { type: LOGIN_START };
};

export const loginSuccess = (data) => {
  return { type: LOGIN_SUCCESS, payload: data };
};

export const loginFail = (error) => {
  return { type: LOGIN_FAIL, payload: error };
};
