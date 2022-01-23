import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  Navbar,
  Container,
  Row,
  Col,
  Button,
  NavDropdown,
} from "react-bootstrap";

const Navhead = (props) => {
  const { isLoggedIn, darkMode, setDarkMode } = props;

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <StyledNavbar>
      <Navbar sticky="top">
        <Container fluid>
          <Row className="nav_row">
            <Col sm={2} className="nav_item_container">
              <div>Dark Mode</div>
              <div className="dark-mode__toggle">
                <div
                  onClick={toggleMode}
                  className={darkMode ? "toggle toggled" : "toggle"}
                />
              </div>
            </Col>
            <Col sm={7} className={darkMode ? "dark" : null}>
              <Navbar.Brand href="/">Crypto Market Cap</Navbar.Brand>
            </Col>
            {isLoggedIn ? (
              <Col sm={1}>
                <NavDropdown
                  className="dropdown btn btn-secondary btn-lg"
                  title="Menu"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={NavLink} to="/">
                    All Cryptocurrencies
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/favorites">
                    My Favorites
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Under Construction</NavDropdown.Item>
                </NavDropdown>
              </Col>
            ) : null}

            <Col sm={2}>
              {isLoggedIn ? (
                <Button variant="secondary" size="lg" as={NavLink} to="/logout">
                  Logout
                </Button>
              ) : (
                <Button variant="secondary" size="lg" as={NavLink} to="/login">
                  Login
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </Navbar>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  .btn {
    margin: 1%;
    font-size: 1.6rem;
  }
  .nav_row {
    width: 100%;
  }
  .navbar-brand {
    font-size: 3rem;
  }
  .dark a:hover {
    color: white;
  }
  .nav_item_container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
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
  .dropdown-menu a {
    font-size: 1.4rem;
    color: black;
  }
  .dropdown {
    font-size: 1.6rem;
  }
  .dropdown-menu.show {
    background-color: silver;
  }
`;

export default Navhead;
