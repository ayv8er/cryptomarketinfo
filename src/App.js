import React from "react";

import Navhead from "./components/Navhead";
import List from "./components/List";
import Favorites from "./components/Favorites";

import useDarkMode from "./hooks/useDarkMode";
import styled from "styled-components";

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  return (
    <StyledBody>
      <section className={darkMode ? "dark-mode App" : "App"}>
        <Navhead darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="bodyContainer">
          <Favorites darkMode={darkMode} />
          <List darkMode={darkMode} />
        </div>
      </section>
    </StyledBody>
  );
}

const StyledBody = styled.div`
  .App {
    font-family: sans-serif;
    text-align: center;
    width: 100vw;
    display: flex;
    flex-flow: column nowrap;
  }
  .App a {
    color: black;
  }
  .dark-mode {
    color: #fff;
    background-color: #313843;
  }
  .dark-mode a {
    color: #fff;
  }
  .bodyContainer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;

export default App;
