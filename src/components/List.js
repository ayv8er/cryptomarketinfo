import React, { useEffect } from "react";
import { connect } from "react-redux";
import Crypto from "./Crypto";
import styled from "styled-components";
import { getCoinData } from "../actions/listAction";

const List = (props) => {
  const { cryptos, getCoinData, darkMode } = props;

  useEffect(() => {
    getCoinData();
  });

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
          {cryptos.map((crypto) => {
            return <Crypto key={crypto.id} crypto={crypto} />;
          })}
        </tbody>
      </table>
    </StyledList>
  );
};

const StyledList = styled.div`
  .table {
    width: 70vw;
    font-size: 1.6rem;
  }
`;

const mapStateToProps = (state) => {
  return {
    cryptos: state.list.cryptos,
  };
};

export default connect(mapStateToProps, { getCoinData })(List);
