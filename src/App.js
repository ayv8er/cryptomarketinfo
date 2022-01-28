import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navhead from "./components/Navhead";
import Body from "./components/Body";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Favorites from "./components/Favorites";
import RequireAuth from "./utils/requireAuth";

import useDarkMode from "./hooks/useDarkMode";

import styled from "styled-components";
import { Container } from "react-bootstrap";

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledApp>
      <Container fluid="true" className={darkMode ? "dark-mode App" : "App"}>
        <Navhead darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Body darkMode={darkMode} />} />
          <Route
            path="/favorites"
            element={
              <RequireAuth redirectTo="/login">
                <Favorites darkMode={darkMode} />
              </RequireAuth>
            }
          />
          <Route
            path="/login"
            element={
              <Login
                darkMode={darkMode}
                togglePassword={togglePassword}
                showPassword={showPassword}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                darkMode={darkMode}
                togglePassword={togglePassword}
                showPassword={showPassword}
              />
            }
          />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Container>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  .App {
    font-family: sans-serif;
    text-align: center;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    background-color: #f8f9fa;
    overflow: scroll;
  }
  .App a {
    color: black;
  }
  .App button {
    color: black;
  }
  .dark-mode {
    color: #fff;
    background-color: #212529;
  }
  .dark-mode a {
    color: #fff;
  }
  .dark-mode button {
    color: #fff;
  }
  .body_container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
  }
`;

export default App;
