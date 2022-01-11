import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { removeFavorites } from "../actions/favoritesAction";

import "../index.css";

const Fav = (props) => {
  const handleClick = (id) => {
    props.removeFavorites(id);
  };
  return (
    <section className="favTrackBody">
      <div className="stopTrackBtn">
        <Button onClick={() => handleClick(props.fav.id)}>Untrack</Button>
      </div>
      <div>{props.fav.name}</div>
      <div>${props.fav.current_price}</div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
  };
};

export default connect(mapStateToProps, { removeFavorites })(Fav);
