import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { removeFavorites } from "../actions/favoritesAction";

const Fav = (props) => {
  const { fav } = props;
  const handleClick = () => {
    props.removeFavorites(fav.id);
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
      <td>{fav.market_cap_rank}</td>
      <td>
        {fav.name}
        <span style={{ color: "grey" }}> {fav.symbol.toUpperCase()}</span>
      </td>
      <td>${fav.current_price.toFixed(2)}</td>
      <td>
        {fav.price_change_percentage_24h < 0 ? (
          <span style={{ color: "red" }}>
            {`${fav.price_change_percentage_24h.toFixed(2)}%`}
          </span>
        ) : (
          <span style={{ color: "green" }}>
            {`${fav.price_change_percentage_24h.toFixed(2)}%`}
          </span>
        )}
      </td>
      <td>${fav.market_cap.toLocaleString()}</td>
      <td>{fav.circulating_supply.toLocaleString()}</td>
      <td>{fav.total_supply && fav.total_supply.toLocaleString()}</td>
    </tr>
  );
};

export default connect(null, { removeFavorites })(Fav);
