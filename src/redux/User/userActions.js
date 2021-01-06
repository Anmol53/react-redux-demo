import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userTypes";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: { user },
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: { error },
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((r) =>
        dispatch(fetchUserSuccess(r[Math.floor(Math.random() * 10)]))
      )
      .catch((r) => dispatch(fetchUserFailure(r.message)));
  };
};
