import React, { useEffect } from "react";
import { connect } from "react-redux";

import Crypto from "./Crypto";

import { Spinner } from "react-bootstrap";
import styled from "styled-components";

import { getCoinData } from "../actions/listsAction";
import useToken from "../hooks/useToken";

const List = (props) => {
  const { cryptos, getCoinData, darkMode, searchWord } = props;
  const { token } = useToken();

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

  const tableHeaders = [
    "#",
    "Name",
    "Price",
    "24 %",
    "Market Cap",
    "Circulating Supply",
    "Total Supply",
  ];

  return (
    <StyledList>
      {props.isFetching ? (
        <Spinner animation="grow" variant="primary" />
      ) : (
        <table
          class={
            darkMode
              ? "table table-dark table-hover table-striped"
              : "table table-light table-hover table-striped"
          }
        >
          <thead>
            <tr>
              {token ? <th></th> : null}
              {tableHeaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredList().map((crypto) => {
              return <Crypto key={crypto.id} crypto={crypto} />;
            })}
          </tbody>
        </table>
      )}
    </StyledList>
  );
};

const StyledList = styled.div`
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
    cryptos: state.lists.cryptos,
  };
};

export default connect(mapStateToProps, { getCoinData })(List);
