import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";

const Navhead = (props) => {
  const { darkMode, setDarkMode } = props;

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
            <Col sm={8} className={darkMode ? "dark" : null}>
              <Navbar.Brand href="/">Cryptocurrency Price Tracker</Navbar.Brand>
            </Col>

            <Col sm={2}>
              <Button variant="secondary" size="lg" as={NavLink} to="/login">
                Login
              </Button>
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
`;

export default Navhead;
