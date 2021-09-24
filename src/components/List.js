import React, { useEffect } from "react";
import { connect } from "react-redux";

import Crypto from "./Crypto";
import Search from "./Search";

import { getCoinData } from "../actions/listAction";

const List = (props) => {
  console.log(props);
  const { cryptos, getCoinData } = props;

  useEffect(() => {
    getCoinData();
  }, []);

  return (
    <section>
      <div>
        <Search />
      </div>
      <table>
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
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    cryptos: state.list.cryptos,
    isFetching: state.list.isFetching,
    error: state.list.error,
  };
};

export default connect(mapStateToProps, { getCoinData })(List);
