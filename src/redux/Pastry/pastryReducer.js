import { BUY_PASTRY } from "./pastryTypes";

const initialState = {
  numOfPastry: 50,
};

const pastryReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PASTRY:
      return {
        ...state,
        numOfPastry: state.numOfPastry - action.payload,
      };
    default:
      return state;
  }
};

export default pastryReducer;
