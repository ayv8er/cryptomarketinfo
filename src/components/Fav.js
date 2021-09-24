import React from "react";
import { connect } from "react-redux";

import { removeFavorites } from "../actions/favoritesAction";

import "./Components.css";

const Fav = (props) => {
  const handleClick = (id) => {
    console.log(id);
    props.removeFavorites(id);
  };
  return (
    <div className="isCurrently">
      <p style={{ fontSize: "1.2rem" }}>
        {props.fav.name} is currently
        <br />
        <span style={{ fontSize: "2rem" }}> ${props.fav.current_price} </span>
      </p>

      <div className="stopTrackBtn">
        <button onClick={() => handleClick(props.fav.id)}>
          Stop Tracking {props.fav.name}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
  };
};

export default connect(mapStateToProps, { removeFavorites })(Fav);

//props.fav.price_change_24h > 0 ? style={{ fontSize: '2rem', color: 'darkgreen'}} : style={{ fontSize: '2rem', color: 'crimson'}}
