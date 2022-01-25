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
        <Row xxl xl lg md sm xs className="justify-content-center">
          <Col xxl={10} xl={10} lg={10} md={10} sm={10} xs={10}>
            <Search searchWord={searchWord} setSearchWord={setSearchWord} />
          </Col>
        </Row>
        <Row xxl xl lg md sm xs className="justify-content-center">
          <Col xxl={10} xl={10} lg={10} md={10} sm={10} xs={10}>
            <List
              darkMode={darkMode}
              searchWord={searchWord}
              setSearchWord={setSearchWord}
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
