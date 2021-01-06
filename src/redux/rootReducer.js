import { combineReducers } from "redux";
import cakeReducer from "./Cake/cakeReducer";
import icecreamReducer from "./Icecream/icecreamReducer";
import pastryReducer from "./Pastry/pastryReducer";
import userReducer from "./User/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  pastry: pastryReducer,
  user: userReducer,
});
export default rootReducer;
