import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Fav from "./Fav";

const Favorites = (props) => {
  const { darkMode } = props;

  return (
    <StyledFavorites>
      <div className="favorites_container">
        <table
          className={
            darkMode
              ? "table table-dark table-hover table-striped"
              : "table table-light table-hover table-striped"
          }
        >
          <thead>
            <tr>
              <th>Favorites</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h %</th>
            </tr>
          </thead>
          <tbody>
            {props.favorites.map((fav) => {
              return <Fav key={fav.id} fav={fav} />;
            })}
          </tbody>
        </table>
      </div>
    </StyledFavorites>
  );
};

const StyledFavorites = styled.div`
  .table {
    width: 25vw;
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
