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
  const { token, darkMode, setDarkMode } = props;

  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <StyledNavbar>
      <Navbar sticky="top">
        <Container fluid>
          <Row>
            <Col sm={2} className="nav_item_container">
              <div>Dark Mode</div>
              <div className="dark-mode__toggle">
                <div
                  onClick={toggleMode}
                  className={darkMode ? "toggle toggled" : "toggle"}
                />
              </div>
            </Col>
            <Col sm={8} className={darkMode ? "dark" : null}>
              <Navbar.Brand href="/">Crypto Market Cap</Navbar.Brand>
            </Col>

            <Col sm={2}>
              {token ? (
                <NavDropdown
                  className={
                    darkMode
                      ? "btnd btn btn-lg"
                      : "btn btn-outline-secondary btn-lg"
                  }
                  title="Menu"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={NavLink} to="/">
                    Main List
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/favorites">
                    My Favorites List
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={NavLink} to="/logout">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Button
                  variant={darkMode ? "secondary" : "outline-secondary"}
                  size="lg"
                  as={NavLink}
                  to="/login"
                >
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
    margin: 5%;
    padding: 5% 10%;
    font-size: 1.8rem;
    font-weight: bold;
  }
  .btnd {
    background: #6c757d;
    border-color: #6c757d;
  }
  .btn:hover {
    opacity: 80%;
  }
  .row {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-size: 1.8rem;
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
    background: black;
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
    background: #6c757d;
    border-color: #6c757d;
  }
`;

export default Navhead;
