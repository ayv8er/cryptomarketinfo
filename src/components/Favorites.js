import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Fav from "./Fav";

const Favorites = (props) => {
  const { darkMode } = props;
  return (
    <StyledFavorites>
      <Container fluid="true">
        <Row className="justify-content-md-center">
          <Col sm={10}>
            <table
              className={
                darkMode
                  ? "table table-dark table-hover table-striped"
                  : "table table-light table-hover table-striped"
              }
            >
              <thead>
                <tr>
                  <th></th>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>24h %</th>
                  <th>Market Cap</th>
                  <th>Circulating Supply</th>
                  <th>Total Supply</th>
                </tr>
              </thead>
              <tbody>
                {props.favorites.map((fav) => {
                  return <Fav key={fav.id} fav={fav} />;
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </StyledFavorites>
  );
};

const StyledFavorites = styled.div`
  .table {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 995px) {
    .table {
      font-size: 1.4rem;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
  };
};

export default connect(mapStateToProps)(Favorites);
