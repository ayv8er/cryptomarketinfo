import React from "react";
import { connect } from "react-redux";

import Fav from "./Fav";

import "./Components.css";

const Favorites = (props) => {
  return (
    <>
      <div className="favHeader">
        <h3> Favorites Price Tracker </h3>
      </div>
      <div>
        {props.favorites.map((fav) => {
          return <Fav key={fav.id} fav={fav} />;
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
  };
};

export default connect(mapStateToProps)(Favorites);
