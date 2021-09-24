import React, { useState } from "react";
import { connect } from "react-redux";

import { searchCrypto } from "../actions/listAction";
import "./Components.css";

const Search = (props) => {
  const [state, setState] = useState("");

  const handleChange = (word) => {
    setState(word);
    props.searchCrypto(state);
  };

  return (
    <div className="searchBar">
      <label>Search Crypto:</label>
      <input
        name="search"
        type="text"
        placeholder="Type in your crypto"
        value={state}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cryptos: state.list.cryptos,
  };
};

export default connect(mapStateToProps, { searchCrypto })(Search);
