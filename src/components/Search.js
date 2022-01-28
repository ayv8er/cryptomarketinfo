import React from "react";
import { connect } from "react-redux";

import { searchCrypto } from "../actions/listsAction";
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
        <input
          name="search"
          type="text"
          placeholder="Search a Crypto"
          value={searchWord}
          onChange={handleChange}
        />
      </div>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  .search_bar {
    font-size: 1.8rem;
    margin: 3% 0;
  }
`;

const mapStateToProps = (state) => {
  return {
    cryptos: state.lists.cryptos,
  };
};

export default connect(mapStateToProps, { searchCrypto })(Search);
