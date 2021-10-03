import { combineReducers } from "redux";
import RelativeErrorsReducer from "./relative_errors_reducer";
import SessionErrorsReducer from "./session_errors_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  relative: RelativeErrorsReducer
});
