import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { addCoinData } from "../actions/listsAction";

const IncreaseList = (props) => {
  const { darkMode, page } = props;

  const handleClick = (e) => {
    e.preventDefault();
    addCoinData(page);
  };

  return (
    <StyledIncreaseList>
      <div className="info">
        <Button
          onClick={handleClick}
          variant={darkMode ? "secondary" : "outline-secondary"}
          size="lg"
        >
          Add Next 50
        </Button>
      </div>
    </StyledIncreaseList>
  );
};

const StyledIncreaseList = styled.div`
  .info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.8rem;
  }
  .btn {
    font-size: 1.6rem;
    margin: 5%;
  }
  @media screen and (max-width: 500px) {
    .btn {
      font-size: 1.4rem;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    page: state.lists.page,
  };
};

export default connect(mapStateToProps, { addCoinData })(IncreaseList);
