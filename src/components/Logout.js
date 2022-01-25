import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  });

  return <div></div>;
};

export default Logout;
