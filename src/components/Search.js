import React from "react";
import { connect } from "react-redux";

import { searchCrypto } from "../actions/listAction";
import styled from "styled-components";

const Search = (props) => {
  const { searchWord, setSearchWord } = props;

  const handleChange = (e) => {
    e.preventDefault();
    setSearchWord(e.target.value);
  };

  return (
    <StyledSearch>
      <div className="search_bar">
        <label>Search </label>
        <input
          name="search"
          type="text"
          placeholder="Start typing..."
          value={searchWord}
          onChange={handleChange}
        />
      </div>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  .search_bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.6rem;
  }
  .search_bar label {
    margin-right: 5%;
  }
`;

const mapStateToProps = (state) => {
  return {
    cryptos: state.list.cryptos,
  };
};

export default connect(mapStateToProps, { searchCrypto })(Search);
