import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import List from "./List";
import Search from "./Search";
// import IncreaseList from "./IncreaseList";

import styled from "styled-components";

const Body = (props) => {
  const { darkMode } = props;
  const [searchWord, setSearchWord] = useState("");

  return (
    <StyledBody>
      <Container fluid="true">
        <Row xxl xl lg md sm xs className="justify-content-center">
          {/* <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}>
            <IncreaseList darkMode={darkMode} />
          </Col>{" "} */}
          <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
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
