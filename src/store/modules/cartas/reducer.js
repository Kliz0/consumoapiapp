import { combineReducers } from "redux";

import getCartas from "./actions/getCartas";
import addCarta from "./actions/addCarta";

export default combineReducers({
  getCartas,
  addCarta,
});
