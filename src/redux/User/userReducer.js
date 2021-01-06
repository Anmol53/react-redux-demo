import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userTypes";

const initialState = {
  loading: false,
  user: "",
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        loading: true,
        user: "",
        error: "",
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload.user,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        user: "",
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default userReducer;
