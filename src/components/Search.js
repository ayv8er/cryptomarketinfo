import React from "react";
import { connect } from "react-redux";
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
          placeholder="Search the list"
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
    // justify-content: flex-start;
    justify-content: center;
    font-size: 1.8rem;
    margin: 5%;
  }
`;

const mapStateToProps = (state) => {
  return {
    cryptos: state.lists.cryptos,
  };
};

export default connect(mapStateToProps, null)(Search);
