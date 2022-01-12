import React from "react";
import styled from "styled-components";
import Search from "../components/Search";

const Navhead = (props) => {
  const { darkMode, setDarkMode, searchWord, setSearchWord } = props;

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <StyledNavbar>
      <div className={darkMode ? "dark_header" : "header"}>
        <div className="toggle_container">
          <div>Dark Mode</div>
          <div className="dark-mode__toggle">
            <div
              onClick={toggleMode}
              className={darkMode ? "toggle toggled" : "toggle"}
            />
          </div>
        </div>
        <div className="title">
          <a href="/">Cryptocurrency Price Tracker </a>
        </div>
        <div className="search_bar">
          <Search searchWord={searchWord} setSearchWord={setSearchWord} />
        </div>
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  .header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
    font-size: 3rem;
  }
  .dark_header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
    font-size: 3rem;
  }
  .title {
    width: 50%;
  }
  .title a {
    text-decoration: none;
  }
  .toggle_container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 10%;
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
    background: #212529;
    border-radius: 50px;
    height: 18px;
    left: 0;
    position: absolute;
    transition: 0.2s;
    width: 20px;
  }
  .toggled {
    left: 18px;
    background: #6c757d;
  }
  .search_bar {
    width: 10%;
  }
  @media screen and (max-width: 995px) {
    .header {
      font-size: 2rem;
    }
    .dark_header {
      font-size: 2rem;
    }
    .toggle_container {
      font-size: 1.2rem;
    }
  }
`;

export default Navhead;
