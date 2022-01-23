import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    axiosWithAuth();
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  });

  return <div></div>;
};

export default Logout;
