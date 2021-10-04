import { combineReducers } from "redux";
import DisasterPlanErrorsReducer from "./disaster_plan_errors_reducer";
import ActionStepErrorsReducer from "./action_step_errors_reducer";
import ProfileErrorsReducer from "./profile_errors_reducer";
import RelativeErrorsReducer from "./relative_errors_reducer";
import SessionErrorsReducer from "./session_errors_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  plans: DisasterPlanErrorsReducer,
  actionSteps: ActionStepErrorsReducer,
  profile: ProfileErrorsReducer,
  relative: RelativeErrorsReducer
});
