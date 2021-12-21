import React from "react";

const Navbar = (props) => {
  const { darkMode, setDarkMode } = props;

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className={darkMode ? "darkHeader" : "header"}>
      <div>
        <h1>Cryptocurrency Price Tracker</h1>
      </div>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
