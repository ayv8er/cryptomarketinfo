import React from "react";

import Navbar from "./components/Navbar";
import List from "./components/List";
import Favorites from "./components/Favorites";

import useDarkMode from "./hooks/useDarkMode";

import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  return (
    <section className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="bodyContainer">
        <Favorites />
        <List />
      </div>
    </section>
  );
}

export default App;
