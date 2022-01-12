import React, { useState } from "react";
import { connect } from "react-redux";

import Navhead from "./components/Navhead";
import List from "./components/List";
import Favorites from "./components/Favorites";

import useDarkMode from "./hooks/useDarkMode";
import styled from "styled-components";

function App(props) {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [searchWord, setSearchWord] = useState("");

  return (
    <StyledBody>
      <div className={darkMode ? "dark-mode App" : "App"}>
        <Navhead
          searchWord={searchWord}
          setSearchWord={setSearchWord}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <div className="body_container">
          {props.favorites.length > 0 && <Favorites darkMode={darkMode} />}
          <List searchWord={searchWord} darkMode={darkMode} />
        </div>
      </div>
    </StyledBody>
  );
}

const StyledBody = styled.div`
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
  .dark-mode {
    color: #fff;
    background-color: #212529;
  }
  .dark-mode a {
    color: #fff;
  }
  .body_container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
  }
`;

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
  };
};

export default connect(mapStateToProps)(App);
