import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { addFavorites } from "../actions/favoritesAction";
import useToken from "../hooks/useToken";

const Crypto = (props) => {
  const { token } = useToken();
  const { crypto } = props;

  const handleClick = () => {
    props.addFavorites(props.crypto);
  };
  return (
    <tr>
      {token ? (
        <th scope="row">
          <span>
            <Button variant="info" size="lg" onClick={handleClick}>
              Track
            </Button>
          </span>
        </th>
      ) : null}

      <td>{crypto.market_cap_rank}</td>
      <td>
        {crypto.name}
        <span style={{ color: "grey" }}> {crypto.symbol.toUpperCase()}</span>
      </td>
      <td>${crypto.current_price.toFixed(2)}</td>
      <td>
        {crypto.price_change_percentage_24h < 0 ? (
          <span style={{ color: "red" }}>
            {`${crypto.price_change_percentage_24h.toFixed(2)}%`}
          </span>
        ) : (
          <span style={{ color: "green" }}>
            {`${crypto.price_change_percentage_24h.toFixed(2)}%`}
          </span>
        )}
      </td>
      <td>${crypto.market_cap.toLocaleString()}</td>
      <td>{crypto.circulating_supply.toLocaleString()}</td>
      <td>{crypto.total_supply && crypto.total_supply.toLocaleString()}</td>
    </tr>
  );
};

export default connect(null, { addFavorites })(Crypto);
