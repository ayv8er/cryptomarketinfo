import React from "react";
import styled from "styled-components";
import { Navbar } from "reactstrap";

const Navhead = (props) => {
  const { darkMode, setDarkMode } = props;

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <StyledNavbar>
      <Navbar className={darkMode ? "darkHeader" : "header"}>
        <div className="title">
          <a href="/">Cryptocurrency Price Tracker </a>
        </div>

        <div className="toggle_container">
          <div>Dark Mode</div>
          <div className="dark-mode__toggle">
            <div
              onClick={toggleMode}
              className={darkMode ? "toggle toggled" : "toggle"}
            />
          </div>
        </div>
      </Navbar>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  .header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 15vh;
    align-items: center;
    font-size: 3rem;
  }
  .darkHeader {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 15vh;
    align-items: center;
    background-color: #313843;
    font-size: 3rem;
  }
  .title {
    width: 60%;
  }
  .title a {
    text-decoration: none;
  }
  .toggle_container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 30%;
    height: 100%;
    font-size: 1.6rem;
  }
  .dark-mode__toggle {
    background: white;
    border-radius: 50px;
    border: 1px solid black;
    height: 20px;
    position: relative;
    width: 40px;
  }
  .toggle {
    background: #313843;
    border-radius: 50px;
    height: 18px;
    left: 0;
    position: absolute;
    transition: 0.2s;
    width: 20px;
  }
  .toggled {
    left: 18px;
    background: #a1b2c3;
  }
`;

export default Navhead;
