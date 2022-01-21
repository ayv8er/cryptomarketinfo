import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import List from "./List";
import Search from "./Search";

import styled from "styled-components";

const Body = (props) => {
  const { darkMode } = props;
  const [searchWord, setSearchWord] = useState("");

  return (
    <StyledBody>
      <Container fluid="true">
        <Row className="justify-content-md-center">
          <Col>
            <Search searchWord={searchWord} setSearchWord={setSearchWord} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={10}>
            <List
              searchWord={searchWord}
              setSearchWord={setSearchWord}
              darkMode={darkMode}
            />
          </Col>
        </Row>
      </Container>
    </StyledBody>
  );
};

const StyledBody = styled.div`
  .body_row {
    display: flex;
    justify-content: center;
  }
`;

export default Body;
