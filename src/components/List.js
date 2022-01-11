import React, { useEffect } from "react";
import { connect } from "react-redux";
import Crypto from "./Crypto";
// import Search from "./Search";
import { Table } from "reactstrap";
import "../index.css";

import { getCoinData } from "../actions/listAction";

const List = (props) => {
  const { cryptos, getCoinData } = props;

  useEffect(() => {
    getCoinData();
  });

  return (
    <section className="searchAndIndexBody">
      {/* <div className='searchBar'>
        <Search />
      </div> */}
      <Table hover>
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
      </Table>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    cryptos: state.list.cryptos,
  };
};

export default connect(mapStateToProps, { getCoinData })(List);
