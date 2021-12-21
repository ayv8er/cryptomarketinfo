import React from "react";
import { connect } from "react-redux";

import Fav from "./Fav";

import "../index.css";

const Favorites = (props) => {
  return (
    <section className="favContainer">
      <div className="favHeader">
        <h3> Favorites Price Tracker </h3>
      </div>
      {props.favorites.map((fav) => {
        return <Fav key={fav.id} fav={fav} />;
      })}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
  };
};

export default connect(mapStateToProps)(Favorites);
