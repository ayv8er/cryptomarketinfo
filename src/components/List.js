import React, { useEffect } from "react";
import { connect } from "react-redux";

import Crypto from "./Crypto";

import styled from "styled-components";
import { getCoinData } from "../actions/listAction";

const List = (props) => {
  const { cryptos, getCoinData, darkMode, searchWord, isLoggedIn } = props;

  useEffect(() => {
    getCoinData();
  });

  const filteredList = () => {
    if (searchWord.trim() === "") {
      return cryptos;
    }
    return cryptos.filter((crypto) =>
      crypto.name.toLowerCase().includes(searchWord.trim().toLowerCase())
    );
  };

  return (
    <StyledList>
      <table
        class={
          darkMode
            ? "table table-dark table-hover table-striped"
            : "table table-light table-hover table-striped"
        }
      >
        <thead>
          <tr>
            {isLoggedIn ? <th></th> : null}
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
          {filteredList().map((crypto) => {
            return (
              <Crypto key={crypto.id} crypto={crypto} isLoggedIn={isLoggedIn} />
            );
          })}
        </tbody>
      </table>
    </StyledList>
  );
};

const StyledList = styled.div`
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
    cryptos: state.list.cryptos,
  };
};

export default connect(mapStateToProps, { getCoinData })(List);
