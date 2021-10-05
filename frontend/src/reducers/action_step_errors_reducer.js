import {
    RECEIVE_PLAN,
  } from '../actions/disaster_plan_actions';
import {
    RECEIVE_USER_SIGN_IN
} from '../actions/session_actions'
import {
    RECEIVE_ACTION_STEP_ERRORS, 
    CLEAR_ACTION_STEP_ERRORS
} from '../actions/action_step_actions'
  
  const _nullErrors = [];
  
  const ActionStepErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_ACTION_STEP_ERRORS:
        return action.errors;
      case RECEIVE_PLAN:
        return _nullErrors;
      case RECEIVE_USER_SIGN_IN:
        return _nullErrors;
      case CLEAR_ACTION_STEP_ERRORS:
        return _nullErrors;
      default:
        return state;
    }
  };
  
  export default ActionStepErrorsReducer;