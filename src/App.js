import React from "react";

import List from "./components/List";
import Favorites from "./components/Favorites";

import "./App.css";

function App() {
  return (
    <div>
      <nav className="header">
        <h1>Cryptocurrency Price Tracker</h1>
      </nav>
      <div className="bodyContainer">
        <div className="favorites">
          <Favorites />
        </div>
        <div className="list">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
