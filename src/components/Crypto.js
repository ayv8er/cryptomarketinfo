import React from "react";
import { connect } from "react-redux";

import { addFavorites } from "../actions/favoritesAction";

import "./Components.css";

const Crypto = (props) => {
  const handleClick = () => {
    props.addFavorites(props.crypto);
  };

  return (
    <tr style={{ border: "1px solid black" }}>
      <td style={{ padding: "20px 20px" }}>
        <span>
          <input
            type="button"
            className="addFavButton"
            value="Track"
            onClick={handleClick}
          />
        </span>
      </td>
      <td style={{ padding: "20px 20px" }}>{props.crypto.market_cap_rank}</td>
      <td style={{ padding: "20px 20px" }}>
        {props.crypto.name}
        <span style={{ color: "grey" }}>
          {" "}
          {props.crypto.symbol.toUpperCase()}
        </span>
      </td>
      <td style={{ padding: "20px 20px" }}>
        ${props.crypto.current_price.toFixed(2)}
      </td>
      <td style={{ padding: "20px 20px" }}>
        {props.crypto.price_change_percentage_24h > 0 ? (
          <span style={{ color: "green" }}>
            {`${props.crypto.price_change_percentage_24h.toFixed(2)}%`}
          </span>
        ) : (
          <span style={{ color: "red" }}>
            {`${props.crypto.price_change_percentage_24h.toFixed(2)}%`}
          </span>
        )}
      </td>
      <td style={{ padding: "20px 20px", textAlign: "right" }}>
        ${props.crypto.market_cap.toLocaleString()}
      </td>
      <td style={{ padding: "20px 20px", textAlign: "right" }}>
        {props.crypto.circulating_supply.toLocaleString()}
      </td>
      <td style={{ padding: "20px 20px", textAlign: "right" }}>
        {props.crypto.total_supply &&
          props.crypto.total_supply.toLocaleString()}
      </td>
    </tr>
  );
};

export default connect(null, { addFavorites })(Crypto);
