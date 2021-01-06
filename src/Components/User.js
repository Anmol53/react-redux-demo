import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux";

function User(props) {
  useEffect(() => {
    props.fetchUser();
  }, []);
  return (
    <h2>
      {props.userData.loading
        ? "loading..."
        : props.userData.error
        ? "Error..."
        : `Customer: ${props.userData.user.name}`}
    </h2>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
