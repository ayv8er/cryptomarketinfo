import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { removeFavorites } from "../actions/favoritesAction";

const Fav = (props) => {
  const handleClick = (id) => {
    props.removeFavorites(id);
  };
  return (
    <tr>
      <th scope="row">
        <span>
          <Button size="lg" onClick={() => handleClick(props.fav.id)}>
            Untrack
          </Button>
        </span>
      </th>
      <td>{props.fav.name}</td>
      <td>${props.fav.current_price}</td>
      <td>
        {props.fav.price_change_percentage_24h < 0 ? (
          <span style={{ color: "red" }}>
            {`${props.fav.price_change_percentage_24h.toFixed(2)}%`}
          </span>
        ) : (
          <span style={{ color: "green" }}>
            {`${props.fav.price_change_percentage_24h.toFixed(2)}%`}
          </span>
        )}
      </td>
    </tr>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
  };
};

export default connect(mapStateToProps, { removeFavorites })(Fav);
