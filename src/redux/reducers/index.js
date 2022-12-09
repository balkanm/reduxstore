import { combineReducers } from "redux";
import carts from "./cartReducer";

const rootReducer = combineReducers({
  carts
});

export default rootReducer;
