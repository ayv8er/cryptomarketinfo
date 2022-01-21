import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Fav from "./Fav";

// {props.favorites.length > 0 && (
//   <Col sm={4}>
//     <Favorites darkMode={darkMode} />
//   </Col>
// )}

const Favorites = (props) => {
  const { darkMode } = props;
  return (
    <StyledFavorites>
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
