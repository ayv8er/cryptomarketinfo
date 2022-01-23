import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { removeFavorites } from "../actions/favoritesAction";

const Fav = (props) => {
  const handleClick = () => {
    props.removeFavorites(props.fav.id);
  };
  return (
    <tr>
      <th scope="row">
        <span>
          <Button variant="secondary" size="lg" onClick={handleClick}>
            Untrack
          </Button>
        </span>
      </th>
      <td>{props.fav.market_cap_rank}</td>
      <td>
        {props.fav.name}
        <span style={{ color: "grey" }}> {props.fav.symbol.toUpperCase()}</span>
      </td>
      <td>${props.fav.current_price.toFixed(2)}</td>
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
      <td>${props.fav.market_cap.toLocaleString()}</td>
      <td>{props.fav.circulating_supply.toLocaleString()}</td>
      <td>
        {props.fav.total_supply && props.fav.total_supply.toLocaleString()}
      </td>
    </tr>
  );
};

export default connect(null, { removeFavorites })(Fav);
