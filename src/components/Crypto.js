import React from "react";
import { connect } from "react-redux";

import { addFavorites } from "../actions/favoritesAction";

import "./Components.css";

const Crypto = (props) => {
  const handleClick = () => {
    props.addFavorites(props.crypto);
  };

  return (
    <tr>
      <td>
        <span>
          <input
            type="button"
            className="addFavButton"
            value=""
            onClick={handleClick}
          />
        </span>
      </td>
      <td>{props.crypto.market_cap_rank}</td>
      <td>
        {props.crypto.name}
        <span style={{ color: "grey" }}>
          {" "}
          {props.crypto.symbol.toUpperCase()}
        </span>
      </td>
      <td>${props.crypto.current_price.toLocaleString()}</td>
      <td>
        {props.crypto.price_change_percentage_24h > 0 ? (
          <span style={{ color: "green" }}>
            {props.crypto.price_change_percentage_24h}
          </span>
        ) : (
          <span style={{ color: "red" }}>
            {props.crypto.price_change_percentage_24h}
          </span>
        )}
      </td>
      <td>${props.crypto.market_cap.toLocaleString()}</td>
      <td>{props.crypto.circulating_supply.toLocaleString()}</td>
      <td>
        {props.crypto.total_supply &&
          props.crypto.total_supply.toLocaleString()}
      </td>
    </tr>
  );
};

export default connect(null, { addFavorites })(Crypto);
