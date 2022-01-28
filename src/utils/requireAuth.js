import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = (props) => {
  return props.token ? props.children : <Navigate to={props.redirectTo} />;
};

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
  };
};

export default connect(mapStateToProps, null)(RequireAuth);
