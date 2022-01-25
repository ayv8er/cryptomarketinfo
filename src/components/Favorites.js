import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Fav from "./Fav";

const Favorites = (props) => {
  const { darkMode } = props;
  const tableHeaders = [
    "",
    "#",
    "Name",
    "Price",
    "24 %",
    "Market Cap",
    "Circulating Supply",
    "Total Supply",
  ];
  return (
    <StyledFavorites>
      <Container fluid="true">
        <Row xxl xl lg md sm xs className="justify-content-center">
          <Col
            className="fav_title"
            xxl={10}
            xl={10}
            lg={10}
            md={10}
            sm={10}
            xs={10}
          >
            <h1>Track your favorites here</h1>
          </Col>
        </Row>

        <Row xxl xl lg md sm xs className="justify-content-center">
          <Col xxl={10} xl={10} lg={10} md={10} sm={10} xs={10}>
            {props.favorites.length < 1 ? (
              <h1>
                Head over to the main list and "track" your favorite Cryptos
              </h1>
            ) : (
              <table
                className={
                  darkMode
                    ? "table table-dark table-hover table-striped"
                    : "table table-light table-hover table-striped"
                }
              >
                <thead>
                  <tr>
                    {tableHeaders.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {props.favorites.map((fav) => {
                    return <Fav key={fav.id} fav={fav} />;
                  })}
                </tbody>
              </table>
            )}
          </Col>
        </Row>
      </Container>
    </StyledFavorites>
  );
};

const StyledFavorites = styled.div`
  .fav_title {
    font-size: 1.8rem;
    margin: 3% 0;
  }
  .table {
    font-size: 1.8rem;
  }
  .table td {
    padding: 2rem;
    text-align: left;
  }
  @media screen and (max-width: 995px) {
    .table {
      font-size: 1.6rem;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
  };
};

export default connect(mapStateToProps)(Favorites);
