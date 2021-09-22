import { combineReducers } from "redux";
import session from "./session_api_reducer";
import errors from "./errors_reducers";
import entities from "./entities_reducer";
import modal from "./modals_reducer";

const RootReducer = combineReducers({
  entities,
  session,
  errors,
  modal
});

export default RootReducer;
